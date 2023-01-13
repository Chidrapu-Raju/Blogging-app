import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import "./BlogDetails.css";

const BlogDetails = () => {
  let { id } = useParams();
  let uri = "http://localhost:3000/blogs/" + id;
  let [blog, isPending, isError, error] = useFetch(uri);
  let navigate = useNavigate();

  async function deletePost() {
    try {
      let requestOptions = {
        method: "DELETE",
      };
      await fetch(uri, requestOptions);
    } catch (err) {
      console.log("some error occured");
    }
  }

  const redirect = () => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
    navigate("/BlogDeleted");
  };

  return (
    <div className="BlogDetails">
      {isError && <div className="error">{error}</div>}
      {isPending && <div className="pending">Loading...</div>}
      {blog && (
        <div className="blog-details">
          <h2>{blog.title}</h2>
          <p className="author">
            <b>Written by {blog.author}</b>
          </p>
          <p className="body">{blog.body}</p>
          <button
            onClick={() => {
              deletePost();
              redirect();
            }}
          >
            delete post
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
