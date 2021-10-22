import React from 'react'

const About= () =>{
    return(
        <div>
            <body>
  
  {/* <!-- Back to top button --> */}
  <div className="back-to-top"></div>

  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky" data-offset="300">
      <div className="container">
        <a href="#" className="navbar-brand">Seo<span className="text-primary">Gram.</span></a>

        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapsed" id="navbarContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="index.html">Home</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="about.html">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="service.html">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="blog.html">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">Contact</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-primary ml-lg-2" href="#">Free Analytics</a>
            </li>
          </ul>
        </div>

      </div>
    </nav>

    <div className="container">
      <div className="page-banner">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-md-6">
            <nav aria-label="Breadcrumb">
              <ul className="breadcrumb justify-content-center py-0 bg-transparent">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active">About</li>
              </ul>
            </nav>
            <h1 className="text-center">About Us</h1>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div className="page-section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 py-3">
          <h2 className="title-section">The number #1 SEO Service Company</h2>
          <div className="divider"></div>

          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
          <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nisi saepe eum ipsa. Tempore dolore itaque est blanditiis libero fugiat, ea nostrum nam at tempora quis, facilis officiis nemo mollitia.</p>
        </div>
        <div className="col-lg-6 py-3">
          <div className="img-fluid py-3 text-center">
            <img src="../assets/img/about_frame.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="page-section">
    <div className="container">
      <div className="text-center">
        <div className="subhead">Pricing Plan</div>
        <h2 className="title-section">Choose plan the right for you</h2>
        <div className="divider mx-auto"></div>
      </div>
      <div className="row mt-5">
        <div className="col-lg-4 py-3">
          <div className="card-pricing">
            <div className="header">
              <div className="pricing-type">Basic</div>
              <div className="price">
                <span className="dollar">$</span>
                <h1>39<span className="suffix">.99</span></h1>
              </div>
              <h5>Per Month</h5>
            </div>
            <div className="body">
              <p>25 Analytics <span className="suffix">Campaign</span></p>
              <p>1,300 Change <span className="suffix">Keywords</span></p>
              <p>Social Media <span className="suffix">Reviews</span></p>
              <p>1 Free <span className="suffix">Optimization</span></p>
              <p>24/7 <span className="suffix">Support</span></p>
            </div>
            <div className="footer">
              <a href="#" className="btn btn-pricing btn-block">Subscribe</a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 py-3">
          <div className="card-pricing marked">
            <div className="header">
              <div className="pricing-type">Standar</div>
              <div className="price">
                <span className="dollar">$</span>
                <h1>59<span className="suffix">.99</span></h1>
              </div>
              <h5>Per Month</h5>
            </div>
            <div className="body">
              <p>25 Analytics <span className="suffix">Campaign</span></p>
              <p>1,300 Change <span className="suffix">Keywords</span></p>
              <p>Social Media <span className="suffix">Reviews</span></p>
              <p>1 Free <span className="suffix">Optimization</span></p>
              <p>24/7 <span className="suffix">Support</span></p>
            </div>
            <div className="footer">
              <a href="#" className="btn btn-pricing btn-block">Subscribe</a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 py-3">
          <div className="card-pricing">
            <div className="header">
              <div className="pricing-type">Professional</div>
              <div className="price">
                <span className="dollar">$</span>
                <h1>99<span className="suffix">.99</span></h1>
              </div>
              <h5>Per Month</h5>
            </div>
            <div className="body">
              <p>25 Analytics <span className="suffix">Campaign</span></p>
              <p>1,300 Change <span className="suffix">Keywords</span></p>
              <p>Social Media <span className="suffix">Reviews</span></p>
              <p>1 Free <span className="suffix">Optimization</span></p>
              <p>24/7 <span className="suffix">Support</span></p>
            </div>
            <div className="footer">
              <a href="#" className="btn btn-pricing btn-block">Subscribe</a>
            </div>
          </div>
        </div>

      </div>
    </div>
     {/* <!-- .container --> */}
  </div>
   {/* <!-- .page-section --> */}

  <footer className="page-footer bg-image" 
//   style="background-image: url(../assets/img/world_pattern.svg);"
  >
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-3 py-3">
          <h3>SEOGram</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero amet, repellendus eius blanditiis in iusto eligendi iure.</p>

          <div className="social-media-button">
            <a href="#"><span className="mai-logo-facebook-f"></span></a>
            <a href="#"><span className="mai-logo-twitter"></span></a>
            <a href="#"><span className="mai-logo-google-plus-g"></span></a>
            <a href="#"><span className="mai-logo-instagram"></span></a>
            <a href="#"><span className="mai-logo-youtube"></span></a>
          </div>
        </div>
        <div className="col-lg-3 py-3">
          <h5>Company</h5>
          <ul className="footer-menu">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Advertise</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Help & Support</a></li>
          </ul>
        </div>
        <div className="col-lg-3 py-3">
          <h5>Contact Us</h5>
          <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
          <a href="#" className="footer-link">+00 1122 3344 5566</a>
          <a href="#" className="footer-link">seogram@temporary.com</a>
        </div>
        <div className="col-lg-3 py-3">
          <h5>Newsletter</h5>
          <p>Get updates, news or events on your mail.</p>
          <form action="#">
            <input type="text" className="form-control" placeholder="Enter your email.."/>
            <button type="submit" className="btn btn-success btn-block mt-2">Subscribe</button>
          </form>
        </div>
      </div>

      <p className="text-center" id="copyright">Copyright &copy; 2020. This template design and develop by <a href="https://macodeid.com/" target="_blank">MACode ID</a></p>
    </div>
  </footer>

</body>

        </div>
    )
}
export default About;