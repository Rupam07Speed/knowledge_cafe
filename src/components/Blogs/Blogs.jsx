import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = (
   { handleBookMarks,handleTimeSet} ) => {
    const [blogs,setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    

    return (
        <div >
           

            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}
                    handleBookMarks={handleBookMarks}
                    handleTimeSet={handleTimeSet}></Blog> )
            }

        </div>
    );
};
Blogs.propTypes = {
    handleBookMarks : PropTypes.func,
    handleTimeSet : PropTypes.func
}

export default Blogs;