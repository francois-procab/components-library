const getRandomColor = () => {
	const h = Math.floor(Math.random() * 360);
	return `hsl(${h}deg, 90%, 85%)`;
};

const fadeTime = 300;

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

const slideUp = (target, duration = 500) => {
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + "ms";
	target.style.boxSizing = "border-box";
	target.style.height = target.offsetHeight + "px";
	target.offsetHeight;
	target.style.overflow = "hidden";
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = "none";
		target.style.removeProperty("height");
		target.style.removeProperty("padding-top");
		target.style.removeProperty("padding-bottom");
		target.style.removeProperty("margin-top");
		target.style.removeProperty("margin-bottom");
		target.style.removeProperty("overflow");
		target.style.removeProperty("transition-duration");
		target.style.removeProperty("transition-property");
		//alert("!");
	}, duration);
};

const slideDown = (target, duration = 500) => {
	target.style.removeProperty("display");
	let display = window.getComputedStyle(target).display;

	if (display === "none") display = "block";

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = "hidden";
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.boxSizing = "border-box";
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + "ms";
	target.style.height = height + "px";
	target.style.removeProperty("padding-top");
	target.style.removeProperty("padding-bottom");
	target.style.removeProperty("margin-top");
	target.style.removeProperty("margin-bottom");
	window.setTimeout(() => {
		target.style.removeProperty("height");
		target.style.removeProperty("overflow");
		target.style.removeProperty("transition-duration");
		target.style.removeProperty("transition-property");
	}, duration);
};

const slideToggle = (target, duration = 500) => {
	if (window.getComputedStyle(target).display === "none") {
		return slideDown(target, duration);
	} else {
		return slideUp(target, duration);
	}
};

const setActive = (el) => {
	[...el.parentElement.children].forEach((sib) => sib.classList.remove("is-active"));
	el.classList.add("is-active");
};

const isInViewport = (element) => {
	var rect = element.getBoundingClientRect();
	var html = document.documentElement;
	return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || html.clientHeight) && rect.right <= (window.innerWidth || html.clientWidth);
};

/**
 * Get the value of a cookie
 * Source: https://gist.github.com/wpsmith/6cf23551dd140fb72ae7
 * @param  {String} name  The name of the cookie
 * @return {String}       The cookie value
 */
function getCookie(name) {
	let value = `; ${document.cookie}`;
	let parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop().split(";").shift();
}

export { getRandomColor, slideUp, slideDown, slideToggle, getCookie, fadeOut, fadeIn, fadeTime, setActive, isInViewport };
