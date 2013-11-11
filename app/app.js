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
    'openZenConfigService',
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
    }
]);

/* Controllers */
openZenApp.controller('FrontPageController', ['$scope', '$location', 'Story', 'AZ_URI', 'AZ_PROJECT_ID',
    function($scope, $location, Story, AZ_URI, AZ_PROJECT_ID) {
        $scope.isLoading = true;
        $scope.stories = Story.get(
            {page:'1'},
            function () {
                $scope.isLoading = false;
            }
        );

        /* Currently not used */
        $scope.phaseCheck = function(item) {
            // If there is no filter or filter is all, don't bother filtering
            if ($scope.phaseFilter == 'All'
                || $scope.phaseFilter == undefined) {
                return true;
            }
            return item.phase.name == $scope.phaseFilter;
        };

        $scope.getStoryLink = function(item) {
            return AZ_URI
            + '/project/'
            + AZ_PROJECT_ID
            + '/story/'
            + item.id;
        }
    }
]);
