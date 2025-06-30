import Intro from "./Intro";
import { personalInfo } from "../../data/personalInfo.js";
import { Work, Skills } from "./Skills";

const Home = () => {
  return (
    <>
      <Intro personalInfo={personalInfo} />
      <Work />
      <Skills />
    </>
  );
};
export default Home;
