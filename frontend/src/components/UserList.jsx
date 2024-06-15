import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { Link } from "react-router-dom"

const UserList = () => {
const [users, setUser] = useState([])
const navigate = useNavigate()

useEffect(() => {
  getUsers();
},[])

const getUsers = async () => {
  const response = await axios.get('http://localhost:5000/users')
  setUser(response.data)
}

const deleteUser = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/users/${id}`)
    getUsers()
  } catch (error) {
    console.log(error)
  }
}   

  return (
    <div className="columns mt-5 flex justify-center text-center">
        <table className='min-w-full divide-y divide-gray-200 w-full'>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Barang</th>
              <th>Harga Barang</th>
              <th>Jumlah Stok</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => ( 
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.nama_barang}</td>
                <td>{user.jumlah_stok}</td>
                <td>{user.harga_barang}</td>
                <td>
                  <div className='flex justify-center'>
                    <Link to = {`edit/${user.id}`}><button className='w-10 py-2 mr-2 bg-primary-color text-white rounded-md cursor-pointer hover:bg-black'><ion-icon name="create-outline"></ion-icon></button></Link>
                    <button onClick={() => deleteUser(user.id)} className='w-10 py-2 bg-red-500 text-white rounded-md cursor-pointer hover:bg-black'><ion-icon name="trash-outline"></ion-icon></button>
                  </div>
                </td>
            </tr>
            ))}
            
          </tbody>
        </table>
    </div>
  )
}

export default UserList
