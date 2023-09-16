import PropTypes from 'prop-types';
import { BsBookmark } from 'react-icons/Bs';
const Blog = ({blog , handleBookMark , readingTime}) => {
    return (
        <div>
            {
                <div className=' px-8 my-12'>
                    <img className='w-full rounded-lg' src={blog.banner_img} alt="" />
                    <div className='flex my-2 justify-between p-2'>
                        {/* author box */}
                        <div className='flex'>
                            {/* author */}
                            <img className='mr-2' src={blog.author_img} alt="" />
                            <div className=' font-bold text-xl '>
                                {blog.author_name}
                                <h4 className='text-base font-normal '>March 14(4 Days Ago)</h4>
                            </div>
                        </div>
                        <div className='flex space-x-2 items-center'>
                            {/* miniute read */}
                            <h3>{blog.reading_time} Min Ago
                            </h3>
                            <button onClick={()=>handleBookMark({blog})} className='active:text-red-600'><BsBookmark></BsBookmark></button>
                        </div>
                    </div>
                    <h1 className='text-3xl font-semibold'>{blog.title}</h1>
                    <h3>
                        {
                            blog.hashtags.map((hash, idx) => <span key={idx}> <a className='hover:text-rose-600'  href="">#{hash+('  ')}</a></span> )
                        }
                    </h3> 
                    <button 
                    onClick={()=>readingTime(blog.reading_time)}
                   className='text-rose-600 underline font-semibold text-xl'>
                        Mark as Read</button>
                </div>
            }
        </div>
    );
};
Blog.PropTypes ={
    blog: PropTypes.object.isRequired,
    readingTime: PropTypes.func,
    handleBookMark: PropTypes.func
}
export default Blog;