angular
  .module("myExample", [])
  .controller("myCtrl", [
    "$scope",
    function ($scope) {
      // 跟 directive 的 myName 是同一個
      $scope.myName = "luffy";
      console.log($scope.myName);
    },
  ])
  .directive("myDirective", function () {
    return {
      scope: false,
      //   if scope is set false, You are manipulating the the same scope of controller it belongs to.
      // and all directives share the same values
      
      
      template: '<input type="text" ng-model="myName"/>',
    };
  });



  