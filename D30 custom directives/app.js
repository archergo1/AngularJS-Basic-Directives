const app1 = angular.module("app1", []);
// when using 
app1.directive("test1", function () {
  return {
    restrict: "E",
    template: "<div>test1</div>",
  };
});




app1.directive("test2", function () {
  return {
    restrict: "M",
    template: "<div>test22223</div>",
    replace: true,
  };
});

// what is the function of "replace" ?

// By default, the value of restrict is EA




// console.log(window.app1)