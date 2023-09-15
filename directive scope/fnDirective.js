// angular
//   .module("myExample", [])
//   .controller("myCtrl", function ($scope) {
//     $scope.myStyle = {
//       "background-color": "rgb(120, 120, 120)",
//     };
//     $scope.name = "Love";
//     $scope.updateStyle = function (name, red, green, blue) {
//       console.log("name", name);
//     };
//     $scope.myStyle["background-color"] =
//       "rgb(" + red + "," + green + "," + blue + ")";
//   })
//   .directive("colorPicker", function () {
//     return {
//       restrict: "A",
//       scope: {
//         action: "&colorPicker",
//       },
//       template:
//         '<input type="number" ng-model="red" min="0" max="255" ng-change="updateColor()">' +
//         '<input type="number" ng-model="green" min="0" max="255" ng-change="updateColor()">' +
//         '<input type="number" ng-model="blue" min="0" max="255" ng-change="updateColor()">',
//       link: function (scope, element, attrs) {
//         scope.red = 120;
//         scope.green = 120;
//         scope.blue = 120;
//         var update = $parse(attrs.colorPicker);
//         scope.updateColor = function () {

//             update(scope.$parent, {'blue': scope.blue, 'red' : scope.red, 'green': scope.green});
//         };
//       },
//     };
//   });

angular
  .module("myExample", [])
  .controller("myCtrl", [
    "$scope",
    function ($scope) {
      $scope.myStyle = { "background-color": "rgb(120,120,120)" };
      $scope.name = "luffy";

      $scope.updateStyle = function (name, red, green, blue) {
        // output 'luffy' 可以同時定義
        console.log("name", name);
        $scope.myStyle["background-color"] =
          "rgb(" + red + "," + green + "," + blue + ")";
      };
    },
  ])
  .directive("colorPicker", function ($parse) {
    return {
      restrict: "A",
      scope: {},
      template:
        '<input type="number" ng-model="red" min="0" max="255" ng-change="updateColor()">' +
        '<input type="number" ng-model="green" min="0" max="255" ng-change="updateColor()">' +
        '<input type="number" ng-model="blue" min="0" max="255" ng-change="updateColor()">',
      link: function (scope, element, attrs) {
        scope.red = 120;
        scope.green = 120;
        scope.blue = 120;

        var update = $parse(attrs.colorPicker);
        scope.updateColor = function () {
          // 因為是 isolated scope, 需要 call scope.$parent
          update(scope.$parent, {
            blue: scope.blue,
            red: scope.red,
            green: scope.green,
          });
        };
      },
    };
  });
