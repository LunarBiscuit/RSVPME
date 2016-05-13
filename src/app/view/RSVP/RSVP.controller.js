(function() {
  'use strict';

  angular
    .module('rsvpme')
    .controller('RSVPController', RSVPCtrl);

  /** @ngInject */
  function RSVPCtrl($http, $log, AuthService, UIState, $firebaseArray) {

    var vm = this;

    init();

    function init()
    {
      vm.firstname  = '';
      vm.surname = '';
      vm.passcode = '';
      vm.vegitarian = '';
      vm.dietaryReq = '';

      vm.errMsg = '';
    }


    // UI States
    vm.showForm = UIState.rsvpForm;


    // private
    var ref = new Firebase('https://rsvp-me.firebaseIO.com/RSVP');


    function validate()
    {
      var valid = true;
      var validateTargets = ['firstname', 'surname', 'passcode'];

      angular.forEach(validateTargets, function(target, key)
      {
          if(!vm[target])
          {
            valid = false;
          }
      });

      vm.errMsg = (valid) ? '' : 'Something was wrong with your submission. Please check your name and passcode.';

      return valid;
    }


    vm.resetForm = function()
    {
      vm.showForm = UIState.rsvpForm = true;

      init();

    };

    vm.submitRSVP = function ()
    {

      if(!validate())
      {
        return false;
      }

      console.log('Submitting...');

      // Submit - Auth then send to firebase?
      AuthService.authorise("TEST000").then(function(response)
      {
        console.log('Starting Firebase engine...');

        var rsvps = $firebaseArray(ref);

        rsvps.$add({
          firstname: vm.firstname || null,
          surname: vm.surname || null,
          vegitarian: vm.vegitarian || null,
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
