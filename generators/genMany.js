import genOne from './genOne.js';

const genMany = (n) => {
	let result = [];

	while (n) {
		result.push(genOne());
		--n;
	}

	return result;
}

export default genMany;