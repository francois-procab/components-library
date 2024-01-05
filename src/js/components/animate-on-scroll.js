export const animateOnScroll = (() => {
	let throttleTimer;

	// Fonction de throttling pour limiter la fréquence d'exécution d'une fonction
	const throttle = (callback, time) => {
		if (throttleTimer) return; // Si un timer est déjà en cours, sortir de la fonction

		throttleTimer = true; // Définir le timer
		setTimeout(() => {
			callback(); // Appeler la fonction une fois le délai écoulé
			throttleTimer = false; // Réinitialiser le timer
		}, time);
	};

	// Vérifie si un élément est dans la vue, en prenant en compte une partie spécifique de la hauteur de la fenêtre
	const elementInView = (el, dividend = 1) => {
		const elementTop = el.getBoundingClientRect().top;

		return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
	};

	// Vérifie si un élément est sorti de la vue
	const elementOutofView = (el) => {
		const elementTop = el.getBoundingClientRect().top;

		return elementTop > (window.innerHeight || document.documentElement.clientHeight);
	};

	// Ajoute la classe "is-scrolled" pour afficher l'élément
	const displayScrollElement = (element) => {
		element.classList.add("is-scrolled");
	};

	// Supprime la classe "is-scrolled" pour cacher l'élément
	const hideScrollElement = (element) => {
		element.classList.remove("is-scrolled");
	};

	// Gère l'animation au défilement pour chaque élément dans scrollElements
	const handleScrollAnimation = (scrollElements) => {
		scrollElements.forEach((el) => {
			if (elementInView(el, 0.9)) {
				// Si l'élément est en vue
				displayScrollElement(el);
			} else if (elementOutofView(el)) {
				// Si l'élément est hors de vue
				hideScrollElement(el);
			}
		});
	};

	// Initialisation du module d'animation au défilement
	const init = () => {
		const scrollElements = document.querySelectorAll("[data-scroll]");

		// Vérifie les éléments visibles dès le chargement de la page
		scrollElements.forEach((el) => {
			if (elementInView(el, 1.25)) {
				displayScrollElement(el);
			}
		});

		// Ajoute un écouteur d'événement sur le défilement de la fenêtre
		window.addEventListener("scroll", () => {
			throttle(() => {
				handleScrollAnimation(scrollElements); // Gère l'animation au défilement avec throttling
			}, 250); // Intervalle de throttling de 250ms
		});
	};

	return {
		init: init,
	};
})();

// Initialise l'animation au défilement lorsque le contenu du DOM est chargé
document.addEventListener("DOMContentLoaded", () => {
	animateOnScroll.init();
});
