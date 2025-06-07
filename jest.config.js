module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/scripts/**/*.test.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};