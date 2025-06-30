import "../styles/mediaqueries.css";
const Portfolio = () => {
  return (
    <>
      <div className="portfolio d-flex flex-column justify-content-center align-items-center">
        <img src="../../images/Simran_Kaur_CV_.jpg" style={{ width: "70%" }} />
        <a
          href="../../images/Simran_Kaur_CV_.jpg"
          download="Simran_Kaur_CV.jpg"
        >
          <button
            className="btn"
            style={{
              background: "#35575e",
              color: "white",
              margin: "40px 0",
              padding: "10px",
              fontSize: "16px",
            }}
          >
            Download CV
          </button>
        </a>
      </div>
    </>
  );
};
export default Portfolio;
