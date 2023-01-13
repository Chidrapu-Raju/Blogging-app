import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Create.css";

const Create = () => {
  let [title, setTitle] = useState(null);
  let [body, setBody] = useState(null);
  let [author, setAuthor] = useState("mario");
  let navigate = useNavigate();

  async function addPost() {
    try {
      let blog = { title, body, author };
      let uri = "http://localhost:3000/blogs";
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
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
    navigate("/BlogCreated");
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form>
        <label>Blog title:</label>
        <br />
        <input
          type="text"
          required
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <label>Blog Description</label>
        <br />
        <textarea
          type="text"
          required
          placeholder="Description"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
        <br />
        <label>Blog Author</label>
        <br />
        <select
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
          <option value="chas">chas</option>
        </select>
        <br />
        <button
          type="submit"
          onClick={() => {
            addPost();
            redirect();
          }}
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default Create;
