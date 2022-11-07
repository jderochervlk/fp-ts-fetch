export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  collectCoverageFrom: [
    "./src/**/*",
    "!./src/mocks/*"
  ],
  testEnvironment: 'jsdom',
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
  setupFilesAfterEnv: ['./jest.setup.ts']
};
