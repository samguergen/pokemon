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
  	pokemon: '',
  	candy: ''
  }


$scope.displayDetails = function() {
	console.log('clicked');
	$scope.disp = true;
}

$scope.removeItem = function(item) {
	console.log('item to rm is ', item);
	var index = $scope.inBag.indexOf(item);
	if (index > -1) {
    $scope.inBag.splice(index, 1);
	}
}

$scope.addItem = function(item){
	console.log('item to add is ', item);
	$scope.inBag.push(item);
}

$scope.feedPokemon = function(pokemon){
	$scope.feedPoke = true;
	console.log('pokemon is ', pokemon);
	$scope.feed.name = pokemon.name;
}

$scope.feedPokemon2 = function(candy){
	console.log("candy was ", candy);
	$scope.feed.candy = candy.description;
	for (var x=0; x < $scope.inBag.length; x++){
		console.log("hey");
		if ($scope.inBag[x].name == $scope.feed.name){
			console.log($scope.inBag[x]);
			$scope.inBag.splice(x, 1);
		}
		console.log($scope.inBag);
	}
}

})

// $(document).ready(function(){
// 	$('button').click(function(){
// 	$(this).hide();
// 	$(this).next().hide();
// 	})	
// })
