
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header/Header'
import { useState } from 'react'


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
  const handleMarkAsRed = (reading_time) =>{
    // console.log(reading_time)
    const newTime = timeOfBlog + reading_time;
    setTimeOfBlog(newTime)
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
