var app = angular.module('app', []);

app.constant('SETTINGS', {
    'views_url': '/views'
});

app.controller('MainCtrl', function ($scope, SETTINGS) {

    $scope.colors = [
        {name: 'green'},
        {name:'blue'},
        {name: 'red'}
    ];

    $scope.farve = 'green';
});

app.filter('reverse', function() {
    return function(items) {
        return items.slice().reverse();
    };
});

app.config(function ($routeProvider, $locationProvider, SETTINGS) {
    // Uncomment to simulate non-html5 browser:
    /*$provide.decorator('$sniffer', function($delegate) {
     $delegate.history = false;
     return $delegate;
     });
     */

    $locationProvider
        .html5Mode(true);

    $routeProvider
        .when('/', {
            templateUrl: SETTINGS.views_url + "/frontpage.html",
            controller: 'MainCtrl'
        })
        .otherwise({ redirectTo: '/' });
});
