import '@testing-library/jest-dom'

module.exports = {
    testEnvironment: "jsdom",
    testEnvironmentOptions: {},
    collectCoverage: true,
    coverageDirectory: "coverage",
    collectCoverageFrom: ['src/**/*.{js,jsx}'],

    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        "^react-router-dom$": "<rootDir>/node_modules/react-router-dom",
    },
};

//   module.exports = {
//     // testEnvironment: 'jsdom',
//     testEnvironmentOptions: {},
//     moduleNameMapper: {
//       '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
//     },
//     setupFilesAfterEnv: ['<rootDir>/src/jest.setup.js'],
//   };