var $ = require('jquery');
var _ = require('lodash');
var angular = require('angular');
var ngRoute = require('angular-route');

var app = angular.module("myApp", [ngRoute]);
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/about", {
        templateUrl : "views/about.html"
    })

    .when('/', {
    	templateUrl : 'views/home.html',
    })

    $locationProvider.html5Mode(true);
});