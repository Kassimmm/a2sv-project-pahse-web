import { useState } from "react";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: "Kassimletter", body: "For letter", author: "kassim", id: 1},
        {title: "schoolfuwad", body: "For school", author: "fuwad", id: 2},
        {title: "statementjamal", body: "For statement", author: "jamal", id: 3}
    ])

    return (  
        <div className="home">
            <h2>Homepage</h2>
            
            {blogs.map((blog) => (
                    <div className="blogs" key={blog.id}>
                        <p>{blog.author} with id no. {blog.id} has an info wih title {blog.title} which says {blog.body}</p>
                    </div>
                ))}
        </div>
    )}
 
export default Home;