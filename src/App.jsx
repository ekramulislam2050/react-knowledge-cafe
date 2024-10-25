
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
  return (
    <>
      <Header></Header>
      <div className='flex w-4/5 mx-auto'>
        <Blogs handleBookMark={handleBookMark} allData={allData}></Blogs>
        <div className='w-1/5 mx-auto'>
          <Bookmarks
            clickedBlog={clickedBlog}
            key={clickedBlog.id}
            allOfData={allOfData}
          ></Bookmarks>
        </div>

      </div>

    </>
  )
}

export default App
