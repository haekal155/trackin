import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate()

  return (
    <div className='w-full h-screen flex items-start'>
        <div className='relative w-80 h-full flex flex-col bg-gradient-to-b from-second-color via-fourth-color to-second-color'>
            <div className='w-20 absolute top-[10%] left-[35%] flex flex-col'>
                <img src="public/trackinlogo.png" onClick={() => navigate('/')} className='cursor-pointer' />
                <h1 className='flex flex-col justify-center items-center'>TrackIn</h1>
            </div>

            <ul className='w-20 gap-5 absolute bottom-[40%] left-[35%] flex flex-col'>
                <li className='cursor-pointer' onClick={() => navigate('/dashboard')}>Beranda</li>
                <li className='cursor-pointer' onClick={() => navigate('/stokbarang')}>Stok</li>
                <li className='cursor-pointer' onClick={() => navigate('/laporan')}>Laporan</li>
                <li>Pengaturan</li>
            </ul>
            
            <div className='gap-5 absolute bottom-[10%] left-[12%] flex justify-center'>
                <button className='w-60 py-2 bg-primary-color text-white rounded-md cursor-pointer hover:bg-black'>Logout</button>
            </div>
        </div>

        <div className='items-center bg-white p-10'>
            <h1 className='text-4xl font-semibold mb-2'>Beranda</h1>

            <div className="bg-third-color p-4 rounded-lg shadow-md">
                <span className="material-icons">shopping_cart</span>
                <h2 className="text-xl font-semibold mb-2 pt-5">10 Item</h2>
                <p className="list-disc list-inside">Total Order Hari ini</p>
            </div>

            <div className="bg-fifth-color p-4 rounded-lg shadow-md">
                <span className="material-icons">monetization_on</span>
                <h2 className="text-xl font-semibold mb-2 pt-5">Rp 1.000.000</h2>
                <p className="list-disc list-inside">Total Pendapatan Hari ini</p>
            </div>

            <div className="bg-second-color p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2 pt-5">Top Item</h2>
            </div>
        </div>

        <div className='sticky w-80 h-full flex flex-col bg-gradient-to-b from-second-color via-fourth-color to-second-color'>
            <h1 className='text-4xl font-semibold mb-2'>Daftar Kasir</h1>
        </div>
    </div>
  )
}

export default Dashboard
