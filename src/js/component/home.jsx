import React from "react";
import Card from "./card";
import Navbar from "./navbar";
import Footer from "./footer"
import Jumbotron from "./jumbotron";

const Home = () => {

	return (
		<div className="fluid">
			<Navbar/>
			<div className="container">
				
				<Jumbotron
				titleJumbotron= "A warm welcome!"
				textJumbotron= "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat quam delectus asperiores nemo adipisci ea dolorum amet est, doloribus repudiandae fuga vero aliquam excepturi nam qui perspiciatis sequi voluptas obcaecati?"
				buttonJumbotron= "Call to action!"
				/>
        <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 justify-content-center">
          <Card/>
		  <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
			</div>
      <Footer/>
		</div>
	);

};
export default Home;
