(function() {
  'use strict';

  angular
    .module('rsvpme')
    .controller('ContactController', ContactCtrl);

  /** @ngInject */
  function ContactCtrl($http, AuthService) {

    var vm = this;
    vm.firstname  = '';
    vm.surname = '';
    vm.passcode = '';
    vm.msg = '';

    vm.submit = function ()
    {

      console.log('Submitting...');

      // Submit - Auth then send to firebase?
      AuthService.authorise("TEST000").then(function(response)
      {

        // Email Ben and Alice


      }, function(err)
      {
          alert('Authentication Failed: Passcode is incorrect.');
      });
    }

  }
})();
