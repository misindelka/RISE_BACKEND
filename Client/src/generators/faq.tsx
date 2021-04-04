import faker from 'faker';

function generateFaqs() {
	return {
		id: faker.random.uuid(),
		question: faker.lorem.sentences(),
		answer: faker.lorem.sentences()
	};
}

export function getFaqsDataMock(count: number) {
	return Array(count).fill({}).map(generateFaqs);
}

function generateFaqTitle() {
	return {
		id: faker.random.uuid(),
		title: faker.lorem.sentence()
	};
}

export function getFaqsTitleMock(count: number) {
	return Array(count).fill({}).map(generateFaqTitle);
}
