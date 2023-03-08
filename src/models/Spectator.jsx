import * as THREE from 'three';
import { useEffect, useState, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

function Spectator(props) {
	// const { nodes } = useGLTF('public/carla-draco.glb')
	const { scene } = useGLTF('./spectator.glb');

	const [hovered, set] = useState();
	const carla = useRef();

	useEffect(() => {
		if (hovered)
			carla.current.getObjectByName(hovered).material.color.set('white');
		document.body.style.cursor = hovered ? 'pointer' : 'auto';
	}, [hovered]);

	useFrame(() => {
		carla.current.children[1].material.color.lerp(
			color.set(
				hovered === carla.current.children[1].name ? 'tomato' : '#202020'
			),
			hovered ? 0.1 : 0.05
		);
	});

	const color = new THREE.Color();

	return (
		// <mesh receiveShadow castShadow geometry={nodes.bunny.geometry} {...props}>
		//  <primitiveStandardMaterial color="#222" roughness={0.5} />
		// </mesh>

		<primitive
			receiveShadow
			castShadow
			object={scene}
			onPointerOver={(e) => (e.stopPropagation(), set(e.object.name))}
			onPointerOut={(e) => (e.stopPropagation(), set(null))}
			ref={carla}
			{...props}
		/>
	);
}

export default Spectator;
