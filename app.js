angular.module('myApp', [])
.controller('AppCtrl', function($scope){
  console.log('inside the controller');

  $scope.inBag = [
	{name: 'pikachu',
	description: "the most popular",
	type: "pokemon",
	evolved: false,
	imagePath: "img/pikachu.png"},

	{name: 'squirtle',
	description: "the aquatic",
	type: "pokemon",
	evolved: false,
	imagePath: "img/squirtle.png"},

	{name: 'jelly beans',
	description: "this candy will make your pokemon evolve.",
	type: "candy",
	evolved: false,
	imagePath: "img/jelly.jpg"},

	{name: 'pieces',
	description: "this candy will make your pokemon evolve.",
	type: "candy",
	evolved: false,
	imagePath: "img/dots.jpg"},
  ];

  $scope.feed = {
  	name: '',
  	candy: '',
  	evolved: '',
  }

$scope.addItem = function(item){
	$scope.inBag.push(item);
}  

$scope.removeItem = function(item) {
	var index = $scope.inBag.indexOf(item);
	if (index > -1) {
    $scope.inBag.splice(index, 1);
	}
}

$scope.feedWho = function(pokemon){
	$scope.feedPoke = true;
	$scope.feed.name = pokemon.name;
	$scope.feed.evolved = pokemon.evolved;
}

$scope.feedWhat = function(candy){
	if ($scope.feed.evolved === false) {

		for (var x=0; x < $scope.inBag.length; x++){	
			if ($scope.inBag[x].name == $scope.feed.name){
				$scope.inBag.splice(x, 1);
				for (var y=0; y < $scope.inBag.length; y++){
					if ($scope.inBag[y].name == candy.name){
						$scope.inBag.splice(y, 1);
					}				
				}
			}
		}
		 //for this assignment, let's assume all pokemon evolve to Mewtwo
		alert("Your pokemon is evolving...");
		alert("It's a Mewtwo!");
		var mewtwo = 
			{name: 'Mewtwo',
			description: "The ultimate evolution",
			type: "pokemon",
			evolved: true,
			imagePath: "img/mewtwo.jpg"};

		$scope.inBag.push(mewtwo);
	}
	
	else {
		alert("Your Pokemon has finished evolving. Try feeding another.")
	}
}

})

// $(document).ready(function(){
// 	$('button').click(function(){
// 	$(this).hide();
// 	$(this).next().hide();
// 	})	
// })
