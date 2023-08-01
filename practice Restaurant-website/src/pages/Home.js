import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpeg";
import food from "../images/food4.jpg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${food})` }}>
        <div className="headerContainer">  
        <h1>Food Website</h1>
          <p>Best Food In CHARUSAT</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>        
        </div>
      </div>
    </Layout>
  );
};

export default Home;
