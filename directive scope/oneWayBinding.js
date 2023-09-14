angular
  .module("myExample", [])
  .controller("myCtrl", [
    "$scope",
    function ($scope) {
      $scope.myName = "luffy";
      $scope.myObj = {
        title: "onepiece",
      };
    },
  ])
  .directive("myDirective", function () {
    return {
      scope: {
        // this is one-way binding
        myName: '@',
        myTitle: '@title'

      },
      // this is an isolated scope
      template:
        "<div>" +
        '名稱：<input type="text" ng-model="myName"/>' +
        '抬頭：<input type="text" ng-model="myObj.title" />' +
        "</div>"
    };
  });
