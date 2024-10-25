import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    //  console.log(blog)
    const { cover_photo, reading_time, author_img, author_name, title, posted_date } = blog

    return (
        <div>
{/* cover photo------------------------ */}
            <div className='w-2/3'>
                <img className='w-full' src={cover_photo} alt='cover_photo ' />
            </div>
{/*author section--------------------------- */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <div className='w-[100px]'>
                        <img className='w-full' src={author_img} alt="author_img" />
                    </div>
                    <div className='ml-6 '>
                        <div>
                            <h3 className='text-xl font-bold'>{author_name}</h3>
                            <p>Posted date : {posted_date}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p>{reading_time}</p>
                </div>
            </div>
{/* title section-------------------------------- */}
            <div>
                <h4 className='text-3xl font-bold'>{title}</h4>
            </div>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
}
export default Blog;