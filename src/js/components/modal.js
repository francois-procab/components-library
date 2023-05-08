export const Modal = (() => {
	const showModal = (trigger) => {
		const $target = trigger.getAttribute("data-modal-trigger");
		const $modal = document.querySelector(`[data-modal="${$target}"]`);

		if ($modal === null || $modal === undefined) return;

		$modal.classList.add("is-visible");
	};

	const closeModal = () => {
		const $modals = document.querySelectorAll(".modal");

		[].forEach.call($modals, (modal) => {
			if (modal.classList.contains("is-visible")) {
				modal.classList.remove("is-visible");
			}
		});
	};

	const bindClose = () => {
		const $modalBtnsClose = document.querySelectorAll(".js-close-modal");

		$modalBtnsClose.forEach((closeBtn) => {
			closeBtn.addEventListener("click", (e) => {
				e.preventDefault();
				closeModal();
			});
		});

		// Close modal when cliked outside
		document.addEventListener(
			"mouseup",
			(e) => {
				if (!e.target.closest(".modal__dialog")) {
					closeModal();
				}
			},
			false
		);

		// Close modal when ESC key pressed
		document.addEventListener("keydown", (evt) => {
			evt = evt || window.event;

			if (evt.code == "Escape") {
				closeModal();
			}
		});
	};

	const init = () => {
		const $modalTriggers = document.querySelectorAll("[data-modal-trigger]");

		$modalTriggers.forEach((trigger) => {
			trigger.addEventListener("click", (e) => {
				e.preventDefault();
				showModal(trigger);
			});
		});

		bindClose();
	};

	return {
		init: init,
	};
})();

Modal.init();
