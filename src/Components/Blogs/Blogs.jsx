import { useState } from "react";
import Blog from "../Blog/Blog";
import { useEffect } from "react";

 

const Blogs = () => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        const dataFetch = async()=>{
        const res = await fetch('blog.json');
        const data = await res.json();
        // console.log(data)
        setBlogs(data)
        }
        dataFetch()
    },[])
    return (
        <main className="md:w-2/3">
            <h2>Blogs</h2>
            {
                blogs.map(blog=><Blog blog={blog}key={blog.id}></Blog>)
            }
        </main>
    );
};

export default Blogs;