import { useLoaderData,  useNavigation } from "react-router-dom";
import BlogCard from "../Components/BlogCard";
import Loader from "../Components/Loader";

 
const Blogs = () => {

    const blog=useLoaderData();
    const navigation=useNavigation()
	if(navigation.state ==='loading') return <Loader/>

    return (
<section >
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12  ">
			<img src={blog [0].cover_image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7  " />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blog[0].title}</h3>
				<span className="text-xs ">{new Date (blog[0].published_at).toLocaleDateString()}</span>
				<p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
			</div>
		</a>
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
               { blog.slice(1,19).map(blog=><BlogCard key={blog.id} blog={blog}/>)}
		</div>
 
	</div>
</section>
    );
};

export default Blogs;