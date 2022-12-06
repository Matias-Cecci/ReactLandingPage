import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Jumbotron = () => {
	return (
		<div className="container py-5 bg-light mx-auto">
			<h1 className="display-5 fw-bold ">A Warm welcome!</h1>
			<p className="col-md fs-5 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia unde error eveniet impedit est tempora quidem molestiae dicta soluta atque laboriosam velit iure sed ut rerum, autem cum labore consequatur?</p>
			<button className="btn btn-primary btn-lg" type="button">Call to action!</button>
      </div>
	);
};

export default Jumbotron;