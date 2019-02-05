(function () {
'use strict';

angular.module('myLunchCheckApp', [])
.controller('MyLunchCheckController',MyLunchCheckController);

MyLunchCheckController.$inject = [$scope];
function MyLunchCheckController($scope)
{
	$scope.dishes = "";
	$scope.DisplayMessageToUser = "";
	$scope.count=0;
	$scope.checkItems = function()
	{
		if($scope.dishes.length > 0)
	    {
		var array =  $scope.dishes.split(',');
        $scope.count = array.length;
		}
		else
		{
			$scope.count=0;
		}
		
		if($scope.count <= 3 && $scope.count > 0)
			$scope.DisplayMessageToUser = "Enjoy!";
		else if($scope.count > 3)
			$scope.DisplayMessageToUser = "Too much!";
		else
			$scope.DisplayMessageToUser = "Please enter data first";
					
	};	
}
})();
