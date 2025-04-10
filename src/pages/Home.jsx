import { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "../components/PostCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import banner1 from '/images/slider1.jpg';
import banner2 from '/images/slider2.jpg';

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
    <>
      {/* === Swiper Section === */}
      <div className="section">

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          <SwiperSlide>
            <div className="position-relative text-white">
              <img
                src={banner1}
                alt="Banner"
                className="img-fluid w-100"
                style={{ height: "600px", objectFit: "cover" }}
              />
              <div
                className="position-absolute top-50 start-50 translate-middle text-center"
                style={{ zIndex: 2 }}
              >
                <h2 className="mb-3">Welcome to Email Hosting</h2>
                <p>Reliable & Secure Email Solutions</p>
                <button className="btn btn-primary mt-2">Get Started</button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="position-relative text-white">
              <img
                src={banner2}
                alt="Banner"
                className="img-fluid w-100"
                style={{ height: "600px", objectFit: "cover" }}
              />
              <div
                className="position-absolute top-50 start-50 translate-middle text-center"
                style={{ zIndex: 2 }}
              >
                <h2 className="mb-3">Fast, Secure, Scalable</h2>
                <p>Power your business with professional email</p>
                <button className="btn btn-light mt-2">Learn More</button>
              </div>
            </div>
          </SwiperSlide> 
        </Swiper>
      </div>

      {/* === Main Content Section === */}
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-6 text-center mt-5 mb-4">
            <img src="images/bg1.png" alt="Banner" className="img-fluid about-banner" style={{ maxWidth: "80%", height: "auto" }} />
          </div>
          <div className="col-md-6 text-left mt-4 mb-4">
            <h3 className="mt-4">Welcome to Email Hosting</h3>
            <p>Our email hosting services include:</p>
            <ul>
              <li>Custom domain email addresses</li>
              <li>Advanced spam and virus protection</li>
              <li>24/7 customer support</li>
              <li>High availability and uptime</li>
              <li>Easy integration with other tools and services</li>
            </ul>
          </div>
        </div>


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
          <button
            className="btn btn-primary ms-2"
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );

};

export default Home;
