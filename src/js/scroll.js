document.querySelector(".hero-section__button").onclick = () => {
	const height = document.querySelector(".hero").offsetHeight;
	window.scrollTo({
	  	top: height,
	  	behavior: "smooth",
	});
};

document.querySelector(".btn-up__link").onclick = () => {
	window.scrollTo({
	  	top: 0,
	  	behavior: "smooth",
	});
};
