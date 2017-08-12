var app = angular.module('epk',[]);
app.controller('langController', ['$scope', '$http', function($scope, $http) {
    $scope.loadLanguage = function() {
        $http.get("lang/rom.json").then(function(response) {
            $scope.text = response.data

        });
    }
    $scope.loadLanguageEngl = function() {
        $http.get("lang/engl.json").then(function(response) {
            $scope.text = response.data

        });
    }
    $scope.loadLanguageDE = function() {
        $http.get("lang/de.json").then(function(response) {
            $scope.text = response.data
        });
    }
    $scope.init =  function () {
        var html = document.documentElement;
        if(html){
            $scope.loadLanguage();
        }
    }
}]);