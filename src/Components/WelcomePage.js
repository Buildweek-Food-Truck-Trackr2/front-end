import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/WelcomePageStyles.css";
import { useHistory } from "react-router-dom";
import photo1 from "../Pics/photo-1.jfif";
import photo2 from "../Pics/photo-2.jfif";
import photo3 from "../Pics/photo-3.jfif";
import photo4 from "../Pics/photo-4.jfif";

const WelcomePage = () => {
  const history = useHistory();

  return (
    <>
      <section className="pitch">
        <div className="first">
          <h3>A Better Sleep Schedule, A Better You</h3>
          <p>
            Experts agree: having a poor sleep schedule is the number one cause
            of having a poor sleep schedule. Through the power of basic math and
            graphs, the Sleep Tracker app will take the guesswork out of sleep
            by helping you craft a personalized sleep schedule to suit your
            individual needs.
          </p>
          <div className="button">
            <button onClick={() => history.push("/register")}>Sign In</button>
            <button onClick={() => history.push("/register")}>Sign Up</button>
          </div>
        </div>
        <img src={photo1} />
      </section>

      <section className="process">
        <h3>The Process</h3>
        <container>
          <div className="procs">
            <p>Track Your Sleep</p>
            <img src={photo2} />
            <p>
              Use Sleep Tracker to record when you fall asleep and when you
              wake.
            </p>
          </div>
          <div className="procs">
            <p>Log Your Mood</p>
            <img src={photo3} />

            <p>During the day, tell Sleep Tracker how you REALLY feel.</p>
          </div>
          <div className="procs">
            <p>Unlock Your Sleep Potential</p>
            <img src={photo4} />
            <p>
              Finally take that one Facebook post's advice and start living your
              best life.
            </p>
          </div>
        </container>
      </section>
    </>
  );
};

export default WelcomePage;
