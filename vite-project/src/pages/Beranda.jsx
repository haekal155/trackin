import React from 'react'
import { useNavigate } from 'react-router-dom'

const Beranda = () => {
    const navigate = useNavigate()
    
  return (
    <div className='w-full h-screen flex items-start'>
        <div className='relative w-80 h-full flex flex-col bg-gradient-to-b from-second-color via-fourth-color to-second-color'>
            <div className='w-20 absolute top-[10%] left-[35%] flex flex-col'>
                <img src="public/trackinlogo.png" onClick={() => navigate('/')} className='cursor-pointer' />
                <h1 className='flex flex-col justify-center items-center'>TrackIn</h1>
            </div>

            <ul className='w-20 gap-5 absolute bottom-[40%] left-[35%] flex flex-col'>
                <li className='flex justify-center cursor-pointer transition duration-200 bg-primary-color w-24 text-white rounded-lg transform scale-110' onClick={() => navigate('/beranda')}>Beranda</li>
                <li className='hover:flex justify-center cursor-pointer transition duration-200 text-black hover:bg-primary-color w-24 hover:text-white rounded-lg transform hover:scale-110' onClick={() => navigate('/stokbarang')}>Stok</li>
                <li className='hover:flex justify-center cursor-pointer transition duration-200 text-black hover:bg-primary-color w-24 hover:text-white rounded-lg transform hover:scale-110' onClick={() => navigate('/laporan')}>Laporan</li>
                <li className='hover:flex justify-center cursor-pointer transition duration-200 text-black hover:bg-primary-color w-24 hover:text-white rounded-lg transform hover:scale-110' onClick={() => navigate('/pengaturan')}>Pengaturan</li>
            </ul>
            
            <div className='gap-5 absolute bottom-[10%] left-[12%] flex justify-center'>
                <button className='w-60 py-2 bg-primary-color text-white rounded-md cursor-pointer hover:bg-black'>Logout</button>
            </div>
        </div>

        <div className='items-center bg-white p-10'>
            <h1 className='text-4xl font-semibold mb-2'>Beranda</h1>
        
        <div className='flex justify-between'>
            <div className="bg-third-color p-4 rounded-lg shadow-md mb-6 size-1/1 mr-6 mt-5">
                <span className="material-icons bg-white rounded-md size-10 flex items-center justify-center">shopping_cart</span>
                <h2 className="text-xl font-semibold mb-2 pt-5">10 Item</h2>
                <p className="list-disc list-inside">Total Order Hari ini</p>
            </div>

            <div className="bg-fifth-color p-4 rounded-lg shadow-md mb-6 size-3/1 mr-6 mt-5">
                <span className="material-icons bg-white rounded-md size-10 flex items-center justify-center">monetization_on</span>
                <h2 className="text-xl font-semibold mb-2 pt-5">Rp 1.000.000</h2>
                <p className="list-disc list-inside">Total Pendapatan Hari ini</p>
            </div>

        </div>

        <div className="bg-second-color p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2 text-center">Top Item</h2>
                <div className='flex'>
                    <div className='bg-white rounded-lg text-center mr-6'>
                        <h1 className='font-bold'>Royal Canin</h1>
                        <p>Rp 200.000</p>
                    </div>

                    <div className='bg-white rounded-lg text-center mr-6'>
                        <h1 className='font-bold'>Royal Canin</h1>
                        <p>Rp 200.000</p>
                    </div>

                    <div className='bg-white rounded-lg text-center mr-6'>
                        <h1 className='font-bold'>Royal Canin</h1>
                        <p>Rp 200.000</p>
                    </div>

                    <div className='bg-white rounded-lg text-center mr-6'>
                        <h1 className='font-bold'>Royal Canin</h1>
                        <p>Rp 200.000</p>
                    </div>

                    <div className='bg-white rounded-lg text-center'>
                        <h1 className='font-bold'>Royal Canin</h1>
                        <p>Rp 200.000</p>
                    </div>
                </div>
        </div>
        </div>    
            
        
        <div className='sticky w-80 h-full bg-white items-center p-10'>
            <h1 className='text-4xl font-semibold mb-2'>Daftar Kasir</h1>
            <div className="bg-white p-4 rounded-xl shadow-md flex items-center">
                <img src="public/orang.jpg" className='size-10 rounded-xl' />
                <li className='pl-2 cursor-pointer' onClick={() => navigate('/berandakasir')}>Ivan</li>
                {/* <p className='pl-2'>Ivan</p> */}
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md flex items-center mt-5">
                <img src="public/orang.jpg" className='size-10 rounded-xl' />
                <p className='pl-2'>Yoana</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md flex items-center mt-5">
                <img src="public/orang.jpg" className='size-10 rounded-xl' />
                <p className='pl-2'>Yuni</p>
            </div>

            <button className=' bg-primary-color p-4 text-fourth-color flex gap-2 items-center rounded-md size-8 w-44 mt-5 hover:bg-black'><span className="material-icons">add_box</span>Tambah Kasir</button>
        </div>
    </div>
  )
}

export default Beranda
