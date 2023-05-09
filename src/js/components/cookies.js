const COOKIE_NAME = "cookie-settings";
const $dialog = document.querySelector("dialog");

browser.cookies.get(COOKIE_NAME).then((cookie) => {
	if (cookie) {
		if (cookie.value === "accept") {
			// Run analytics
		}
	} else {
		$dialog.show();

		$dialog.addEventListener("close", () => {
			const value = $dialog.returnValue;
			setCookie(COOKIE_NAME, value);

			if (value === "accept") {
				// Run analytics
			}
		});
	}
});
