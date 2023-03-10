export const navHighlighter = (() => {
	const highlight = () => {
		const sections = document.querySelectorAll("section[id]");
		const stickyNav = document.querySelector(".js-active-link");
		// Get current scroll position
		let scrollY = window.pageYOffset;

		sections.forEach((current) => {
			const sectionHeight = current.offsetHeight;
			const sectionTop = current.offsetTop - stickyNav.offsetHeight;
			const sectionId = current.getAttribute("id");

			if (scrollY > sectionTop - 1 && scrollY <= sectionTop + sectionHeight - 1) {
				stickyNav.querySelector(`a[href*="${sectionId}"]`).parentNode.classList.add("is-active");
			} else {
				stickyNav.querySelector(`a[href*="${sectionId}"]`).parentNode.classList.remove("is-active");
			}
		});
	};

	const init = () => {
		window.addEventListener("scroll", highlight);
	};

	return {
		init: init,
	};
})();

navHighlighter.init();
