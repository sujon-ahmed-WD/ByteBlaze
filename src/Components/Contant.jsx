import { useLoaderData } from "react-router-dom";
import plasholderimg from "../assets/404.jpg";
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw";
 
 
const Contant = () => {
    const blog = useLoaderData();
    console.log(blog);
    const { cover_image, title,  tags,
      body_html } = blog;
    
    return (
        <div>
          <div className=" w-full max-auto group border-2 p-2 hover:border-secondary  ">
            <img
              role="presentation"
              className="object-cover w-full rounded h-44   "
              src={cover_image || plasholderimg}
            />
            {tags.map((tag, index) => (
              <p key={index}>#{tag}</p>
            ))}
            <div className=" space-y-2 ">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                {title}
              </h3>

             <div
             className="w-full"> <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown></div
            >
              
            </div>
          </div>
        </div>
      );
    };

export default Contant;