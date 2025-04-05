import { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "../components/PostCard";

// Import Owl Carousel and its styles
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import OwlCarousel from "react-owl-carousel";

const Home = () => {
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
    <div className="container">

      {/* === Owl Carousel Slider Section === */}
      {/* <OwlCarousel
        className="owl-theme"
        loop
        margin={10}
        nav
        autoplay
        autoplayTimeout={3000}
        dots={false}
      >
        <div className="item">
          <img src="/images/slider1.jpg" alt="Slider 1" className="img-fluid rounded" />
        </div>
        <div className="item">
          <img src="/images/slider2.jpg" alt="Slider 2" className="img-fluid rounded" />
        </div>
        <div className="item">
          <img src="/images/slider3.jpg" alt="Slider 3" className="img-fluid rounded" />
        </div>
      </OwlCarousel> */}

      {/* === Main Content Section === */}
      <h1 className="mt-4">Welcome to Email Hosting</h1>
      <p>We provide reliable and secure email hosting services.</p>
      <p>Our email hosting services include:</p>
      <ul>
        <li>Custom domain email addresses</li>
        <li>Advanced spam and virus protection</li>
        <li>24/7 customer support</li>
        <li>High availability and uptime</li>
        <li>Easy integration with other tools and services</li>
      </ul>

      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-4 mb-4">
            <PostCard post={post} />
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center mt-3">
        <button
          className="btn btn-primary me-2"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>
        <span className="align-self-center">Page {page}</span>
        <button className="btn btn-primary ms-2" onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>

    </div>
  );
};

export default Home;
