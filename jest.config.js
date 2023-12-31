const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  clearMocks: true,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),
  preset: 'ts-jest',
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testEnvironment: 'node',
  clearMocks: true,
  "collectCoverageFrom": [
    "src/**/*.ts",
    "!src/**/*.spec.ts"
  ],
  "coverageReporters": ["json", "html"],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/', '<rootDir>/src/example/test/'],
  testMatch: ["**/src/**/*.spec.ts", "**/*.steps.ts",],
};
