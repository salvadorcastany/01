const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'agrcaq',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
