import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleBookMark , readingTime}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('bloger.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className=" w-3/4 border ">
            {
                blogs.map(blog => <Blog key={blog.author_name} blog={blog}
                    handleBookMark={handleBookMark} readingTime={readingTime}>
                    
                </Blog>)
            }
            <main>
                <h1 className="text-4xl font-bold">Blogs</h1>

            </main>
        </div>
    );
};
    Blogs.PropTypes = {
        handleBookMark: PropTypes.func.isRequired,
        readingTime : PropTypes.func.isRequired
    }

export default Blogs;