import faker from 'faker';

function generateAbout() {
	return {
		id: faker.random.uuid,
		title: faker.lorem.sentence(),
		content: faker.lorem.paragraphs(23)
	};
}

export function getAboutMock(count: number) {
	return Array(count).fill({}).map(generateAbout);
}
