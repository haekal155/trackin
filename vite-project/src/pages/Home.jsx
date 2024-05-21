import React from 'react'
import Navbar from '../components/Navbar'
import Tentang from './Tentang'
import Footer from '../components/Footer'
import Testimoni from './Testimoni'
import Mitra from './Mitra'

const Home = () => {
  return (
    <main>
    <Navbar />
    <div className='bg-gradient-to-b from-second-color via-fourth-color to-second-color'>
        <section id='section1'>
        <div className='px-4 lg:px-14 max-w-screen-2x1 mx-auto min-h-screen h-screen'>
            <div className='w-full mx-auto'>
                <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                    <div>
                        <img src="public/banner1.png" />
                    </div>
                    <div className='md:w-1/2'>
                        <h1 className='text-5xl font-semibold mb-4 text-black md:w-3/4 leading-snug'>Ayo Manajemen Inventaris Anda Dengan Mudah</h1>
                        <p className='text-black text-base mb-8'>TrackIn adalah solusi bagi Anda untuk mengelola produk dari jarak jauh agar lebih mudah</p>
                        <button className='px-7 py-2 bg-primary-color text-white rounded hover:bg-black transition-all duration-300'>Pelajari lebih lanjut</button>
                        </div>
                </div>
            </div>
        </div>
        </section>
    </div>
    <Tentang />
    <Mitra />
    <Testimoni />
    <Footer />
    </main>
    
  )
}

export default Home
