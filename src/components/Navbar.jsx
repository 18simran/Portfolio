import { Link } from "react-router-dom";
import "../styles/navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="/">
            <img
              className="main-logo"
              src="/images/Logo.png"
              alt="Logo"
              width="100"
              height="100"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-evenly"
            id="navbarNav"
          >
            <ul className="navbar-nav align-items-center gap-md-3 gap-sm-2">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">
                  &nbsp; CV &nbsp;
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/achievements">
                  Achievements
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link contact-me" to="/contact">
                  <button className="contact-btn">Contact Me</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
