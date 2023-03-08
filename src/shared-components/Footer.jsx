import React from 'react'

function Footer() {
  return (
    <>
      <div className="px-10 py-5 lg:py-10 text-xs lg:text-base flex justify-end items-center h-[10%]">{new Date().toLocaleDateString('de-DE')}</div>
    </>
  )
}

export default Footer
