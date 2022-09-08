module.export = {
  roots: ["src"],
  transform: {
    "\\.(js|jsx)?$": "babel-jest",
  },
  testMatch: ["src/**/>(*.)test.{js, jsx}"], // finds test
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["/node_modules/", "/public/"],
  setupFilesAfterEnv: [
    "./jest.setup.js"
  ], // setupFiles before the tests are ran
  testEnvironment: "jsdom"
};
