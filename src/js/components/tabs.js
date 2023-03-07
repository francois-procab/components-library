// Tabs
const tabBtns = document.querySelectorAll(".tabs__btn");
const tabPanes = document.getElementsByClassName("tabs__pane");

let fadeTime = 200;

export const Tab = (() => {
	const fadeOut = (target) => {
		target.style.opacity = 1;
		target.style.transition = `opacity ${fadeTime}ms`;
		target.style.opacity = 0;
		setTimeout(() => {
			target.style.display = "none";
		}, fadeTime);
	};

	const fadeIn = (target) => {
		target.style.opacity = 0;
		target.style.transition = `opacity ${fadeTime}ms`;
		target.style.opacity = 1;
		setTimeout(() => {
			target.style.display = "block";
		}, fadeTime);
	};

	const triggerTab = (elt) => {
		elt.preventDefault();
		const clickedTab = elt.target.dataset.tabTarget;

		tabBtns.forEach((btn) => {
			btn.classList.remove("is-active");
			btn.setAttribute("aria-selected", false);
		});

		[].forEach.call(tabPanes, (pane) => {
			fadeOut(pane);
		});

		elt.target.classList.add("is-active");
		elt.target.setAttribute("aria-selected", true);
		fadeIn(document.querySelector(`#${clickedTab}`));
	};

	const init = () => {
		tabBtns.forEach((tab) => {
			tab.addEventListener("click", triggerTab);
		});
	};

	return {
		init: init,
	};
})();

Tab.init();
