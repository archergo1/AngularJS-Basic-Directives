angular.module("myApp", []);

angular.module("myApp").controller("submitCtrl", function ($scope, $log) {
  $scope.designer = { name: "Mike" };
  $scope.save = function () {
    $log.log($scope.designer.email);
    $log.log($scope.designer.name);
  };
});
