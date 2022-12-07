import React from "react";
import Card from "./card";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";

const Home = () => {

  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 justify-content-center">
          <Card/>
		  <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </>
  );
};
export default Home;
