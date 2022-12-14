/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe("Navigation", () => {
  it("should navigate to the test page", () => {
    cy.visit("http://localhost:3000/");

    cy.get('a[href*="test"]').click();

    cy.url().should("include", "/test");

    cy.get("h1").contains("Test Page");
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
