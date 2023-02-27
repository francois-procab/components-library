const getRandomColor = () => {
	const h = Math.floor(Math.random() * 360);
	return `hsl(${h}deg, 90%, 85%)`;
};

export { getRandomColor };
