import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'

function App() {
  const [bookMarks, setBookMarks] = useState([]);

  const handleBookMarks = book => {
    console.log(book.title);
    
    const newBookMars = [...bookMarks,book];
    setBookMarks(newBookMars);
    // console.log("bookmark add");
  }
  return (
    <>
    <div className='w-[90%] m-auto'>
    <Header></Header>
    <div className='  lg:md:flex justify-between mt-4'>
    <div className='w-[65%]'><Blogs handleBookMarks={handleBookMarks}></Blogs></div>
    <div className='w-[33%] h-full bg-slate-200 rounded-lg'><BookMarks bookMarks={bookMarks} ></BookMarks></div>
    </div>
    </div>
    </>
  )
}

export default App
