var mainApp = angular.module("ngBoilerplate.loginForm", []);
mainApp.directive('loginForm', function() {
   return {
    restrict: 'EAC',
    scope: {
     flag:'@isStatus',
     ngModel: "=",
     toggleFlag:'= data',
     'getAuthnicationHandler': '&onClick',
     'getSignUpHandler': '&onClick'
    },
     link: function(scope, element, attrs) {
      console.log(scope.flag +""+scope.toggleFlag);

    },
    templateUrl: 'templates/login-form.tpl.html'
  };
 // directive.compile = function(element, attributes) {
 //      element.css("border", "1px solid #cccccc");
      
 //      //linkFunction is linked with each element with scope to get the element specific data.
 //      var linkFunction = function($scope, element, attributes) {
 //         element.html("Student: <b>"+$scope.student.name +"</b> , Roll No: <b>"+$scope.student.rollno+"</b><br/>");
 //         element.css("background-color", "#ff00ff");
 //      }
 //      return linkFunction;
 //   }
});