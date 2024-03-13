import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'

function App() {
 
  return (
    <>
    <div className='w-[90%] m-auto'>
    <Header></Header>
    <div className='  lg:md:flex justify-between mt-4'>
    <div className='w-[65%] bg-pink-300'><Blogs></Blogs></div>
    <div className='w-[33%] bg-pink-300'><BookMarks></BookMarks></div>
    </div>
    </div>
    </>
  )
}

export default App
