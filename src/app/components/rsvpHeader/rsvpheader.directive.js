(function() {
  'use strict';

  angular
    .module('rsvpme')
    .directive('rsvpHeader', rsvpHeader);

  /** @ngInject */
  function rsvpHeader() {
    var directive = {
      restrict: 'E',
      templateUrl: '/app/components/rsvpHeader/rsvpHeader.html',
      /*template: '<nav class="navbar navbar-static-top navbar-inverse">'+
        '<div class="container-fluid">' +
          '<div class="navbar-header">'+
            '<a class="navbar-brand" href="#/">'+
              '<i class="fa fa-thumbs-o-up"></i> Mr and Mrs Kemp'+
            '</a>'+
          '</div>'+

          '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6">'+
            '<ul class="nav navbar-nav">'+
              '<li ng-class="{ active: vm.isActive('/RSVP')}"><a ng-href="#/RSVP">RSVP</a></li>'+
              '<li ng-class="{ active: vm.isActive('/Info')}"><a ng-href="#/Info">Info</a></li>'+
              '<li ng-class="{ active: vm.isActive('/Party')}"><a ng-href="#/Party">Wedding Party</a></li>'+
              '<li ng-class="{ active: vm.isActive('/Contact')}"><a ng-href="#/Contact">Contact</a></li>'+
            '</ul>'+
          '</div>'+
        '</div>'+

      '</nav>'*/
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
