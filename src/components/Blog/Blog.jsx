import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";
const Blog = ({blog, handleBookMarks}) => {
    const {title, cover, reading_time, posted_date, author, author_img,hashtags} = blog;

    

    return (
        <div className='my-3 w-[90%] m-auto bg-white p-10'>
           <div className='w-[90%] m-auto'> 
           <div  className=' flex justify-center'> <img src={cover} alt="" /></div>
            <div className=' w-[97%]  justify-center  mt-2'>
               <div className='flex justify-between items-center'> 
                <div className='w-[30%] flex justify-between '>
                    <div className='w-[40%]'
                    ><img className='w-[full]' src={author_img} alt="" /></div>
                    <div className='w-[60%]'>
                        <div>{author}</div>
                        <div>{posted_date}</div>
                    </div>
                </div>
                <div className='w-[22%] flex justify-between '>
                    <p>{reading_time} min read</p>
                    <button onClick={()=>handleBookMarks({blog})}><FaBookmark></FaBookmark></button>
                </div>
                </div>
            </div>
            <h1 className='my-3 text-4xl font-bold'>{title}</h1>
            <p>
                {
                    hashtags.map(hash => <span key={blog.id}><a href="">#{hash} </a></span>
                    )
                }
            </p>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog : PropTypes.object.isRequired,
    handleBookMarks : PropTypes.func
  };
export default Blog;