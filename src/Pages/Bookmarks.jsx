import {  useEffect, useState } from "react";
import BlogCard from "../Components/BlogCard";
import { getBlogs } from "../utils";
 
const Bookmarks = () => {
    const [blog, setBlogs] = useState([]);

    useEffect(() => {
        
        const Storblog = getBlogs([]);
        setBlogs(Storblog);
        
    }, []);
        
      
    
  return (
    <div className="grid px-4 sm:px-8 lg:px-12 py-8 justify-center    grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
        {console.log(blog)}
      {blog.map((blog,index) => (
         
        <div key={index}>{console.log(blog)}
            <BlogCard deleteable={true} key={blog.id} blog={blog} />
            </div>
      
      ))}
    </div>
  );
};

export default Bookmarks;
