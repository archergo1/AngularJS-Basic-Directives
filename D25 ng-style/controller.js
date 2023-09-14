function Controller($scope) {
  $scope.set_yellow = function () {
    return { color: "yellow" };
    // put an object containing the css style you set  
  };

  console.log(typeof $scope)
}
