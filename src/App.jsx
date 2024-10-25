 
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header/Header'


function App() {
 

  return (
    <>
      <Header></Header>
     <div className='flex w-4/5 mx-auto'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
     </div>
       
    </>
  )
}

export default App
