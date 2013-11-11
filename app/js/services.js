'use strict';

/* OpenZen Data Services Module */

var openZenDataServices = angular.module('openZenDataServices', [
    'ngResource',
    'openZenConfigService'
]);

openZenDataServices.factory('Story', ['$resource', 'API_URI', 'API_KEY', 'AZ_PROJECT_ID',
    function($resource, API_URI, API_KEY, AZ_PROJECT_ID) {
        var Story = $resource(
            API_URI + '/projects/'
                + AZ_PROJECT_ID
                + '/stories/:storyNum?apikey='
                + API_KEY
                + '&pageSize=1000&where=not(phase:"live" or phase:"backlog")',
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
