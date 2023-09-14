var app = angular.module("app", []);
// The [] parameter in the module definition can be used to define dependent modules.
// Without the [] parameter, you are not creating a new module, but retrieving an existing one.

// ng-controller is more like the mix of directive and template
app.controller("myCtrl", function ($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
})


app.directive("archersDirective", function () {
  return {
    template: "Archer in the house",
  };
});
