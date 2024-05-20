import React from 'react'
import {Carousel} from "flowbite-react"

const Tentang = () => {
  return (
    <div className='section2'>
  <div className='bg-white mb-14'>
      <h1 className='text-2xl pt-8 font-semibold flex justify-center'>TrackIn</h1>
      <p className='text-base pt-1 flex justify-center mb-8'>Website yang menyediakan jasa untuk memanejemen produk anda agar lebih mudah dan teratur.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-5xl">
      {/* Item pertama */}
      <div className="bg-fifth-color p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2 flex gap-2"><span className="material-icons">inventory_2</span>Manajemen Stok</h2>
        <p className="text-gray-600">Kemampuan untuk menambahkan, menghapus, dan memperbarui informasi produk dengan mudah</p>
      </div>

      {/* Item kedua */}
      <div className="bg-fifth-color p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2 flex gap-2"><span className="material-icons">find_in_page</span>Pelacakan Penjualan</h2>
        <p className="list-disc list-inside text-gray-600">Memantau penjualan harian, mingguan, dan bulanan untuk setiap produk.</p>
      </div>

      {/* Item ketiga */}
      <div className="bg-fifth-color p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2 flex gap-2"><span className="material-icons">report_problem</span>Peringatan Stok Rendah</h2>
        <p className="list-disc list-inside text-gray-600">Sistem akan memberikan notifikasi saat stok produk mencapai batas minimum.</p>
      </div>

      {/* Item keempat */}
      <div className="bg-fifth-color p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2 flex gap-2"><span className="material-icons">description</span>Laporan Inventaris</h2>
        <p className="list-disc list-inside text-gray-600">Pengguna dapat mengunduh berbagai jenis laporan untuk analisis lebih lanjut.</p>
      </div>

      {/* Item kelima */}
      <div className="bg-fifth-color p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2 flex gap-2"><span className="material-icons">point_of_sale</span>Integrasi Point-of-Sale</h2>
        <p className="list-disc list-inside text-gray-600">Dapat terhubung dengan sistem POS yang ada di sistem kami.</p>
      </div>
      
    </div>
    </div>
    </div>
  )
}

export default Tentang
