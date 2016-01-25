(function() {
  'use strict';

  angular
    .module('rsvpme')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
