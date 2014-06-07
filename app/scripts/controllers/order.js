'use strict';

angular.module('cometaApp')
  .controller('OrderCtrl', function ($scope, $http) {


    $http.get('/api/items').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      // console.log($scope.awesomeThings.length);
      $scope.awesomeThings = $scope.awesomeThings.slice(1,100);
    });

    


  });
