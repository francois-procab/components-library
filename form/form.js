// Show/Hide Password
const togglePassword = document.querySelector(".js-toggle-password");
const inputPassword = document.querySelector(".js-input-password");

const showHidePassword = () => {
	// Check type of input
	if (inputPassword.type === "password") {
		inputPassword.setAttribute("type", "text");
		togglePassword.classList.add("password-is-visible");
	} else {
		inputPassword.setAttribute("type", "password");
		togglePassword.classList.remove("password-is-visible");
	}
};

togglePassword.addEventListener("click", showHidePassword);
