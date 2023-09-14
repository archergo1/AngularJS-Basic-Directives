function Ctrl2($scope, $timeout) {
    $scope.val = false;

    $timeout(function () {
        $scope.val = true;
    }, 3000)
}