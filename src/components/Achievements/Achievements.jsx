import "../../styles/achievements.css";
import "../../styles/mediaqueries.css";
import { certificates } from "../../data/certificate";

const Achievements = () => {
  return (
    <>
      <p className="certificate-title">My Certificates</p>
      <div className="achievements d-flex justify-content-center align-items-center flex-wrap gap-3">
        {certificates.map((c, id) => (
          <div className="certificate" key={id}>
            <img src={c.image} className="card-img-top" alt="certificate" />
          </div>
        ))}
      </div>
    </>
  );
};
export default Achievements;
