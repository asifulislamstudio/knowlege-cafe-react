import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('bloger.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className=" w-2/3">
            {
                blogs.map(blog => console.log(blog))
            }
            <main>
                <h1 className="text-4xl font-bold">Blogs</h1>
                
            </main>
        </div>
    );
};

export default Blogs;