import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div className='w-full bg-white'>
      <ul className='pt-6 md:flex space-x-10 hidden text-[15px] flex-col md:flex-row justify-center items-center'>
      <a href="" className='text-1xl flex items-center space'><img src="public/trackinlogo.png" className='w-10 inline-block items-center' />TrackIn</a>
        <Link to="/" className='nav-link'>
          <li className='border-transparent transition duration-200 py-5'>Beranda</li>
        </Link>
        <Link to="section2" smooth={true} duration={500}>
          <li className='border-transparent transition duration-200 py-5'>Tentang</li>
        </Link>
        <Link to="/" className='nav-link'>
          <li className='border-transparent transition duration-200 py-5'>Mitra</li>
        </Link>
        <Link to="/" className='nav-link'>
          <li className='border-transparent transition duration-200 py-5'>Testimoni</li>
        </Link>
        <Link to="/" className='nav-link'>
          <li className='border-transparent transition duration-200 py-5'>Kontak</li>
        </Link>
          <button onClick={() => navigate('/register')} className='px-7 py-2 bg-primary-color text-white rounded'>Daftar</button>
      </ul>
    </div>
  )
}

export default Navbar