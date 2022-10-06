import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar fixed-top navbar-expand-lg " id="top">
          <div className="container-fluid ">
            <Link className=" navbar-brand text-white" to="/">
              <img
                src="assets/images/logo.png"
                alt=""
                style={{ marginLeft: "6%" }}
              />
            </Link>
            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon " />
            </button>
            <div
              className="collapse navbar-collapse text-center "
              id="navbarScroll"
            >
              <ul className="navbar-nav  my-2 my-lg-0 navbar-nav-scroll  ">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white"
                    aria-current="page"
                    to="/"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/contact">
                    Tokenomics
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/contact">
                    Roadmap
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/soccer">
                    Documents
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/contact">
                    Faqs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link  text-white"
                    style={{
                      border: "3px solid black",
                      padding: "4px 10px",
                      borderRadius: "20px",
                    }}
                    to="/contact"
                  >
                    MINT FLOH RAFFLE NFT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
