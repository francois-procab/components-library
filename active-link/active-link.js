// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");
const stickyNav = document.querySelector(".js-active-link");

// Add an event listener listening for scroll
const navHighlighter = () => {
	// Get current scroll position
	let scrollY = window.pageYOffset;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - stickyNav.offsetHeight;
		sectionId = current.getAttribute("id");

		if (scrollY > sectionTop - 1 && scrollY <= sectionTop + sectionHeight - 1) {
			stickyNav.querySelector(`a[href*="${sectionId}"]`).parentNode.classList.add("is-active");
		} else {
			stickyNav.querySelector(`a[href*="${sectionId}"]`).parentNode.classList.remove("is-active");
		}
	});
};

window.addEventListener("scroll", navHighlighter);
