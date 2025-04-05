import { Link } from "react-router-dom";

const Header = () => {
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    //   <div className="container">
    //     <Link className="navbar-brand" to="/">Email Hosting</Link>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav ms-auto">
    //         <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
    //         <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
    //         <li className="nav-item"><Link className="nav-link" to="/posts">Posts</Link></li>
    //         <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>



<nav class="navbar navbar-expand-lg bg-body-tertiary headermenu">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Email Hosting</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
          <li className="nav-item nav-link"><Link className="nav-link" to="/">Home</Link></li>
        </li>

        <li class="nav-item">
          <li className="nav-item nav-link"><Link className="nav-link" to="/about">About</Link></li>
        </li>

        
        <li class="nav-item">
          {/* <a class="nav-link" href="#">Link</a> */}
          <li className="nav-item nav-link"><Link className="nav-link" to="/posts">Posts</Link></li>
        </li>

        <li class="nav-item">
          <li className="nav-item nav-link"><Link className="nav-link" to="/contact">Contact</Link></li>
        </li>
        
        
      </ul>
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>


  );
};

export default Header;
