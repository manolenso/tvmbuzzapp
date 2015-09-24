/**
 * Created by Remy on 22/09/2015.
 */
var app = angular.module('tvBuzz', []);

app.controller('AppCtrl', function($scope, $http) {
    console.log("Hello World from controller");

    $http.get('/planning').success(function (response) {
        console.log("I got the data I requested");
        $scope.planning = response;
    });
    $scope.addPlanning = function() {
        console.log($scope.planning);
    }
});
refresh();
