import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {title, cover, reading_time, posted_date, author, author_img,hashtags} = blog;
    return (
        <div className='my-3 w-[90%] m-auto bg-white'>
           <div className='w-[90%] m-auto'> 
           <div  className='bg-pink-200 flex justify-center'> <img src={cover} alt="" /></div>
            <div className=' w-[97%]  justify-center bg-green-200 mt-2'>
               <div className='flex justify-between items-center'> 
                <div className='w-[30%] flex justify-between bg-orange-200'>
                    <div className='w-[40%]'
                    ><img className='w-[full]' src={author_img} alt="" /></div>
                    <div className='w-[60%]'>
                        <div>{author}</div>
                        <div>{posted_date}</div>
                    </div>
                </div>
                <div>
                    <p>{reading_time} min read</p>
                </div>
                </div>
            </div>
            <h1 className='my-3 text-4xl font-bold'>{title}</h1>
            <h1 className='my-3 text-2xl font-normal'>{hashtags}</h1>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog : PropTypes.object.isRequired,
  };
export default Blog;