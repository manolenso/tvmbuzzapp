// TV Mag Buzz Wrapped in IIFE BY Manolenso
(function() {
    'use strict';
    var tvBuzz = angular.module('tvBuzz', []);

    tvBuzz.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
        console.log("Hello World from controller");

        var refresh = function() {
            $http.get('/planninglist').success(function (response) {
                console.log("I got the data I requested");
                $scope.planninglist = response;
                $scope.planning = "";
            });
        };

        refresh();

        $scope.addPlanning = function() {
            console.log($scope.planning);
            $http.post('/planninglist', $scope.planning).success(function(response) {
                console.log(response);
                refresh();
            });
        };

        $scope.remove = function(id) {
            console.log(id);
            $http.delete('/planninglist/' + id).success(function(response) {
                refresh();
            });
        };

        $scope.edit = function(id) {
            console.log(id);
            $http.get('/planninglist/' + id).success(function(response) {
                $scope.planning = response;
                console.log("I Get the DATA for Edition");
            });
        };

        $scope.update = function() {
            console.log($scope.planning._id);
            $http.put('/planninglist/' + $scope.planning._id, $scope.planning).success(function(response) {
                refresh();
            })
        };

        $scope.deselect = function() {
            $scope.planning = "";
        }
    }]);
})();

