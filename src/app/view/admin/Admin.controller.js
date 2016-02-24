(function() {
  'use strict';

  angular
    .module('rsvpme')
    .controller('AdminController', AdminCtrl);

  /** @ngInject */
  function AdminCtrl($http, $log, AuthService, $firebaseArray) {

    var vm = this;
    vm.submitted = [];
    vm.isAdmin = false;

    vm.authd = AuthService.auth;

    // private
    var ref = new Firebase('https://rsvp-me.firebaseIO.com/RSVP');

    vm.viewData = function ()
    {

      console.log('Submitting...');

      // Submit - Auth then send to firebase?
      AuthService.authorise("TEST000").then(function(response)
      {
        vm.isAdmin = true;

        vm.authd = true;

        console.log('Starting Firebase engine...');

        vm.submitted = $firebaseArray(ref);


      }, function(err)
      {
          alert('Authentication Failed: Passcode is incorrect.');
      });
    }

  }
})();
