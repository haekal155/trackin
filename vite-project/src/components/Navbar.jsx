import React from 'react'

const Navbar = () => {
  return (
    <div className='border-b-2 shadow-md fixed w-full bg-white'>
      <ul className='md:flex space-x-10 hidden text-[15px] flex-col md:flex-row justify-center items-center'>
          <li className='border-transparent transition duration-200 hover:bg-blue-500 transform hover:scale-95 py-5'>Beranda</li>
          <li className='border-transparent transition duration-200 hover:bg-blue-500 transform hover:scale-95 py-5'>Tentang</li>
          <li className='border-transparent transition duration-200 hover:bg-blue-500 transform hover:scale-95 py-5'>Mitra</li>
          <li className='border-transparent transition duration-200 hover:bg-blue-500 transform hover:scale-95 py-5'>Testimoni</li>
          <li className='border-transparent transition duration-200 hover:bg-blue-500 transform hover:scale-95 py-5'>Kontak</li>
      </ul>      
    </div>
  )
}

export default Navbar