 
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header/Header'
import { useState } from 'react'


function App() {
     const [blog,setBlog]=useState([])
    const handleBookMark=(blog)=>{
     setBlog(blog)
    }
  return (
    <>
      <Header></Header>
     <div className='flex w-4/5 mx-auto'>
        <Blogs handleBookMark={handleBookMark}></Blogs>
        <Bookmarks blog={blog}></Bookmarks>
         
     </div>
       
    </>
  )
}

export default App
