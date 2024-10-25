import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog }) => {
    //  console.log(blog)
    const { cover_photo, reading_time, author_img, author_name, title, posted_date, hash_tag } = blog

    return (
        <div className='my-10 '>
            {/* cover photo------------------------ */}
            <div className='w-1/1'>
                <img className='w-full rounded-lg' src={cover_photo} alt='cover_photo ' />
            </div>
            {/*author section--------------------------- */}
            <div className='flex items-center justify-between mt-4'>
                <div className='flex items-center'>
                    <div className='w-14'>
                        <img className='w-full' src={author_img} alt="author_img" />
                    </div>
                    <div className='ml-6 '>
                        <div>
                            <h3 className='text-xl font-bold'>{author_name}</h3>
                            <p>Posted date : {posted_date}</p>
                        </div>
                    </div>
                </div>
                <div className='flex '>
                    <p className='p-2'>{reading_time} read</p>
                     <button className='text-2xl text-red-600'><FaBookmark /></button>
                </div>
            </div>
            {/* title section-------------------------------- */}
            <div>
                <h4 className='mt-5 text-3xl font-bold'>{title}</h4>
                <div className='mt-2'>
                    {
                        hash_tag.map((hashTag, index) => <span key={index} className='mr-5 '><a href="#">{hashTag}</a></span>)
                    }
                </div>

            </div>
            <div className='my-5'>
                <a href='#' className='text-purple-500 border-b-2 border-purple-500 '>Mark as read </a>
                <p className='my-10 border-b-2'></p>
            </div>
               
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
}
export default Blog;