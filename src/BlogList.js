import "./BlogList.css";
import {Link} from "react-router-dom";

const BlogList = (props)=>{
    let blogs = props.blogs;
    let title = props.title;

    return (
        <div className="BlogList">
            <h2>{title}</h2>
            {blogs.map(blog =>(
                <div className="blog-preview" key={blog.id}>
                    <Link to={"/blogs/" + blog.id}
                    style={
                        {
                            textDecoration: "none"
                        }
                    }
                    >
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;