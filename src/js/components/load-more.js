// https://webdesign.tutsplus.com/tutorials/how-to-implement-a-load-more-button-with-vanilla-javascript--cms-42080
import { getRandomColor } from "../tools/utils.js";

const cardContainer = document.querySelector(".cards-ctn");
const loadMoreButton = document.querySelector(".js-load-more");
const cardCountElem = document.querySelector(".js-load-more-count");
const cardTotalElem = document.querySelector(".js-load-more-total");
const range = document.querySelector(".js-load-more-range");

const cardLimit = 99;
const cardIncrease = 12;
const pageCount = Math.ceil(cardLimit / cardIncrease);
let currentPage = 1;

cardTotalElem.innerHTML = cardLimit;

const handleButtonStatus = () => {
	if (pageCount === currentPage) {
		loadMoreButton.classList.add("disabled");
		loadMoreButton.setAttribute("disabled", true);
	}
};

const createCard = (index) => {
	const card = document.createElement("div");
	card.className = "card";
	card.innerHTML = `Card n° ${index}`;
	card.style.backgroundColor = getRandomColor();
	cardContainer.appendChild(card);
};

const addCards = (pageIndex) => {
	currentPage = pageIndex;

	handleButtonStatus();

	const startRange = (pageIndex - 1) * cardIncrease;
	const endRange = pageIndex * cardIncrease > cardLimit ? cardLimit : pageIndex * cardIncrease;

	range.style.setProperty("--_range", `${endRange}%`);

	cardCountElem.innerHTML = endRange;
	for (let i = startRange + 1; i <= endRange; i++) {
		createCard(i);
	}
};

window.onload = function () {
	range.style.setProperty("--_range", `${cardIncrease}%`);
	addCards(currentPage);
	loadMoreButton.style.backgroundColor = getRandomColor();

	loadMoreButton.addEventListener("click", () => {
		addCards(currentPage + 1);
		range.style.setProperty("--_bkg", getRandomColor());
	});
};
