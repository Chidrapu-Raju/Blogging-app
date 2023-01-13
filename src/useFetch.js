import { useEffect, useState } from "react";

const useFetch = (uri) => {
  let [blogs, setBlogs] = useState(null);
  let [isPending, setIsPending] = useState(true);
  let [isError, setIsError] = useState(true);
  let [error, setError] = useState(null);

  useEffect(() => {
    async function consume() {
      try {
        let response = await fetch(uri);
        let blogs = await response.json();
        setBlogs(blogs);
        setIsPending(false);
        setIsError(false);
      } catch (err) {
        setError("could not fetch the data for that resource");
      }
    }
    consume();
  }, [uri]);

  return [blogs, isPending, isError, error];
};

export default useFetch;
