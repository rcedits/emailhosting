import React from 'react';

const Contact = () => {
  return (
    <div className="container py-5">

      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" data-aos="fade-down">
        <ol className="breadcrumb bg-light px-3 py-2 rounded shadow-sm">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">About Us</li>
        </ol>
      </nav>


      <div className="text-center mb-5" data-aos="fade-down">
        <h1 className="fw-bold">Contact Us</h1>
        <p className="text-muted">We'd love to hear from you. Reach out via the form below or our contact info.</p>
      </div>

      <div className="row g-5">
        {/* Contact Info */}
        <div className="col-md-5" data-aos="fade-right">
          <h4 className="mb-3">Get in Touch</h4>
          <p><strong>Email:</strong> support@emailhosting.com</p>
          <p><strong>Phone:</strong> +971 123 456 789</p>
          <p><strong>Office Address:</strong><br /> Office #201, EmailHosting Tower,<br /> Business Bay, Dubai, UAE</p>

          <div className="mt-4">
            <h5>Follow Us</h5>
            <a href="#" className="me-3 text-decoration-none">Facebook</a>
            <a href="#" className="me-3 text-decoration-none">Twitter</a>
            <a href="#" className="text-decoration-none">LinkedIn</a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-7" data-aos="fade-left">
          <h4 className="mb-3">Send a Message</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary px-4">Submit</button>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="mt-5" data-aos="zoom-in">
        <h4 className="mb-3">Our Location</h4>
        <iframe
          title="Email Hosting Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.452004188693!2d55.27194751539526!3d25.20484998389702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434e328f9a8f%3A0x13e9f1d10b1fef4!2sBusiness%20Bay%2C%20Dubai!5e0!3m2!1sen!2sae!4v1615038878772!5m2!1sen!2sae"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
