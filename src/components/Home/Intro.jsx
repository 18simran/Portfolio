import { Link } from "react-router-dom";
import "../../styles/home.css";
import "../../styles/mediaqueries.css";

const Intro = ({ personalInfo }) => {
  return (
    <>
      <section id="intro">
        <div
          className=" introContent d-flex flex-column  "
          data-aos="fade-up-right"
        >
          <span className="hello">Hello,</span>
          <span className="introText">
            I'm <span className="introName">{personalInfo.name}</span> <br />
            {personalInfo.title}
          </span>
          <p className="intropara">
            I build clean, responsive websites focused on great user experience.
            I care about writing clear code that works smoothly on all devices.
            Always learning and improving with every project I take on.
          </p>
          <Link to="/contact">
            <button className="btn">
              <img
                src="../../images/hireme.png"
                alt="hire-me"
                className="hireme"
              />
              Hire me
            </button>
          </Link>
        </div>

        <img
          src="../../images/intro-image.jpg"
          alt="profile"
          className="bg "
          data-aos="fade-up-left"
        />
      </section>
    </>
  );
};
export default Intro;
