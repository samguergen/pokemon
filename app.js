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

	{name: 'candy',
	description: "jelly beans",
	type: "item",
	evolved: false,
	imagePath: "img/jelly.jpg"},

	{name: 'candy',
	description: "smaller pieces",
	type: "item",
	evolved: false,
	imagePath: "img/dots.jpg"},
  ];

  $scope.feed = {
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
	$scope.feed.pokemon = pokemon.type
}

})

// $(document).ready(function(){
// 	$('button').click(function(){
// 	$(this).hide();
// 	$(this).next().hide();
// 	})	
// })
