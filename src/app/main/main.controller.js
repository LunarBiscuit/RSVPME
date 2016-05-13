(function() {
  'use strict';

  angular
    .module('rsvpme')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $location, $scope, $log) {
    var vm = this;
    vm.classAnimation  = '';
    vm.augText = '';

    $scope.submitRSVP = function()
    {
        $log.info('Sending RSVP');
        $location.path('/RSVP');

    };


    /*function getWebDevTec() {
      vm.awesomeThings = AuthService.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }*/
  }
})();
