const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  chromeWebSecurity: false,
  blockHosts: [
    //'*.googlesyndication.com',
    //'*.g.doubleclick.net',
  ],
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://demo.applitools.com',
  },
});


require('@applitools/eyes-cypress')(module);
