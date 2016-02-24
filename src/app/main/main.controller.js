(function() {
  'use strict';

  angular
    .module('rsvpme')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout) {
    var vm = this;
    vm.classAnimation  = '';
    vm.augText = '';

    activate();

    function activate() 
    {

      $timeout(function() {
        vm.classAnimation = 'rubberBand';
        vm.augText = 'jello';
      }, 4000);
    }


    /*function getWebDevTec() {
      vm.awesomeThings = AuthService.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }*/
  }
})();
