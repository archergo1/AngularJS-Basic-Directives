function formCtrl($scope) {
  $scope.keys = [];
  $scope.keys.push({ name: "Tom", age: 20 });
  $scope.addKey = function () {
    $scope.keys.push({ name: "", age: null });
  };
  $scope.submit = function () {
    console.log($scope.keys);
  };
}
