import { getCookie } from "../tools/utils.js";

const favBtns = document.querySelectorAll("[data-favorite]");
const cookieVal = [];

// let currentCookies = getCookie("inFav");

// if (currentCookies.length && currentCookies != undefined && currentCookies != null) {
// 	currentCookies = currentCookies.split(",");
// 	favBtns.forEach((btn) => {
// 		if (currentCookies.includes(btn.dataset.favorite)) {
// 			btn.classList.add("is-added");
// 		}
// 	});
// }
console.log(getCookie("inFav").split(","));

favBtns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		let favElt = e.currentTarget.dataset.favorite;

		if (btn.classList.contains("is-added")) {
			// currentCookies.filter(function (wizard) {
			// 	return wizard !== favElt;
			// });

			btn.classList.remove("is-added");
		} else {
			cookieVal.push(favElt);
			document.cookie = `inFav=${cookieVal}; max-age=${60 * 60 * 24 * 14};`;
			btn.classList.add("is-added");
		}
	});
});
