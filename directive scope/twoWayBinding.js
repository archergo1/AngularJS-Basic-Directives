angular
  .module("myExample", [])
  .controller("myCtrl", [
    "$scope",
    function ($scope) {
      $scope.myName = "luffy";
      $scope.myObj = {
        title: "RICH MAN",
      };
    },
  ])
  .directive("myDirective", function () {
    return {
      scope: {
        // this is two-way binding
        // when the attribute values of the directive are changed, the ones of the parent scope will be updated as well.
        myName: "=",
        myTitle: "=?title",

        // 這裡有點難，要問一下BENNO
      },
      // this is an isolated scope
      template:
        "<div>" +
        '名稱：<input type="text" ng-model="myName"/>' +
        "<br>" +
        '抬頭：<input type="text" ng-model="myTitle" />' +
        "</div>",
    };
  });
