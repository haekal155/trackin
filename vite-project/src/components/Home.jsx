import React from 'react'

const Home = () => {
  return (
    <div className='bg-gradient-to-b from-second-color via-fourth-color to-second-color'>
        <ul className='md:flex space-x-10 hidden text-[15px] flex-col md:flex-row justify-center items-center'>
          <a href="" className='text-1xl flex items-center space'><img src="public/trackinlogo.png" className='w-10 inline-block items-center' />TrackIn</a>
          <li className='border-transparent transition duration-200 hover:bg-primary-color transform hover:scale-95 py-1,5'>Beranda</li>
          <li className='border-transparent transition duration-200 hover:bg-primary-color transform hover:scale-95 py-1,5'>Tentang</li>
          <li className='border-transparent transition duration-200 hover:bg-primary-color transform hover:scale-95 py-1,5'>Mitra</li>
          <li className='border-transparent transition duration-200 hover:bg-primary-color transform hover:scale-95 py-1,5'>Testimoni</li>
          <li className='border-transparent transition duration-200 hover:bg-primary-color transform hover:scale-95 py-1,5'>Kontak</li>
          <button className='px-7 py-2 bg-primary-color text-white rounded hover:bg-black transition-all duration-300 hover:-translate-y-4'>Daftar</button>
        </ul>
        
        <div className='px-4 lg:px-14 max-w-screen-2x1 mx-auto min-h-screen h-screen'>
            <div className='w-full mx-auto'>
                <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                    <div>
                        <img src="public/banner1.png" />
                    </div>
                    <div className='md:w-1/2'>
                        <h1 className='text-5xl font-semibold mb-4 text-black md:w-3/4 leading-snug'>Ayo Manajemen Inventaris Anda Dengan Mudah</h1>
                        <p className='text-black text-base mb-8'>TrackIn adalah solusi bagi Anda untuk mengelola produk dari jarak jauh agar lebih mudah</p>
                        <button className='px-7 py-2 bg-primary-color text-white rounded hover:bg-black transition-all duration-300 hover:-translate-y-4'>Pelajari lebih lanjut</button>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
