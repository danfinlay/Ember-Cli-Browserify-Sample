import Ember from 'ember'; import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import rsvp from 'npm:rsvp';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'emberify', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'emberify');

export default App;
