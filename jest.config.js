export default {
	testEnvironment: 'node',
	testMatch: ['**/tests/**/*.test.js'],
	transform: {
		'^.+\\.js$': 'babel-jest',
	},
};
