import React from 'react'
import { useNavigate } from 'react-router-dom'

const Laporan = () => {
    const navigate = useNavigate()
    const data = [
        { no: 1, barang: 'Royal Canin', stok: '20', harga: 'Rp80.000' },
        { no: 2, barang: 'Obat Kucing', stok: '10', harga: 'Rp100.000' },
        { no: 3, barang: 'Mainan Kucing', stok: '50', harga: 'Rp8.000' }]

  return (
    <div className='w-full h-screen flex items-start'>
        <div className='relative w-80 h-full flex flex-col bg-gradient-to-b from-second-color via-fourth-color to-second-color'>
            <div className='w-20 absolute top-[10%] left-[35%] flex flex-col'>
                <img src="public/trackinlogo.png" onClick={() => navigate('/')} className='cursor-pointer'/>
                <h1 className='flex flex-col justify-center items-center'>TrackIn</h1>
            </div>

            <ul className='w-20 gap-5 absolute bottom-[40%] left-[35%] flex flex-col'>
                <li className='hover:flex justify-center cursor-pointer transition duration-200 text-black hover:bg-primary-color hover:text-white rounded-lg transform hover:scale-110' onClick={() => navigate('/beranda')}>Beranda</li>
                <li className='hover:flex justify-center cursor-pointer transition duration-200 text-black hover:bg-primary-color hover:text-white rounded-lg transform hover:scale-110' onClick={() => navigate('/stokbarang')}>Stok</li>
                <li className='flex justify-center cursor-pointer transition duration-200 bg-primary-color text-white rounded-lg transform scale-110' onClick={() => navigate('/laporan')}>Laporan</li>
                <li className='hover:flex justify-center cursor-pointer transition duration-200 text-black hover:bg-primary-color hover:text-white rounded-lg transform hover:scale-110' onClick={() => navigate('/pengaturan')}>Pengaturan</li>
            </ul>
            
            <div className='gap-5 absolute bottom-[10%] left-[12%] flex justify-center'>
                <button className='w-60 py-2 bg-primary-color text-white rounded-md cursor-pointer hover:bg-black'>Logout</button>
            </div>
        </div>

        <div className='items-center bg-white p-10'>
            <h1 className='text-4xl font-semibold mb-2'>Laporan</h1>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left">No</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left">Nama Barang</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left">Jumlah Stok</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left">Harga</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row) => (
                            <tr key={row.no} className="hover:bg-gray-100">
                            <td className="py-2 px-4 border-b border-gray-200">{row.no}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{row.barang}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{row.stok}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{row.harga}</td>
                            <td className="py-2 px-4 border-b border-gray-200"></td>
                        </tr>
                        ))}
                    </tbody>
                </table>    
            </div>
        </div>
    </div>
  )
}

export default Laporan
