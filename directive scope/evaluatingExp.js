angular
  .module("myExample", [])
  .controller("myCtrl", [
    "$scope",
    function ($scope) {
      $scope.myName = "luffy";
      $scope.myObj = {
        title: "VERY GOOD",
        price: 100,
      };
      $scope.updateName = function () {
        $scope.myName = "Mr." + $scope.myObj.price;
      };

      $scope.updatePrice = function (params) {
        $scope.myObj.price += 10;
      };

      $scope.addObjectKey = function (value) {
        if (value) {
          $scope.myObj[value] = "";
        }
      };
    },
  ])
  .directive("myDirective", function () {
    return {
      scope: {
        // if nothing follows "&"", it means that the attribute and the parent function have the same name
        // the code below is to bind the attribute directives to the parent function attributes
        // the format is "function name : & attribute name"
        updateName: "&",
        updatePrice: "&",
        addObjectKey: "&addObj",
     
      },

      // 注意： addObjectKey pass 的參數名稱必須要跟 HTML 定義的一模一樣
      // 並且需用 {} object 包住

      template:
        "<div>" +
        '<button ng-click="updateName()">UPDATE NAME</button>' +
        '<button ng-click="updatePrice()">UPDATE PRICE</button>' +
        '<div>增加 PARENT KEY <input ng-model="pValue">' +
        '<button ng-click="addObjectKey({key: pValue})">增加</button></div>' +
        "</div>",
    };
  });
