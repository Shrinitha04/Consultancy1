import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#45484b" }}
    >
      {/* Section: Social media */}

      {/* Left */}

      {/* Section: Social media */}

      {/* Section: Links */}
      <br></br>
      
      <section className="">
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold">BOOTY BAGS AND SHOES</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p style={{ color: "white" }}>
              Welcome to Booty Bags & Shoes, where the tradition of impeccable design 
              meets five generations of dedication and passion for stylish accessories. 
              Since our establishment in 1947, we have been devoted to providing unmatched 
              quality and service to our valued clients.
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Pages</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p>
                <a href="/" className="text-white">
                  Home
                </a>
              </p>
              <p>
                <a href="/about" className="text-white">
                  About
                </a>
              </p>
              <p>
                <a href="/products" className="text-white">
                  Products
                </a>
              </p>
            </div>
            {/* Grid column */}

            {/* Repeat the same structure for other columns */}

            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Contacts</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#7c4dff",
                  height: "2px",
                }}
              />
              <p style={{ color: "white" }}>
                <i className="fas fa-home mr-3"></i> SARASWATHI OPPOSITE,NORTH CAR STREET,TIRUCHENGODE-637211,NAMAKKAL(DT)
              </p>
              <p style={{ color: "white" }}>
                <i className="fas fa-envelope mr-3"></i>{" "}
                amirbags@gmail.com
              </p>
              <p style={{ color: "white" }}>
                <i className="fas fa-phone mr-3"></i> +91 76395 77713
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
