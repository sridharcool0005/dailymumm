'use strict';

(function () {
    var app = angular.module('dailyMummApp',
           ['ngCookies',
            'ngResource',
            'ngSanitize',
            'ui.router',
            'angular-rating',
            'pascalprecht.translate']);

    // app.value("apiServer", "https://dailymumm.herokuapp.com");
    // app.value("apiServer", "http://localhost");

    app.value("apiServer", location.origin);

    app.run(function ($rootScope, $state) { // just to hide the top bar in home public layout
        $rootScope.$on('$stateChangeSuccess',
            function (event, toState, toParams, fromState, fromParams) {
                if (toState.name == 'home' || toState.name == 'login' || toState.name == '404') {
                    $rootScope.hideit = true;
                } else {
                    $rootScope.hideit = false;
                }
            });
    });
})();