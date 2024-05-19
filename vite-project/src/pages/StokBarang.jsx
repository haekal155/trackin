import React from 'react'
import { useNavigate } from 'react-router-dom'

const StokBarang = () => {
    const navigate = useNavigate()
    
  return (
    <div className='w-full h-screen flex items-start'>
        <div className='relative w-80 h-full flex flex-col bg-gradient-to-b from-second-color via-fourth-color to-second-color'>
            <div className='w-20 absolute top-[10%] left-[35%] flex flex-col'>
                <img src="public/trackinlogo.png" onClick={() => navigate('/')} className='cursor-pointer'/>
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
            <h1 className='text-4xl font-semibold mb-2'>Stok Barang</h1>
            <button className='bg-primary-color text-fourth-color flex justify-between items-center rounded-md size-8 w-40'><input type="button" /><span className="material-icons">add_box</span>Tambah Barang </button>

            <table className='bg-second-color border mt-11 ml-auto mr-auto text-center rounded-lg'>
                <thead className='text-center'>
                    <input type="text"/>
                    <tr className=''>
                        <th>No</th>
                        <th>Nama Barang</th>
                        <th>Jumlah Stok</th>
                        <th>Harga</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Royal Canin</td>
                        <td>20</td>
                        <td>Rp80.000</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Obat Kucing</td>
                        <td>10</td>
                        <td>Rp100.000</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Mainan Kucing</td>
                        <td>50</td>
                        <td>Rp8.000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default StokBarang