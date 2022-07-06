const getRand = (minimum, maximum) => {
	let min = Math.ceil(minimum);
	let max = Math.floor(maximum);

	return Math.floor(Math.random() * (max - min + 1) + min);
}

const getGender = () => {
	let x = getRand(1, 364);

	if (x === 364) {return 'other';}
	else if (x >= 183 && x <= 363) {return 'man';}
	else {return 'woman';}
}

const getFirstName = (gender) => {
	const listMan = ['Michael', 'Christopher', 'Matthew', 'Joshua', 'David', 'James', 'Daniel', 'Robert', 'John', 'Joseph', 'Jason', 'Justin', 'Andrew', 'Ryan', 'William', 'Brian', 'Brandon', 'Jonathan', 'Nicholas', 'Anthony', 'Eric', 'Adam', 'Kevin', 'Thomas', 'Steven', 'Timothy', 'Richard', 'Jeremy', 'Jeffrey', 'Kyle', 'Benjamin', 'Aaron', 'Charles', 'Mark', 'Jacob', 'Stephen', 'Patrick', 'Scott', 'Nathan', 'Paul', 'Sean', 'Travis', 'Zachary', 'Dustin', 'Gregory', 'Kenneth', 'Jose', 'Tyler', 'Jesse', 'Alexander', 'Bryan', 'Samuel', 'Derek', 'Bradley', 'Chad', 'Shawn', 'Edward', 'Jared', 'Cody', 'Jordan', 'Peter', 'Corey', 'Keith', 'Marcus', 'Juan', 'Donald', 'Ronald', 'George', 'Phillip', 'Cory', 'Joel', 'Shane', 'Douglas', 'Antonio', 'Raymond', 'Carlos', 'Brett', 'Gary', 'Alex', 'Nathaniel', 'Craig', 'Ian', 'Luis', 'Erik', 'Derrick', 'Casey', 'Philip', 'Frank', 'Evan', 'Gabriel', 'Victor', 'Vincent', 'Austin', 'Brent', 'Larry', 'Seth', 'Wesley', 'Dennis', 'Todd', 'Christian'];
	const listWoman = ['Jessica', 'Jennifer', 'Amanda', 'Ashley', 'Sarah', 'Stephanie', 'Melissa', 'Nicole', 'Elizabeth', 'Heather', 'Tiffany', 'Michelle', 'Amber', 'Megan', 'Amy', 'Rachel', 'Kimberly', 'Christina', 'Lauren', 'Crystal', 'Brittany', 'Rebecca', 'Laura', 'Danielle', 'Emily', 'Samantha', 'Angela', 'Erin', 'Kelly', 'Sara', 'Lisa', 'Katherine', 'Andrea', 'Jamie', 'Mary', 'Erica', 'Courtney', 'Kristen', 'Shannon', 'April', 'Katie', 'Lindsey', 'Kristin', 'Lindsay', 'Christine', 'Alicia', 'Maria', 'Vanessa', 'Kathryn', 'Allison', 'Julie', 'Anna', 'Tara', 'Kayla', 'Natalie', 'Victoria', 'Monica', 'Jacqueline', 'Holly', 'Kristina', 'Patricia', 'Cassandra', 'Brandy', 'Whitney', 'Chelsea', 'Brandi', 'Catherine', 'Cynthia', 'Kathleen', 'Veronica', 'Leslie', 'Natasha', 'Krystal', 'Stacy', 'Diana', 'Erika', 'Dana', 'Jenna', 'Meghan', 'Carrie', 'Leah', 'Melanie', 'Brooke', 'Karen', 'Alexandra', 'Valerie', 'Caitlin', 'Julia', 'Jasmine', 'Alyssa', 'Hannah', 'Stacey', 'Brittney', 'Susan', 'Margaret', 'Sandra', 'Candice', 'Latoya', 'Bethany', 'Misty'];

	let r = getRand(0, 99);

	switch (gender) {
		case 'man':
			return listMan[r];
		case 'woman':
			return listWoman[r];
		case 'other':
			let x = Math.round(Math.random());

			if (x) {
				return listMan[r];
			} else {
				return listWoman[r];
			}
		default:
			return `Please supply the getFirstName(gender) function a value of "man," "woman," or "other."`;
	}
}

const getLastName = () => {
	const surnames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzales', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson', 'Walker', 'Young', 'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores', 'Green', 'Adams', 'Nelson', 'Baker', 'Hall', 'Rivera', 'Campbell', 'Mitchell', 'Carter', 'Roberts', 'Gomez', 'Phillips', 'Evans', 'Turner', 'Diaz', 'Parker', 'Cruz', 'Edwards', 'Collins', 'Reyes', 'Stewart', 'Morris', 'Morales', 'Murphy', 'Cook', 'Rogers', 'Gutierrez', 'Ortiz', 'Morgan', 'Cooper', 'Peterson', 'Bailey', 'Reed', 'Kelly', 'Howard', 'Ramos', 'Kim', 'Cox', 'Ward', 'Richardson', 'Watson', 'Brooks', 'Chavez', 'Wood', 'James', 'Bennet', 'Gray', 'Mendoza', 'Ruiz', 'Hughes', 'Price', 'Alvarez', 'Castillo', 'Sanders', 'Patel', 'Myers', 'Long', 'Ross', 'Foster', 'Jimenez'];

	return surnames[getRand(0, 99)];
}

const getAge = () => {
	return getRand(18, 65);
}

const getFavColor = () => {
	const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'magenta', 'gray'];
	return colors[getRand(0, colors.length - 1)];
}

const getCompanyName = () => {
	const word1 = ['Proper', 'Enormous', 'Shifty', 'Secret', 'Awesome', 'Bold', 'New', 'Another', 'Affluent', 'Poor', 'Ridiculous', 'Slipshod', 'Ugly', 'Handsome', 'Perfunctory', 'Quibbling', 'Flammable', 'Inert', 'Problematic', 'Good', 'Dark', 'Light'];
	const word2 = ['Ventures', 'Holdings', 'Rabbit', 'Alchemy', 'Materials', 'Physics', 'Packages', 'Software', 'Research', 'Technologies', 'Machines', 'Philosophy', 'Theories', 'Exports', 'Travesties', 'Securities', 'Blockchain', 'Management', 'Sciences', 'Appropriations'];
	const word3 = ['Corporation', 'Company', 'Limited', 'Inc.', 'Conglomerate', 'Group', 'Collective', 'Enterprises', 'Syndicate', 'Multinational', 'International'];

	let w1 = word1[getRand(0, word1.length - 1)];
	let w2 = word2[getRand(0, word2.length - 1)];
	let w3 = word3[getRand(0, word3.length - 1)];

	return `${w1} ${w2} ${w3}`;
}

const getJobTitle = () => {
	const dept = ['Sales', 'Marketing', 'Security', 'Software', 'Human Resources', 'Research', 'Public Relations', 'Finance', 'Design', 'QA'];
	const pairs = [
		{pre: 'Chief', post: 'Officer'},
		{pre: 'VP of', post: ''},
		{pre: '', post: 'Director'},
		{pre: '', post: 'Manager'},
		{pre: '', post: 'Intern'},
		{pre: 'Junior', post: 'Engineer'},
		{pre: 'Associate', post: 'Engineer'},
		{pre: 'Senior', post: 'Engineer'},
		{pre: 'Principal', post: 'Engineer'},
		{pre: 'Assistant', post: 'Director'},
		{pre: 'Assistant', post: 'Manager'},
		{pre: 'Senior', post: 'Director'},
		{pre: 'Senior', post: 'Manager'}
	];

	let x = pairs[getRand(0, pairs.length - 1)];
	let y = dept[getRand(0, dept.length - 1)];
	let z = `${x.pre} ${y} ${x.post}`;

	return z.trim();
}

export {getRand, getGender, getFirstName, getLastName, getAge, getFavColor, getCompanyName, getJobTitle};