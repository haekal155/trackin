import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Fragment, useState } from 'react'
import TambahBarang from '../components/TambahBarang'
import Swal from 'sweetalert2'

const StokBarang = () => {
    const [showTambahBarang, setShowTambahBarang] = useState(false)
    const navigate = useNavigate()
    const data = [
        { no: 1, barang: 'Royal Canin', stok: '20', harga: 'Rp80.000' },
        { no: 2, barang: 'Obat Kucing', stok: '10', harga: 'Rp100.000' },
        { no: 3, barang: 'Mainan Kucing', stok: '50', harga: 'Rp8.000' }]

        const showAlert = () => {
            Swal.fire({
                title: "Yakin ingin menambahkan?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Ya",
                cancelButtonText: "Tidak"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Berhasil!",
                    icon: "success"
                  });
                }
              });
        }    
    
  return (
    <Fragment>
    <div className='w-full h-screen flex items-start'>
        <div className='relative w-[250px] h-full flex flex-col bg-gradient-to-b from-second-color via-fourth-color to-second-color'>
            <div className='w-20 absolute top-[10%] left-[35%] flex flex-col'>
                <img src="public/trackinlogo.png" onClick={() => navigate('/')} className='cursor-pointer'/>
                <h1 className='flex flex-col justify-center items-center'>TrackIn</h1>
            </div>

            <ul className='w-20 gap-5 absolute bottom-[40%] left-[35%] flex flex-col'>
                <li className='hover:flex justify-center cursor-pointer transition duration-200 text-black hover:bg-primary-color w-32 hover:text-white rounded-lg transform hover:scale-110' onClick={() => navigate('/beranda')}>Beranda</li>
                <li className='flex justify-center cursor-pointer transition duration-200 bg-primary-color w-32 text-white rounded-lg transform scale-110' onClick={() => navigate('/stokbarang')}>Stok</li>
                <li className='hover:flex justify-center cursor-pointer transition duration-200 text-black hover:bg-primary-color w-32 hover:text-white rounded-lg transform hover:scale-110' onClick={() => navigate('/laporan')}>Laporan</li>
                <li className='hover:flex justify-center cursor-pointer transition duration-200 text-black hover:bg-primary-color w-32 hover:text-white rounded-lg transform hover:scale-110' onClick={() => navigate('/pengaturan')}>Pengaturan</li>
            </ul>
            
            <div className='gap-5 absolute bottom-[10%] left-[12%] flex justify-center'>
                <button className='w-48 py-2 bg-primary-color text-white rounded-md cursor-pointer hover:bg-black'>Logout</button>
            </div>
        </div>

        <div className='items-center bg-white p-10'>
            <div className='flex justify-between'>
                <h1 className='text-4xl font-semibold mb-2'>Stok Barang</h1>
                <button className='bg-primary-color text-fourth-color flex gap-2 items-center rounded-md size-8 w-44 hover:bg-black' onClick={() => setShowTambahBarang(true)}><span className="material-icons">add_box</span>Tambah Barang </button>
            </div>

            <div className="overflow-x-auto mt-5">
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
    <TambahBarang isvisible={showTambahBarang} onClose={() => setShowTambahBarang(false)}>
            <div className='p-6'>
                <h3 className='text-xl font-semibold text-gray-900 mb-5'>Tambah Barang</h3>
                <form className="space-y-6" action='#'>
                    <div>
                        <label htmlFor="text" className='block mb-2 text-sm font-medium text-gray-900'>Nama Barang</label>
                        <input type="text" name='namabarang' id='namabarang' className='mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='Masukkan Nama Barang' required/>

                        <label htmlFor="number" className='block mb-2 text-sm font-medium text-gray-900'>Harga Barang</label>
                        <input type="number" name='hargabarang' id='hargabarang' className='mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='Masukkan Harga Barang' required/>

                        <label htmlFor="number" className='block mb-2 text-sm font-medium text-gray-900'>Jumlah Stok</label>
                        <input type="number" name='jumlahstok' id='jumlahstok' className='mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' placeholder='Masukkan Jumlah Stok' required/>

                        <label htmlFor="file" className='block mb-2 text-sm font-medium text-gray-900'>Upload Foto Barang</label>
                        <input type="file" id='filefotokasir' className='text-gray-500' />


                        <div className='flex mt-3'>
                            <button onClick={showAlert} className=' bg-primary-color p-4 text-fourth-color flex gap-2 items-center rounded-md size-3 w-[120px] mt-5 hover:bg-black'><ion-icon name="save-outline"></ion-icon>Simpan</button>
                            <button className='ml-3 bg-red-500 p-4 text-fourth-color flex gap-2 items-center rounded-md size-3 w-[120px] mt-5 hover:bg-black'><ion-icon name="close-outline"></ion-icon>Batal</button>
                        </div>
                    </div>
                </form>  
            </div>
            
        </TambahBarang>
    </Fragment>
  )
}

export default StokBarang