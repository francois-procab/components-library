let toastContainer;
let toastClose;

let moduleInit = false;

// Make a toast
export const Toast = ({ message, state = "info", autoClose = true }) => {
	if (!moduleInit) {
		initToast();
	}

	// Set classes to toast wrappper
	const cls = ["toast", `toast--${state}`];

	// Create Elements
	let toastElt = document.createElement("div");
	let toastMsg = document.createElement("p");
	let closeBtn = document.createElement("button");
	let closeIcon = document.createElement("span");

	// Set attributes to close btn
	closeBtn.classList.add("toast__close");
	closeBtn.setAttribute("aria-label", "Fermer");
	closeIcon.setAttribute("aria-hidden", true);
	closeIcon.textContent = "x";

	// Add message
	toastMsg.textContent = message;

	// Inject nodes
	closeBtn.appendChild(closeIcon);
	toastElt.appendChild(toastMsg);

	// Add specific class if close button exist
	if (!autoClose) {
		cls.push("has-close-button");
		toastElt.appendChild(closeBtn);
	}

	// Add classes to toast wrapper
	toastElt.classList.add(...cls);

	// Add toast to toasts container
	toastContainer.insertAdjacentElement("beforeend", toastElt);

	// Get the last toast added
	const lastToast = toastContainer.lastElementChild;

	// Close the toast
	if (!autoClose) {
		toastClose = document.querySelectorAll(".toast__close");
		[...toastClose].forEach((close) => {
			close.addEventListener("click", () => close.parentNode.remove());
		});
	} else {
		lastToast.addEventListener("animationend", () => lastToast.remove());
	}
};

export const initToast = () => {
	// Create toasts group
	let toastsWrap = document.createElement("div");
	toastsWrap.classList.add("toasts-group");

	document.body.insertAdjacentElement("beforeend", toastsWrap);
	toastContainer = document.querySelector(".toasts-group");

	moduleInit = true;
};

document.addEventListener("DOMContentLoaded", (e) => {
	document.querySelectorAll(".btn").forEach((btn) => {
		btn.addEventListener("click", (e) => {
			Toast({
				message: btn.dataset.msg,
				autoClose: btn.dataset.autoClose === "false" ? false : true,
				state: btn.dataset.state,
			});
		});
	});
});
