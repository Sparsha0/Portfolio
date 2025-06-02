import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from "./Sidebar.jsx"
import Header from "./Header.jsx";


function App() {

  return (
    <>
       <div className='md:grid md:grid-cols-6 md:gap-4 flex flex-col gap-4 p-4'>
          <div className=" md:col-span-2 bg-gray-800 rounded-2xl border-gray-600 border shadow-xl" >
            <Sidebar />
          </div>
          <div className=' bg-gray-800 md:col-span-4 rounded-2xl border-gray-600 border shadow-3xl'>
            <Header />
          </div>
       </div>

    </>
  )
}

export default App
