const $btns = document.querySelectorAll("[data-cookie]");
async function init(val) {
	if (!("cookieStore" in window)) {
		console.log("Not supported");
		return;
	}

	cookieStore.onchange = (event) => {
		console.log("cookie change event", event);
	};

	let hitCounter = await cookieStore.get("hitCounter");

	if (!hitCounter) {
		hitCounter = { value: 0 };
	}

	hitCounter.value = val;

	try {
		await cookieStore.set("hitCounter", hitCounter.value);
	} catch (e) {
		console.error(e);
	}
}

$btns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		const dataCookie = btn.dataset.cookie;

		init(dataCookie);
	});
});
