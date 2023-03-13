import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";
hljs.registerLanguage("xml", xml);
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

const copyToClipboard = (trigger, content) => {
	clearTimeout();
	const btntextVal = trigger.dataset.tooltip;

	navigator.clipboard.writeText(content).then(
		function () {
			trigger.setAttribute("data-tooltip", "Copied!");
			setTimeout((e) => {
				trigger.setAttribute("data-tooltip", btntextVal);
			}, 1000);
		},
		function (err) {
			console.error("Async: Could not copy text: ", err);
		}
	);
};

document.addEventListener("DOMContentLoaded", (event) => {
	document.querySelectorAll("pre code").forEach((el) => {
		hljs.highlightElement(el);
	});

	const copyToClipBoardTriggers = document.querySelectorAll(".copy-to-clipboard");

	copyToClipBoardTriggers.forEach((item) => {
		item.addEventListener("click", (e) => {
			const currentItem = e.currentTarget;
			const contentToCopy = item.parentNode.nextElementSibling.querySelector("code").textContent;

			copyToClipboard(currentItem, contentToCopy);
		});
	});

	// TO MOVE
	const hasSubNav = document.querySelectorAll(".has-sub-menu");
	hasSubNav.forEach((item) => {
		const trigger = item.querySelector(".menu-trigger");

		trigger.addEventListener("click", (e) => {
			e.preventDefault();

			hasSubNav.forEach((elt) => {
				elt.classList.remove("is-open");
			});

			if (item.classList.contains("is-open")) {
				item.classList.remove("is-open");
			} else {
				item.classList.add("is-open");
			}
		});
	});
});
