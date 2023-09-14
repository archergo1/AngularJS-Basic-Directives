function lotteryCtrl($scope)
{
  $scope.lotteryModel = [
    {
      id: 1,
      ProductName: '威力彩'
    },
    {
      id: 2,
      ProductName: '今彩539'
    },
    {
      id: 3,
      ProductName: '大樂透'
    }];
  
  $scope.Select1 = $scope.lotteryModel[0];
}


