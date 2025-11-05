const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Proporciona la ruta a tu aplicación Next.js para cargar next.config.js y .env
  dir: "./",
});

// Agrega cualquier configuración personalizada de Jest a continuación
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    // Maneja alias de módulos (ej. @/)
    "^@/(.*)$": "<rootDir>/src/$1",
    // Maneja archivos CSS
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  testEnvironment: "jest-environment-jsdom",
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!src/**/*.stories.{js,jsx}",
    "!src/**/index.js",
  ],
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
};

// createJestConfig es exportado esta manera para asegurar que next/jest pueda cargar la configuración de Next.js
module.exports = createJestConfig(customJestConfig);
