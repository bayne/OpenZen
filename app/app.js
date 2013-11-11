'use strict';

/**
 * OpenZen 
 *
 * @author suw <suw@suwdo.com>
 */

/* App Module*/

var openZenApp = angular.module('openZenApp', [
    'ngRoute',
    'ngResource',
    'openZenDataServices',
]);

openZenApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.
            when('/', {
                controller: 'FrontPageController',
                templateUrl: 'templates/index.tpl.html'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);

openZenApp.controller('FrontPageController', ['$scope', '$location', 'Story',
    function($scope, $location, Story) {
        $scope.stories = Story.get({page:'1'});
    }
]);
