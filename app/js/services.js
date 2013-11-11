'use strict';

/* OpenZen Data Services Module */

var openZenDataServices = angular.module('openZenDataServices', [
    'ngResource',
    'openZenConfigService'
]);

openZenDataServices.factory('Story', ['$resource', 'API_KEY', 'AZ_PROJECT_ID',
    function($resource, API_KEY, AZ_PROJECT_ID) {
        var Story = $resource(
            'https://agilezen.com/api/v1/projects/' + AZ_PROJECT_ID + '/stories/:storyNum?apikey=' + API_KEY,
            {},
            {
                query: {
                    method: 'GET',
                    params: { page:'stories' },
                    isArray: false
                }
            }
        );
        return Story;
    }
]);
