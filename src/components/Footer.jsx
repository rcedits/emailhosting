const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
    <div className="container text-md-left">
      <div className="row text-md-left">
  
        {/* Company */}
        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
          <h5 className="text-uppercase mb-4 font-weight-bold">Company</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-white text-decoration-none d-block mb-2">About Us</a></li>
            <li><a href="#" className="text-white text-decoration-none d-block mb-2">Careers</a></li>
            <li><a href="#" className="text-white text-decoration-none d-block mb-2">Press</a></li>
          </ul>
        </div>
  
        {/* Support */}
        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
          <h5 className="text-uppercase mb-4 font-weight-bold">Support</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-white text-decoration-none d-block mb-2">Help Center</a></li>
            <li><a href="#" className="text-white text-decoration-none d-block mb-2">Contact Us</a></li>
            <li><a href="#" className="text-white text-decoration-none d-block mb-2">FAQs</a></li>
          </ul>
        </div>
  
        {/* Services */}
        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
          <h5 className="text-uppercase mb-4 font-weight-bold">Services</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-white text-decoration-none d-block mb-2">Email Hosting</a></li>
            <li><a href="#" className="text-white text-decoration-none d-block mb-2">Domain Registration</a></li>
            <li><a href="#" className="text-white text-decoration-none d-block mb-2">SSL Certificates</a></li>
          </ul>
        </div>
  
        {/* Social Media */}
        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
          <h5 className="text-uppercase mb-4 font-weight-bold">Follow Us</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#" className="text-white text-decoration-none d-block mb-2">
                <i className="bi bi-facebook me-2"></i> Facebook
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-decoration-none d-block mb-2">
                <i className="bi bi-twitter me-2"></i> Twitter
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-decoration-none d-block mb-2">
                <i className="bi bi-linkedin me-2"></i> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
  
      <hr className="my-4" />
  
      <div className="row">
        <div className="col-md-12 text-center">
          <p className="mb-0">© 2025 Email Hosting Co. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
  
  );
};

export default Footer;
