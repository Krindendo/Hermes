module.exports = {
  ...require("./jest-common"),
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  collectCoverageFrom: ["**/src/**/*.{js,ts,jsx,tsx}"],
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  transform: {
    "^.+\\.tsx?$": "esbuild-jest",
    "^.+\\.jsx?$": "esbuild-jest",
  },
  roots: ["<rootDir>/src"],
  moduleNameMapper: {
    "@/src/(.*)": "<rootDir>/src/$1",
    "@/contexts/(.*)": "<rootDir>/src/contexts/$1",
    "@/modules/(.*)": "<rootDir>/src/modules/$1",
    "@/pages/(.*)": "<rootDir>/src/pages/$1",
    "@/components/(.*)": "<rootDir>/src/components/$1",
    "@/hooks/(.*)": "<rootDir>/src/hooks/$1",
    "@/styles/(.*)": "<rootDir>/src/hooks/styles/$1",
    "@/ui/(.*)": "<rootDir>/src/ui/$1",
  },
  coveragePathIgnorePatterns: [],
  coverageThreshold: null,
};
