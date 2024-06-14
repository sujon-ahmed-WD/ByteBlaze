import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { MdBookmarkAdd } from "react-icons/md";
import { SaveBlog } from "../utils";

const Blog = () => {
  const blog = useLoaderData();

  // tab jon use State kora holo:
  const[TeabIndex,setTebIndex]=useState(0);

  const { title, reading_time_minutes, public_reactions_count, published_at,  } =
    blog;

    // book marks kora jono 
    const handaleBookmark=blog=>{
      SaveBlog(blog)
    }
  return (
    <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
      <article className="space-y-8 ">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
            {title}
          </h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center ">
            <p className="text-sm">
              {reading_time_minutes} min read •{" "}
              {new Date(published_at).toLocaleDateString()}
            </p>

            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
              {public_reactions_count} comments . {public_reactions_count}views
            </p>
          </div>
          {/* tab ar kaj  */}

          <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-Start flex-nowrap  ">
            <Link
            onClick={()=>setTebIndex(1)}
             to=''
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${TeabIndex === 1 ? 'border border-b-0':'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-600` }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Content</span>
            </Link>

            <Link
            onClick={()=>setTebIndex(2)}
            to='author'
             className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${TeabIndex === 2? 'border border-b-0':'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-600` }
  
            >
            
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <span>Author</span>
            </Link>
            <div className="bg-primary p-3 ml-5 rounded-full hover:bg-opacity-30 bg-opacity-20 hover:scale-105   ">
              {/* Book_mark  */}
            <MdBookmarkAdd onClick={()=>handaleBookmark(blog)}
             className=" text-secondary " />
            </div>
          </div>
        </div>
        <div className=" ">
          <Outlet/>
          
        </div>
      </article>
      <div>
        <div className="flex flex-wrap py-6 gap-2 border-t border-dashed  ">

          {/* tag  golo routinge kora holo ...
           */}


 
        </div>
 
      </div>
    </div>
  );
};

export default Blog;
