import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = (
   { handleBookMarks} ) => {
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
                    handleBookMarks={handleBookMarks}></Blog> )
            }

        </div>
    );
};
Blogs.propTypes = {
    handleBookMarks : PropTypes.func
}

export default Blogs;