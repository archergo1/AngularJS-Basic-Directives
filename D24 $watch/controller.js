function AddressControl($scope){
    // LOOK AT HERE
    $scope.$watch('test1', function(newVal, oldVal){
        console.log(newVal, oldVal);

        console.log(typeof $watch)

    }, true);
    // WHAT DOE "TRUE" MEANS HERE?
    $scope.update = function(){
        console.log('test2');
    }

    console.dir($scope)
  
}