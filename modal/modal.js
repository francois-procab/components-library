const modalTriggers = document.querySelectorAll(".js-trigger-modal");

if (modalTriggers.length) {
	const modals = document.querySelectorAll(".modal");
	const modalBtnsClose = document.querySelectorAll(".js-close-modal");
	let video_src = "";

	const closeModal = () => {
		modals.forEach((modal) => {
			modal.classList.remove("is-visible");

			// If modal video, remove content
			if (modal.dataset.modal == "video") {
				modal.querySelector(".modal__content").innerHTML = "";
			}
		});
	};

	modalTriggers.forEach((trigger) => {
		trigger.addEventListener("click", (e) => {
			e.preventDefault();

			const target = e.currentTarget.getAttribute("data-modal-trigger");
			const modal = document.querySelector(`[data-modal="${target}"]`);

			if (modal === null || modal === undefined) return;

			modal.classList.add("is-visible");

			// Video Content
			video_src = e.currentTarget.getAttribute("data-src");

			if (video_src !== undefined && video_src !== null) {
				const autoplay_src = e.currentTarget.getAttribute("data-autoplay");
				const iframe = `<iframe src="${
					video_src + autoplay_src
				}" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" class="iframe-video"></iframe>`;

				modal.querySelector(".modal__content").innerHTML = iframe;
			}
		});
	});

	modalBtnsClose.forEach((closeBtn) => {
		closeBtn.addEventListener("click", (e) => {
			e.preventDefault();
			closeModal();
		});
	});

	document.addEventListener(
		"mouseup",
		(e) => {
			// If user clicks inside the element, do nothing
			if (!e.target.closest(".modal__dialog")) {
				closeModal();
			}
		},
		false
	);

	document.onkeydown = function (evt) {
		evt = evt || window.event;

		// on escape key close modal
		if (evt.code == "Escape") {
			closeModal();
		}
	};
}
