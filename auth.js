var app = angular.module("ngBoilerplate.auth", ['ui.bootstrap']);
app.controller('authCtrl', function authCtrl($scope, $state) {
    $scope.authObj = {user:"rana",pass:"admin@123"};    
    $scope.loginFlag = false;
    $scope.getHandler = function() {
        alert("event fired");
    };
});
