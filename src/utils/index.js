import toast from "react-hot-toast"
 export const getBlogs =()=>{
    let blogs =[]
    const stordBlog=localStorage.getItem('blogs')
    if(stordBlog){
        blogs=JSON.parse(stordBlog)
    }
    return blogs
}
//Save toasted
export const SaveBlog=blog =>{
   
    let blogs =getBlogs()
    //  const inExist =blogs.find(b=>b.id===blog.id)

    const inExist =blogs.find(b=>b.id===blog.id)
        // console.log(`b.id=${b.id} and blog.id=${blog.id}`)
 
     
    if(inExist){
        return toast.error('Already bookmark')
    }
    blogs.push(blog)
    localStorage.setItem('blogs',JSON.stringify(blogs))
    toast.success('log Bookmark successfully!')
}

// dlete
export const deletBlog=id=>{
    let blogs=getBlogs()
    const remaraing=blogs.filter(b=>b.id !==id)
    localStorage.setItem(blogs.JSON.stringify(remaraing))
    toast.success('Block remote from Bookmark')
}