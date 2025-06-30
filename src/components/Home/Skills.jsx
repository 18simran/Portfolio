export const Work = () => {
  return (
    <>
      <section id="skills">
        <p className=" skillTitle fs-1 fw-bold ">What I do</p>
        <br />
        <p className="skillDesc mb-5">
          I design and build responsive websites using HTML, CSS, Tailwind, and
          Bootstrap. With JavaScript and React, I add interactivity and dynamic
          functionality to create smooth user experiences. I enjoy crafting
          clean, organized code and turning ideas into fast, modern web
          interfaces. Whether it’s a landing page or a full web app, I focus on
          both visuals and performance.
        </p>
        <div className="cards-section row row-cols-1 row-cols-sm-1 row-cols-md-1 g-2 g-5">
          <div className="col" data-aos="zoom-in-up">
            <div className="card d-flex flex-row ">
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src="../../images/uilogo.png"
                  className="card-img-top"
                  alt="image-skills"
                />
              </div>
              <div className="card-body">
                <p className="card-title fw-bold">UI/UX Design</p>
                <p className="card-text">
                  I design clean interfaces and seamless user experiences that
                  make websites easy to navigate, visually attractive, and
                  tailored to meet user needs .
                </p>
              </div>
            </div>
          </div>
          <div className="col" data-aos="zoom-in-up">
            <div className="card d-flex flex-row ">
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src="../../images/webdesignlogo.png"
                  className="card-img-top"
                  alt="image-skills"
                />
              </div>
              <div className="card-body">
                <p className="card-title fw-bold"> Website Design</p>
                <p className="card-text">
                  I develop responsive websites focusing on layout, structure,
                  and aesthetics to ensure consistency and accessibility across
                  all screen sizes and browsers.
                </p>
              </div>
            </div>
          </div>
          <div className="col" data-aos="zoom-in-right">
            <div className="card d-flex flex-row  ">
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src="../../images/frontendlogo.png"
                  className="card-img-top"
                  alt="image-skills"
                />
              </div>
              <div className="card-body">
                <p className="card-title fw-bold">Frontend Development</p>
                <p className="card-text">
                  Using JavaScript and React, I create dynamic, interactive
                  interfaces, turning static designs fully functional and
                  engaging web applications.
                </p>
              </div>
            </div>
          </div>
          <div className="col" data-aos="zoom-in-left">
            <div className="card d-flex flex-row  ">
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src="../../images/skill4logo.png"
                  className="card-img-top"
                  alt="image-skills"
                />
              </div>
              <div className="card-body">
                <p className="card-title fw-bold"> Component-Based Styling</p>
                <p className="card-text">
                  I build scalable, reusable components with Tailwind CSS and
                  Bootstrap, ensuring a consistent design system that speeds up
                  development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const Skills = () => {
  return (
    <>
      <div className="skills-section">
        <p className=" skillTitle fs-1 fw-bold ">Technical Skills</p>
        <div className=" d-flex  row-cols-md-2 row-cols-sm-2 flex-wrap justify-content-center align-items-center">
          <div
            className="skill-box d-flex flex-column justify-content-center align-items-center  p-3 m-4 "
            data-aos="zoom-in-up"
          >
            <img
              className="logo-img"
              src="../../images/SkillsLogo/html.png"
              alt="html"
            />

            <span>HTML</span>
          </div>

          <div
            className="skill-box d-flex flex-column justify-content-center align-items-center p-3 m-4 "
            data-aos="zoom-in-up"
          >
            <img
              className="logo-img"
              src="../../images/SkillsLogo/css.png"
              alt="css"
            />
            <span>CSS</span>
          </div>
          <div
            className="skill-box d-flex flex-column justify-content-center align-items-center p-3 m-4 "
            data-aos="zoom-in-up"
          >
            <img
              className="logo-img"
              src="../../images/SkillsLogo/bootstrap.png"
              alt="bootstrap"
            />

            <span>Bootstrap</span>
          </div>
          <div
            className="skill-box d-flex flex-column justify-content-center align-items-center p-3 m-4 "
            data-aos="zoom-in-up"
          >
            <img
              className="logo-img"
              src="../../images/SkillsLogo/tailwind.png"
              alt="html"
            />
            <span>Tailwind</span>
          </div>
          <div
            className="skill-box d-flex flex-column justify-content-center align-items-center p-3 m-4 "
            data-aos="zoom-in-up"
          >
            <img
              className="logo-img"
              src="../../images/SkillsLogo/javascript.png"
              alt="javascript"
            />
            <span>JavaScript</span>
          </div>
          <div
            className="skill-box d-flex flex-column justify-content-center align-items-center p-3 m-4 "
            data-aos="zoom-in-up"
          >
            <img
              className="logo-img"
              src="../../images/SkillsLogo/react.png"
              alt="react"
            />

            <span>React</span>
          </div>
          <div
            className="skill-box d-flex flex-column justify-content-center align-items-center p-3 m-4 "
            data-aos="zoom-in-up"
          >
            <img
              className="logo-img"
              src="../../images/SkillsLogo/nodejs.png"
              alt="html"
            />

            <span>NodeJs</span>
          </div>

          <div
            className="skill-box d-flex flex-column justify-content-center align-items-center p-3 m-4 "
            data-aos="zoom-in-up"
          >
            <img
              className="logo-img"
              src="../../images/SkillsLogo/express.png"
              alt="express"
            />
            <span>Express JS</span>
          </div>
          <div
            className="skill-box d-flex flex-column justify-content-center align-items-center p-3 m-4 "
            data-aos="zoom-in-up"
          >
            <img
              className="logo-img"
              src="../../images/SkillsLogo/mongodb.png"
              alt="mongodb"
            />

            <span>MongoDb</span>
          </div>
          <div
            className="skill-box d-flex flex-column justify-content-center align-items-center p-3 m-4 "
            data-aos="zoom-in-up"
          >
            <img
              className="logo-img"
              src="../../images/SkillsLogo/sql.png"
              alt="sql"
            />

            <span>SQL</span>
          </div>
        </div>
      </div>
    </>
  );
};
