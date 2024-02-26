/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  moduleNameMapper: {'^.+\\.(css|less)$': '<rootDir>/src/__mocks__/mockCss.ts'},
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ["<rootDir>/src/setUpTests.ts"],
  testEnvironment: "jsdom"
};