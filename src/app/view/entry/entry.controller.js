(function() {
  'use strict';

  angular
    .module('rsvpme')
    .controller('EntryController', EntryController);

  /** @ngInject */
  function EntryController($http, $log) {
    var vm = this;

    vm.firstname  = '';
    vm.surname = '';
    vm.passcode = '';

    vm.auth = function ()
    {
        // Send the data to the server
        $http({
          url: 'http://localhost:3003/auth',
          method: 'POST',
          data: vm
        }).success(function(data)
          {
              $log.info(data);
          });
    
    };
    
  }
})();
