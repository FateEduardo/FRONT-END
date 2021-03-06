appController.controller("logoutCtrl", function ($scope, $location, $rootScope, $interval) {
    $scope.countTime = 0;
    $scope.show = true;
    $scope.logOut = function () {
        $rootScope.loggedUser = null;
        $location.path('/login');
    }
    $scope.clearTime = function () {
        $scope.countTime = 0;
        $scope.startTime();
    }
    $scope.startTime = function () {
        if (angular.isDefined(stop)) return;
        stop = $interval(function () {
            if ($scope.countTime > 76300) {
                $location.path('/logout');
            } else {
                $scope.countTime++;
            }
        });
    }
    $scope.redirect = function (path) {
        $location.path(path);
    }

});
