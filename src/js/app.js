// Tom Select
import TomSelect from "tom-select";

import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";
import javascript from "highlight.js/lib/languages/javascript";
import css from "highlight.js/lib/languages/css";

hljs.registerLanguage("xml", xml);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("css", css);

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
	const dataScroll = document.querySelectorAll("[data-scroll]");

	if (dataScroll) {
		dataScroll.forEach((trigger) => {
			trigger.addEventListener("click", (e) => {
				const scrollId = e.currentTarget.dataset.scroll;
				window.scrollTo({
					top: document.getElementById(scrollId),
				});
			});
		});
	}

	const navPills = document.querySelectorAll(".pills__item");
	if (navPills) {
		navPills.forEach((pill) => {
			pill.addEventListener("click", (e) => {
				e.preventDefault();

				[].forEach.call(navPills, (item) => {
					item.classList.remove("is-active");
				});

				pill.classList.add("is-active");
				pill.scrollIntoView({
					behavior: "smooth",
					block: "nearest",
					inline: "center",
				});
			});
		});
	}

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

new TomSelect("#input-tags", {
	persist: false,
	createOnBlur: true,
	create: true,
});
