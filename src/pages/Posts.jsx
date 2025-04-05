import { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "../components/PostCard";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 9;

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
      );
      setPosts(response.data);
    };
    fetchPosts();
  }, [page]);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Posts</h1>
      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-4 mb-4">
            <PostCard post={post} />
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-primary me-2" disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
        <span className="align-self-center">Page {page}</span>
        <button className="btn btn-primary ms-2" onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default Posts;
