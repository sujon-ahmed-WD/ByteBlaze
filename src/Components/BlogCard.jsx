import { Link } from "react-router-dom";
import plasholderimg from "../assets/404.jpg";
import { MdDeleteForever } from "react-icons/md";
const BlogCard = ({ blog, deletable,handleDelete }) => {
  const { cover_image, title, published_at, id } = blog;
  return (
    <div>
      <div className="flex relative">
        <Link to={`/blog/${id}`}>
          <div className="border-2 hover:scale-105 border-primary hover:border-secondary border-opcity-30">
            <img
              role="presentation"
              className="object-cover w-full rounded h-44   "
              src={cover_image || plasholderimg}
            />
            <div className="p-6 space-y-2 ">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                In usu laoreet repudiare legendos
              </h3>
              <span className="text-xs  ">January 21, 2021</span>
              <p>
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </div>
        </Link>
        {deletable && (
          <div
            onClick={() => handleDelete(blog.id)}
            className="bg-primary p-3 ml-5 rounded-full hover:bg-secondary group  cursor-pointer hover:scale-105 absolute -top-5 -right-5"
          >
            <MdDeleteForever
              size={20}
              className="text-secondary group-hover:text-primary"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
