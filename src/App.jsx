
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


    setClickedBlog(blog)
  }
  
  // all data state--------------------------
  const [allOfData, setAllOfData] = useState([])
  const allData = (data) => {
    //  console.log(data)
    setAllOfData(data)
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
         allData={allData}
         handleMarkAsRed={handleMarkAsRed}
         ></Blogs>
        <div className='w-1/5 mx-auto'>
          <Bookmarks
            clickedBlog={clickedBlog}
            key={clickedBlog.id}
            allOfData={allOfData}
            timeOfBlog={timeOfBlog}
          ></Bookmarks>
        </div>

      </div>

    </>
  )
}

export default App
