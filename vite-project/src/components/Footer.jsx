import React from 'react'

const Footer = () => {
  return (
    <section id='section5'>
    <div className='flex flex-col items-center justify-center bg-primary-color h-[250px]'>
      <div className='flex flex-col sm:flex-row gap-8 sm:items-center justify-between max-w-4xl w-full p-8 mx-auto'>
        <div className='space-y-1 size-40'>
          <h1 className='flex flex-col font-bold items-center text-3xl text-white'>TrackIn</h1>
          <img src="public/logo.png"  />
        </div>
        <div className='space-y-4'>
            <h4 className='text-2xl font-bold text-white'>Tentang Kami</h4>
            <ul className='space-y-3'>
                <li className='hover:text-[#000000] text-white'>Perusahaan</li>
                <li className='hover:text-[#000000] text-white'>Mitra</li>
                <li className='hover:text-[#000000] text-white'>Testimoni</li>
                <br />
            </ul>
        </div>
        
        <div className='space-y-4'>
            <h4 className='text-2xl font-bold text-white'>Hubungi Kami</h4>
            <ul className='space-y-3'>  
                <li className='hover:text-[#000000] text-white'><ion-icon name="call-outline"></ion-icon> 082498701234</li>
                <li className='hover:text-[#000000] text-white'><ion-icon name="logo-whatsapp"></ion-icon> 085635890126</li>
                <li className='hover:text-[#000000] text-white'><ion-icon name="logo-instagram"></ion-icon> track.in</li>
                <li className='hover:text-[#000000] text-white'><ion-icon name="mail-outline"></ion-icon> trackin@gmail.com</li>
            </ul>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Footer