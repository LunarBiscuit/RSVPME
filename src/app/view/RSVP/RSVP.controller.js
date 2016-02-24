(function() {
  'use strict';

  angular
    .module('rsvpme')
    .controller('RSVPController', RSVPCtrl);

  /** @ngInject */
  function RSVPCtrl($http, $log, AuthService, UIState, $firebaseArray) {

    var vm = this;
    vm.firstname  = '';
    vm.surname = '';
    vm.passcode = '';

    // UI States
    vm.showForm = UIState.rsvpForm;


    // private
    var ref = new Firebase('https://rsvp-me.firebaseIO.com/RSVP');

    vm.submitRSVP = function ()
    {

      console.log('Submitting...');

      // Submit - Auth then send to firebase?
      AuthService.authorise("TEST000").then(function(response)
      {
        console.log('Starting Firebase engine...');

        var rsvps = $firebaseArray(ref);

        rsvps.$add({
          firstname: vm.firstname || null,
          surname: vm.surname || null,
          dietaryReq: vm.dietaryReq || null
        }).then(function(ref) {

          console.log('Saved successfully: ', ref.key());

          // Hide the form with links for more information? Wedding Party and Info is available when authenticated
          vm.showForm = UIState.rsvpForm = false;

        }, function(error) {
          console.log("Error:", error);
        });

      }, function(err)
      {
          alert('Authentication Failed: Passcode is incorrect.');
      });
    }

  }
})();