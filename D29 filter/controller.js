var app = angular.module("app", []);

app.controller("myCtrl", function ($scope) {
  $scope.money = 1000;

  $scope.birth = "1991-12-08";

  $scope.obj = {
    name: "TOM",
    age: 18,
    hobbies: ["walking", "sleeping"],
  };

  $scope.letters = "ptpttptptt";
  $scope.letterLimit = 3;

  $scope.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  $scope.num = 1234.5678;

  $scope.lower = "Anna";
  $scope.upper = "Jane";

  $scope.numLimit = 3;
});

// AngularJS provides filters to transform data:
// currency Format a number to a currency format.
// date Format a date to a specified format.
// filter Select a subset of items from an array.
// json Format an object to a JSON string.
// limitTo Limits an array/string, into a specified number of elements/characters.
// lowercase Format a string to lower case.
// number Format a number to a string.
// orderBy Orders an array by an expression.
// uppercase Format a string to upper case.