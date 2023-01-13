import "./Home.css";
import useFetch from "./useFetch";
import BlogList from "./BlogList";

const Home = () => {
  let uri = "http://localhost:3000/blogs";
  let [blogs, isPending, isError, error] = useFetch(uri);

  return (
    <div className="Home">
      {isError && <div className="error">{error}</div>}
      {isPending && <div className="pending">Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
