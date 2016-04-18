/**
 * Created by gparker on 24/02/16.
 */

(function() {
    'use strict';

    angular
        .module('rsvpme')
        .factory('UIState', UIStateFactory);

    /** @ngInject */
    function UIStateFactory() {

        var factory = {
            rsvpForm : true
        };

        return factory;
    }

})();
