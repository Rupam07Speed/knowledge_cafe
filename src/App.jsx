import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import TimeCount from './components/TimeCount/TimeCount'
import Blog from './components/Blog/Blog'

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [timeCount, setTimeCount] = useState(0);
  const handleBookMarks = book => {
    console.log(book.title);
    
    const newBookMars = [...bookMarks,book];
    setBookMarks(newBookMars);
    // console.log("bookmark add");
  }

  const handleTimeSet = blog => {
    setTimeCount(blog.reading_time+timeCount);
  
  }

  return (
    <>
    <div className='w-[90%] m-auto'>
    <Header></Header>
    <div className='  lg:md:flex justify-between mt-4'>
    <div className='w-[65%]'><Blogs handleBookMarks={handleBookMarks} handleTimeSet={handleTimeSet}></Blogs></div>
    <div className='w-[33%] h-full'>
    <div className='  bg-[#6047EC1A] rounded-lg mb-5  border-2 border-solid border-purple-700 p-1'>
      <TimeCount timeCount={timeCount}></TimeCount>
    </div>
    <div className='  bg-slate-200 rounded-lg'><BookMarks bookMarks={bookMarks} ></BookMarks></div>
    </div>
    </div>
    </div>
    </>
  )
}

export default App
