import React from "react";



//create your first component
const Navbar = () => {
	return (
		<nav class="navbar bg-dark navbar-expand-lg">
			<div class="container-fluid">
				<a class="navbar-brand text-white">Start Bootstrap</a>
				<ul class="navbar-nav ">
					<li class="nav-item">
						<a class="nav-link active text-white" aria-current="page" href="#">Home</a>
					</li>
					<li class="nav-item">
						<a class="nav-link text-light" href="#">About</a>
					</li>
					<li class="nav-item">
						<a class="nav-link text-light" href="#">Services</a>
					</li>
					<li class="nav-item">
						<a class="nav-link text-light" href="#">Contact</a>
					</li>	
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;