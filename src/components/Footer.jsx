import "../styles/footer.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = ({ personalInfo }) => {
  return (
    <footer className=" mt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="links row flex justify-center flex-wrap gap-2">
          <a href={personalInfo.social.github} className="col  ">
            <FaGithub /> <span>Github</span>
          </a>

          <a href={personalInfo.social.linkedin} className="col ">
            <FaLinkedin /> <span>Linkedin</span>
          </a>
          <a href={personalInfo.social.instagram} className=" col  ">
            <FaInstagram /> <span>instagram</span>
          </a>
        </div>
        <p className="text-sm  ">&copy; 2025 - {personalInfo.name}</p>
      </div>
    </footer>
  );
};

export default Footer;
