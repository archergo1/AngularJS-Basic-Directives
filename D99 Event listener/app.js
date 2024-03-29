"use strict";

var app = angular.module("app", []);

app.controller("MainController", function ($scope, $rootScope) {
  $scope.mainData = {
    logs: "",
  };

  $scope.$on("eventEmitedName", function (event, data) {
    $scope.mainData.logs =
      $scope.mainData.logs +
      '\nMainController - receive EVENT "' +
      event.name +
      '" with message = "' +
      data.message +
      '"';
  });

  $rootScope.$on("eventEmitedName", function (event, data) {
    $scope.mainData.logs =
      $scope.mainData.logs +
      '\n$rootScope - receive EVENT "' +
      event.name +
      '" with message = "' +
      data.message +
      '"';
  });
});

app.controller("ParentController", function ($scope) {
  $scope.parentData = {
    message: "messageAAA",
  };

  $scope.broadcastEvent = function () {
    $scope.$broadcast("eventBroadcastedName", $scope.parentData);
    console.log($scope.$broadcast);
    console.dir($scope.$broadcast);
  };

  $scope.$on("eventEmitedName", function (event, data) {
    $scope.mainData.logs =
      $scope.mainData.logs +
      '\nParentController - receive EVENT "' +
      event.name +
      '" with message = "' +
      data.message +
      '"';
  });
});

app.controller("ChildController", function ($scope) {
  $scope.childData = {
    message: "messageBBB",
    // this is a default string
  };

  $scope.emitEvent = function () {
    $scope.$emit("eventEmitedName", $scope.childData);
    console.dir($scope)
    console.log($scope.$emit);
    console.dir($scope.$emit);
  };

  $scope.$on("eventBroadcastedName", function (event, data) {
    $scope.mainData.logs =
      $scope.mainData.logs +
      '\nChildController - receive EVENT "' +
      event.name +
      '" with message = "' +
      data.message +
      '"';
  });
});
