import React from 'react'
import { useNavigate } from 'react-router-dom'

const Pengaturan = () => {
    const navigate = useNavigate()

  return (
    <div className='w-full h-screen flex items-start'>
        <div className='relative w-80 h-full flex flex-col bg-gradient-to-b from-second-color via-fourth-color to-second-color'>
            <div className='w-20 absolute top-[10%] left-[35%] flex flex-col'>
                <img src="public/trackinlogo.png" onClick={() => navigate('/')} className='cursor-pointer' />
                <h1 className='flex flex-col justify-center items-center'>TrackIn</h1>
            </div>

            <ul className='w-20 gap-5 absolute bottom-[40%] left-[35%] flex flex-col'>
                <li className='hover:flex justify-center cursor-pointer transition duration-200 text-black hover:bg-primary-color hover:text-white rounded-lg transform hover:scale-110' onClick={() => navigate('/beranda')}>Beranda</li>
                <li className='hover:flex justify-center cursor-pointer transition duration-200 text-black hover:bg-primary-color hover:text-white rounded-lg transform hover:scale-110' onClick={() => navigate('/stokbarang')}>Stok</li>
                <li className='hover:flex justify-center cursor-pointer transition duration-200 text-black hover:bg-primary-color hover:text-white rounded-lg transform hover:scale-110' onClick={() => navigate('/laporan')}>Laporan</li>
                <li className='flex justify-center cursor-pointer transition duration-200 bg-primary-color text-white rounded-lg transform scale-110' onClick={() => navigate('/pengaturan')}>Pengaturan</li>
            </ul>
            
            <div className='gap-5 absolute bottom-[10%] left-[12%] flex justify-center'>
                <button className='w-60 py-2 bg-primary-color text-white rounded-md cursor-pointer hover:bg-black'>Logout</button>
            </div>
        </div>

        <div className='items-center bg-white p-10'>
            <h1 className='text-4xl font-semibold mb-2'>Pengaturan</h1>
        </div>
    </div>
  )
}

export default Pengaturan
