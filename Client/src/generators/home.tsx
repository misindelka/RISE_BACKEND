import faker from 'faker';

function generateHomeData() {
	return {
		id: faker.random.uuid,
		title: faker.lorem.sentence(),
		content: faker.lorem.paragraphs()
	};
}

export function getHomeDataMock(count: number) {
	return Array(count).fill({}).map(generateHomeData);
}
