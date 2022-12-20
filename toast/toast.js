let toastContainer;
let toastClose;

const Toast = ({ message, state = "info", duration = "3000ms", autoClose = true }) => {
	toastContainer.insertAdjacentHTML(
		"beforeend",
		`<div class="toast toast--${state} ${autoClose == false ? `has-close-button` : ``}" style="--_toast-animation-duration="${duration}">
            <p>${message}</p>
            ${
				autoClose == false
					? `<button class="toast__close" type="button" data-label="Fermer">
							<span aria-hidden="true">×</span>
						</button>`
					: ``
			}
        </div>`
	);

	const toast = toastContainer.lastElementChild;
	toastClose = document.querySelector(".toast__close");

	if (autoClose === false) {
		toastClose.addEventListener("click", () => toast.remove());
	} else {
		toast.addEventListener("animationend", () => toast.remove());
	}
};

const initToast = () => {
	document.body.insertAdjacentHTML("beforeend", '<div class="toasts-group"></div>');
	toastContainer = document.querySelector(".toasts-group");
};

document.addEventListener("DOMContentLoaded", () => {
	initToast();

	document.querySelector("button").addEventListener("click", (e) => {
		Toast({
			message: "Message",
			autoClose: false,
			state: "warning",
		});
	});
});
