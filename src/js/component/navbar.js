import React from "react";



//create your first component
const Navbar = () => {
	return (
		<nav class="navbar navbar-dark bg-dark navbar-expand-md ">
			<div class="container-md">
				<a class="navbar-brand text-white fs-3">Start Bootstrap</a>
				<button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon  "></span>
				</button>
				<div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
					<ul class="navbar-nav">
						<li class="nav-item">
							<a class="nav-link active text-white" aria-current="page" href="#">Home</a>
						</li>
						<li class="nav-item">
							<a class="nav-link text-secondary" href="#">About</a>
						</li>
						<li class="nav-item">
							<a class="nav-link text-secondary" href="#">Services</a>
						</li>
						<li class="nav-item">
							<a class="nav-link text-secondary" href="#">Contact</a>
						</li>	
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;