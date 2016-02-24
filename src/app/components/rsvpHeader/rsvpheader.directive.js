(function() {
  'use strict';

  angular
    .module('rsvpme')
    .directive('rsvpHeader', rsvpHeader);

  /** @ngInject */
  function rsvpHeader() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/rsvpHeader/rsvpHeader.html',
      scope: {
          
      },
      controller: HeaderController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function HeaderController(moment, $location) {
      var vm = this;

      vm.isActive = function (viewLocation) {

        return viewLocation === $location.path();
      };
      
    }
  }

})();
