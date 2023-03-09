const ShowHidePassword = (() => {
	const showHide = (e) => {
		const inputPassword = document.querySelector(".js-input-password");

		if (inputPassword.type === "password") {
			inputPassword.setAttribute("type", "text");
			e.currentTarget.classList.add("password-is-visible");
			inputPassword.focus();
		} else {
			inputPassword.setAttribute("type", "password");
			e.currentTarget.classList.remove("password-is-visible");
			inputPassword.focus();
		}
	};

	const init = () => {
		const togglePassword = document.querySelector(".js-toggle-password");
		togglePassword.addEventListener("click", showHide);
	};

	return {
		init: init,
	};
})();

ShowHidePassword.init();
