'use strict';

angular.module('cometaApp')
  .controller('OrderCtrl', function ($scope, $http) {

  	// Shopping cart object
  	$scope.shoppingCart = { items: [], total:0 };
  	// var car = { myCar: "Saturn", getCar: CarTypes("Honda"), special: Sales };
  	// Shopping cart items
  	// $scope.shoppingCart.items = [];
  	// $scope.shoppingCart.total = 0;


    $http.get('/api/items').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      // $scope.awesomeThings = $scope.awesomeThings.slice(1,100);
      // console.log($scope.awesomeThings);
    });



    $scope.addRandomItem = function() {
    	var rand = $scope.awesomeThings[Math.floor(Math.random() * $scope.awesomeThings.length)];
    	$scope.shoppingCart.items.push(rand);
    	console.log($scope.shoppingCart.items);

    }





    


  });
