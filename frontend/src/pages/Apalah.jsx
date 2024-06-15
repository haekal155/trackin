import React from 'react'
import Sidebar from '../components/Sidebar'

const Apalah = () => {
  const data = [
    { no: 1, barang: 'Royal Canin', stok: '20', harga: 'Rp80.000' },
    { no: 2, barang: 'Obat Kucing', stok: '10', harga: 'Rp100.000' },
    { no: 3, barang: 'Mainan Kucing', stok: '50', harga: 'Rp8.000' },
    { no: 4, barang: 'Mainan Kucing', stok: '50', harga: 'Rp8.000' },
    { no: 5, barang: 'Mainan Kucing', stok: '50', harga: 'Rp8.000' },
    { no: 6, barang: 'Mainan Kucing', stok: '50', harga: 'Rp8.000' },
    { no: 7, barang: 'Mainan Kucing', stok: '50', harga: 'Rp8.000' },
    { no: 8, barang: 'Mainan Kucing', stok: '50', harga: 'Rp8.000' },
    { no: 9, barang: 'Mainan Kucing', stok: '50', harga: 'Rp8.000' },
    { no: 10, barang: 'Mainan Kucing', stok: '50', harga: 'Rp8.000' },
    { no: 11, barang: 'Mainan Kucing', stok: '50', harga: 'Rp8.000' },
    { no: 12, barang: 'Mainan Kucing', stok: '50', harga: 'Rp8.000' },
    { no: 13, barang: 'Mainan Kucing', stok: '50', harga: 'Rp8.000' },
    { no: 14, barang: 'Mainan Kucing', stok: '50', harga: 'Rp8.000' },
    { no: 15, barang: 'Mainan Kucing', stok: '50', harga: 'Rp8.000' },
    { no: 16, barang: 'Mainan Kucing', stok: '50', harga: 'Rp8.000' },
    { no: 17, barang: 'Mainan Kucing', stok: '50', harga: 'Rp8.000' },
    { no: 18, barang: 'Mainan Kucing', stok: '50', harga: 'Rp8.000' }
]
  return (
    <div>
      <Sidebar />

      <div className="overflow-x-auto size-full mt-8 flex justify-end">
                <table className="min-w-full bg-white border border-gray-200 ">
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
    
  )
}

export default Apalah
