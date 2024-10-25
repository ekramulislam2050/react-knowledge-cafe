
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header/Header'
import { useState } from 'react'
import Bookmark from './Components/Bookmark/Bookmark'


function App() {
  // click state start--------------------
  const [clickedBlog, setClickedBlog] = useState([])

  const handleBookMark = (blog) => {
    // console.log(blog)
    const newArray = [...clickedBlog,blog]

    setClickedBlog(newArray)
  }
  
  // mark as read state---------------------
  const [timeOfBlog,setTimeOfBlog]=useState(0)
  const handleMarkAsRed = (reading_time,id) =>{
    // console.log(reading_time)
    console.log(id)
    const newTime = timeOfBlog + reading_time;
    setTimeOfBlog(newTime)
    // remove bookmark------------------------
    const remainingBookMark = clickedBlog.filter(Bookmark=>Bookmark.id !== id)
    setClickedBlog(remainingBookMark)
  }
  return (
    <>
      <Header></Header>
      <div className='flex w-4/5 mx-auto'>
        <Blogs 
        handleBookMark={handleBookMark}
        
         handleMarkAsRed={handleMarkAsRed}
         ></Blogs>
        <div className='w-1/5 mx-auto'>
          <Bookmarks
            clickedBlog={clickedBlog}
           timeOfBlog={timeOfBlog}
          ></Bookmarks>
        </div>

      </div>

    </>
  )
}

export default App
