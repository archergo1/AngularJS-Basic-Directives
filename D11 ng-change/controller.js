console.log("Hello World!");

function Controller($scope) {
  $scope.confirmed = true;
  $scope.counter = 0;
  $scope.change = function () {
    $scope.counter++;
  };
}
