 
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header/Header'
import { useState } from 'react'


function App() {
     const [clickedBlog,setClickedBlog]=useState([])
   
    const handleBookMark=(blog)=>{
      // console.log(blog)
     
      
      setClickedBlog(blog)
    }
  return (
    <>
      <Header></Header>
     <div className='flex w-4/5 mx-auto'>
        <Blogs handleBookMark={handleBookMark}></Blogs>
        {/* {
         clickedBlog.map((clickedBlog,idx)=><Bookmarks clickedBlog={clickedBlog} key={idx}></Bookmarks>)
        } */}
         <Bookmarks clickedBlog={clickedBlog} key={clickedBlog.id}></Bookmarks>
     </div>
       
    </>
  )
}

export default App
