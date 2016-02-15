(function() {
  'use strict';

  angular
    .module('rsvpme')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/RSVP', {
        templateUrl: 'app/view/entry/entry.html',
        controller: 'EntryController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
