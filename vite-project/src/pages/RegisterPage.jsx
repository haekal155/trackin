import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()

  return (
    <div className='w-full h-screen flex items-start'>
        <div className='relative w-1/2 h-full flex flex-col'>
            <div className='absolute top-[50%] left-[20%] flex flex-col'>
                <img src="public/logo.png" />
            </div>
            <img src="public/coverimage.png" />
        </div>

        <div className='w-1/2 items-center h-full bg-white flex flex-col p-20'>

            <div className='w-20 flex flex-col items-center justify-center'>
                <img src="public/trackinlogo.png" />
                <h3 className='font-bold'>TrackIn</h3>
            </div>

            <div className='w-full flex items-center justify-center pb-8'>
                <h3 className='text-3xl font-semibold mb-2 justify-center'>Register</h3>
            </div>

            <div className='w-full flex flex-col'>
                <label htmlFor="Text">Nama Lengkap</label>
                <input type="text" placeholder='Masukkan Nama Lengkap Anda' className='w-full text-black py-2 my-2 bg-transparent border-black outline-none rounded-xl focus:outline-none' />
                <br />
                <label htmlFor="Email">Email</label>
                <input type="email" placeholder='Masukkan Email Anda' className='w-full text-black py-2 my-2 bg-transparent border-black outline-none rounded-xl focus:outline-none' />
                <br />
                <label htmlFor="Password">Password</label>
                <input type="password" placeholder='Masukkan Password Anda' className='w-full text-black py-2 my-2 bg-transparent border-black outline-none rounded-xl focus:outline-none' />
            </div>

            <div className='w-full flex'>
                <input type="checkbox" className='w-4 h-4 mr-2' />
                <p className='text-sm'>Saya setuju dengan syarat dan ketentuan</p>
            </div>

            <div className='flex justify-center pt-10'>
                <button className='w-80 py-2 bg-primary-color text-white rounded-xl hover:bg-black'>Register</button>
            </div>

            <div className='w-full flex items-center justify-center pt-3'>
                <p className='text-sm font-normal text-black'>Sudah Punya Akun? 
                <span onClick={() => navigate('/login')} className='font-semibold cursor-pointer text-blue-700'> Login</span></p>
            </div>
        </div>
    </div>
  )
}

export default Register
