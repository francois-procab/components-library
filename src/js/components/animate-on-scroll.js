// Add class when elem reach the top
export const animateHTML = ($elements, $offset = "0", $class = "is-visible") => {
	let elems, windowHeight;

	const addEventHandlers = () => {
		window.addEventListener("scroll", checkPosition);
		window.addEventListener("resize", init);
	};

	const checkPosition = () => {
		elems.forEach((elt) => {
			const posFromTop = elt.getBoundingClientRect().top;
			// Check if element it's already visible
			if (posFromTop + $offset - windowHeight <= 0) {
				elt.classList.add($class);
			} else {
				elt.classList.remove($class);
			}
		});
	};

	const init = () => {
		elems = $elements;
		windowHeight = window.innerHeight;
		checkPosition();
		addEventHandlers();
	};

	return {
		init: init,
	};
};

const items = document.querySelectorAll(".animate-elt");
animateHTML(items).init();
