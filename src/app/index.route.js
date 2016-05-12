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
      .when('/Party', {
        templateUrl: 'app/view/party/party.html',
        controller: 'PartyController',
        controllerAs: 'vm'
      })
      .when('/RSVP', {
          templateUrl: 'app/view/RSVP/RSVP.html',
          controller: 'RSVPController',
          controllerAs: 'vm'
        })
      .when('/Info', {
          templateUrl: 'app/view/info/info.html',
          controller: 'InfoController',
          controllerAs: 'vm'
        })
      .when('/Admin', {
        templateUrl: 'app/view/admin/Admin.html',
        controller: 'AdminController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
