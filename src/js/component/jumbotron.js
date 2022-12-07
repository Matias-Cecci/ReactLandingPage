import propTypes from "prop-types";
import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Jumbotron = (props) => {
	return (
		<div className="container py-5 bg-light mx-auto mt-2 mb-2">
			<h1 className="display-1 fw-semibold">{props.titleJumbotron}</h1>
			<p className="col-md fs-5 ">{props.textJumbotron}</p>
			<button className="btn btn-primary btn-lg" type="button">{props.buttonJumbotron}</button>
      </div>
	);
};
Jumbotron.propTypes = {
	titleJumbotron: propTypes.string,
	textJumbotron: propTypes.string,
	buttonJumbotron: propTypes.string
}

export default Jumbotron;