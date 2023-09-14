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
      scope: true,
      //   if scope is set true, the directive will inherit the scope of the parent element
      template: '<input type="text" ng-model="myName"/>',
      link: function(scope){
        // override myControl.myObj
        scope.myObj = {}

        
        scope.myName.title = 'hello'
      }
    };
  });