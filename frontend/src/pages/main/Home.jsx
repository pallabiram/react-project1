import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../../Context/AuthContext'

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="home">
      <div className="img">
      </div>
      <div className="textHome">
        <h1 className="home" data-name='Welcome&nbsp;to&nbsp;book&nbsp;library' data-aos="zoom-out">Welcome To Book Library</h1>
        {currentUser ? (
          <Link to="/book/dashboard" >
            <button className="home-btn" data-aos="slide-up">Dashboard</button>
          </Link>
        ) : (
          <Link to="/register">
            <button className="home-btn" data-aos="slide-up">Register</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Home;
