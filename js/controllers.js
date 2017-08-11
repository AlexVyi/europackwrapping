var app = angular.module('epk',[]);
app.controller('langController', ['$scope', '$http', function($scope, $http) {
    $scope.loadLanguage = function() {
        $http.get("lang/rom.json").then(function(response) {
            $scope.nav = response.data.btn;
            $scope.nav1 = response.data.btn1;
            $scope.nav2 = response.data.btn2;
            $scope.nav3 = response.data.btn3;
            $scope.nav4 = response.data.btn4;
        });
    }
    $scope.loadLanguageEngl = function() {
        $http.get("lang/engl.json").then(function(response) {
            $scope.nav = response.data.btn;
            $scope.nav1 = response.data.btn1;
            $scope.nav2 = response.data.btn2;
            $scope.nav3 = response.data.btn3;
            $scope.nav4 = response.data.btn4;
        });
    }

}]);