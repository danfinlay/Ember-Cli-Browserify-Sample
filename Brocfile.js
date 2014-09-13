/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('vendor/browserify/bundle.js', {
  exports:{
    "npm.rsvp": [
      "default"
    ]
  }
});

module.exports = app.toTree();
