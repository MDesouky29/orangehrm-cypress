import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  retries: { 
      runMode: 3,  // retry failed tests 3 times in "cypress run"
      openMode: 3  // retry failed tests 3 times in "cypress open"
    }
});
