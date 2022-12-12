const choice = (array) => {
	let randomNum = Math.floor(Math.random() * array.length);
	return array[randomNum];
};

const remove = (array, item) => {
	for (let i = 0; array.length > i; i++) {
		if (array[i] === item) {
			return [ ...array.slice(0, i), ...array.slice(i + 1) ];
		}
	}
};

export { choice, remove };
