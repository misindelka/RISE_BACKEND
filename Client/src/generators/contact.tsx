import faker from 'faker';

function generateContact() {
	return {
		id: faker.random.uuid(),
		title: faker.company.companyName(),
		streetName: faker.address.streetName(),
		city: faker.address.city(),
		country: faker.address.country(),
		phone: faker.phone.phoneNumber(),
		email: faker.internet.email()
	};
}

export function getContactMock(count: number) {
	return Array(count).fill({}).map(generateContact);
}
