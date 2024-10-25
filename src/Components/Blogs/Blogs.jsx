import { useState } from "react";
import Blog from "../Blog/Blog";
import { useEffect } from "react";
import PropTypes from 'prop-types';
 

const Blogs = ({handleBookMark, allData,handleMarkAsRed}) => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        const dataFetch = async()=>{
        const res = await fetch('blog.json');
        const data = await res.json();
        // console.log(data)
        setBlogs(data)
          allData(data)
        }
        dataFetch()
    },[])
    return (
        <main className="md:w-2/3">
             
            {
                blogs.map(blog=><Blog
                     blog={blog}key={blog.id}
                     handleBookMark={handleBookMark}
                     handleMarkAsRed={handleMarkAsRed}
                ></Blog>)
            }
        </main>
    );
};
 Blogs.propTypes={
    // Blogs:PropTypes.array.isRequired,
    handleBookMark:PropTypes.func.isRequired,
    handleMarkAsRed:PropTypes.func.isRequired,
    allData:PropTypes.array.isRequired
    
 }
export default Blogs; 