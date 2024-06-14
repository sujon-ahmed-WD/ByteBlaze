import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";
import Blog from "../Pages/Blog";
import Bookmarks from "../Pages/Bookmarks";
import Contant from "../Components/Contant";
import Author from "../Components/Author";

 export const router=createBrowserRouter([
    {
      path:'/',
      element:<MainLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/blogs",
          element:<Blogs/>,
          loader:()=>fetch('https://dev.to/api/articles?per_page=7&top=7')
        },
        {
          path:'/blog/:id',
          element:<Blog/>,
          loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
          children:[
            {
                index:true,
                element:<Contant/>,
                loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),

            },
            {
                path:'author',
                element:<Author/>,
                loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
            },
          ]
        },
        {
          path:'/bookmark',
          element:<Bookmarks/>
        }
      ]
    }
])
