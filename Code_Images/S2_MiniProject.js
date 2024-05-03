var app = angular.module('myApp', ['ngRoute']);


app.config(function ($routeProvider) {
    $routeProvider
        .when('/main',
            {
                templateUrl: 'Cancer_main.html'
            })
        .when('/about',
            {
                templateUrl: 'Cancer_about.html'
            })
            .when('/types',
            {
                templateUrl: 'Cancer_types.html'
            })
            .when('/deathrate',
            {
                templateUrl: 'Cancer_death.html'
            })
            .when('/indiadata',
            {
                templateUrl: 'Cancer_india.html'
            })
        .otherwise({ redirectTo: '/' });
});

