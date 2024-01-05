document.addEventListener("DOMContentLoaded", function () {
	let ranges = document.querySelectorAll(".range-slider");

	if (ranges) {
		ranges.forEach((range) => {
			let range1 = range.querySelector(".range--min");
			let range2 = range.querySelector(".range--max");
			let value1 = range.querySelector(".range-value--max");
			let value2 = range.querySelector(".range-value--min");
			let rangeBar = range.querySelector(".range-bar");

			let ctnH = rangeBar.offsetHeight + value1.offsetHeight;
			range.style.height = `${ctnH}px`;

			// Mise à jour des valeurs affichées et positions
			function updateValues() {
				let val1 = parseInt(range1.value);
				let val2 = parseInt(range2.value);

				// Vérifier et ajuster les valeurs si nécessaire
				if (val1 >= val2) {
					range1.value = val2 - 1;
					val1 = parseInt(range1.value);
				}

				if (val2 <= val1) {
					range2.value = val1 + 1;
					val2 = parseInt(range2.value);
				}

				value1.textContent = val1;
				let thumbPosition1 = ((val1 - range1.min) / (range1.max - range1.min)) * 100;
				value1.style.setProperty("--_x", `calc(${thumbPosition1}% - 10px)`);

				value2.textContent = val2;
				let thumbPosition2 = ((val2 - range2.min) / (range2.max - range2.min)) * 100;
				value2.style.setProperty("--_x", `calc(${thumbPosition2}% - 20px)`);

				// Calculer la différence entre les deux valeurs et ajuster la largeur de la barre
				let rangeDiff = Math.abs(range1.value - range2.value);
				rangeBar.style.width = `calc(${rangeDiff}% - 4px)`;
				rangeBar.style.left = `calc(${thumbPosition1}% + 4px)`;
			}

			// Gestionnaire d'événement pour les changements de valeurs
			range1.addEventListener("input", function () {
				updateValues();
			});

			range2.addEventListener("input", function () {
				updateValues();
			});

			// Initialiser les valeurs
			updateValues();
		});
	}
});
