(function() {
  'use strict';

  angular
      .module('rsvpme')
      .factory('AuthService', Auth);

  /** @ngInject */
  function Auth($q, $timeout) {

      var self = this;

      var service = {
          authorise: authorise,
          auth: false
      };

      return service;


      function setAuth(state)
      {
          service.auth = !!state;
      }

      // Connect to the authoriser which will check the passcode
      function authorise(passcode) {

          console.log('Current Auth state: ' + this.auth);
          console.log('Authorising: ' + passcode);

          var deferred = $q.defer();

          if(!service.auth)
          {
              $timeout(function()
              {
                  // Set the global flag

                  deferred.resolve({ 'auth': 'true', 'error': '0'});
                  setAuth(true);

              }, 1000);
          }
          else
          {
              deferred.resolve({ 'auth': 'true', 'error': '0'});
          }


          return deferred.promise;

          /*return $http.get('/auth/authorise.php?pcode=' + passcode)
              .then(getAuthComplete)
              .catch(getAuthFailed);

          function getAuthComplete(response) {
              return response.data;
          }

          function getAuthFailed(error) {
              $log.error('XHR Failed for authorisation.\n' + angular.toJson(error.data, true));
          }*/
      }

  }

})();
