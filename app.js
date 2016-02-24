angular.module('ngBoilerplate', [
    'templates-app',
    'templates-common',
    'ngBoilerplate.header',
    'ngBoilerplate.body',
    'ngBoilerplate.footer',
    'ngBoilerplate.auth',
    'ngBoilerplate.signUp',
    'ngBoilerplate.loginForm',
    'ui.router'
])

.config(function myAppConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app', {
        url: '/app',
        templateUrl: 'mainView.tpl.html'
    }).state('app.login', {
        url: '/login',
        controller: 'authCtrl',
        templateUrl: 'auth/auth.tpl.html'
    }).state('app.signup', {
        url: '/signup',
        controller: 'signUpCtrl',
        templateUrl: 'signUp/signUp.tpl.html'
    });
    $urlRouterProvider.otherwise('/app');

})

.run(function run() {})

.controller('AppCtrl', function AppCtrl($scope, $location) {
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        if (angular.isDefined(toState.data.pageTitle)) {
            $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate';
        }
    });
});
