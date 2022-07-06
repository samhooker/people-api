import {getGender, getFirstName, getLastName, getAge, getFavColor, getCompanyName, getJobTitle} from './helpers.js';

const genOne = () => {
	let person = {
		firstName: '',
		lastName: getLastName(),
		gender: getGender(),
		age: getAge(),
		favColor: getFavColor(),
		companyName: getCompanyName(),
		jobTitle: getJobTitle()
	};

	person.firstName = getFirstName(person.gender);

	return person;
};

export default genOne;