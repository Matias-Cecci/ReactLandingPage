import React from "react";
import Navbar from "./navbar";
import Footer from "./footer"

import Jumbotron from "./jumbotron";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
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
			</div>
      <Footer/>
		</div>
	);
};

export default Home;
