import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutImg from '/images/about.svg'; // Replace with your image path
import teamImg from '/images/team.svg';   // Replace with your image path

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container py-5">

      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" data-aos="fade-down">
        <ol className="breadcrumb bg-light px-3 py-2 rounded shadow-sm">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">About Us</li>
        </ol>
      </nav>

      {/* Header */}
        <div className="row align-items-center my-5" data-aos="fade-up">
          <div className="col-md-6">
            <h1 className="display-5 fw-bold">About Us</h1>
            <p className="lead text-muted">We are a leading email hosting provider, ensuring top security and performance.</p>
            <p className="text-muted">Our commitment to excellence drives us to continuously innovate and provide the best solutions for our customers.</p>
          </div>
          <div className="col-md-6 text-center">
            <img src={aboutImg} alt="About illustration" className="img-fluid" />
          </div>
        </div>

        {/* Mission */}
      <section className="row align-items-center my-5" data-aos="fade-right">
        <div className="col-md-6 order-md-2">
          <h2 className="h4 fw-bold">Our Mission</h2>
          <p className="text-muted">To provide reliable and secure email hosting solutions for businesses of all sizes.</p>
          
        </div>
        <div className="col-md-6 order-md-1 text-center">
          <img src="images/mission.svg" alt="Mission" className="img-fluid" />
        </div>
      </section>

      {/* Vision */}
      <section className="row align-items-center my-5" data-aos="fade-left">
        <div className="col-md-6">
          <h2 className="h4 fw-bold">Our Vision</h2>
          <p className="text-muted">To be the most trusted and innovative email hosting provider globally.</p>
        </div>
        <div className="col-md-6 text-center">
          <img src="https://undraw.co/api/illustrations/4c3a5155-04ae-467c-b574-e3013f1ee9e7" alt="Vision" className="img-fluid" />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="my-5" data-aos="zoom-in-up">
        <h2 className="h4 fw-bold mb-3">Why Choose Us</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item ps-0">✅ Top-notch security</li>
          <li className="list-group-item ps-0">✅ 24/7 customer support</li>
          <li className="list-group-item ps-0">✅ High performance and reliability</li>
          <li className="list-group-item ps-0">✅ Scalable solutions</li>
        </ul>
      </section>

      {/* Meet the Team */}
      <section className="row align-items-center my-5" data-aos="fade-up">
        <div className="col-md-6">
          <h2 className="h4 fw-bold">Meet Our Team</h2>
          <p className="text-muted">Our team consists of experienced professionals dedicated to delivering the best email hosting services.</p>
        </div>
        <div className="col-md-6 text-center">
          <img src={teamImg} alt="Team" className="img-fluid" />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
