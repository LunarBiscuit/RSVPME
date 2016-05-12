(function() {
  'use strict';

  angular
    .module('rsvpme')
    .controller('InfoController', InfoCtrl);

  /** @ngInject */
  function InfoCtrl($http, $log, AuthService, UIState) {

    var vm = this;

    init();

    function init()
    {

    }

    // UI States
    vm.showForm = UIState.rsvpForm;

  }

})();
