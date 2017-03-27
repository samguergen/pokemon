angular.module('myApp', [])
.controller('AppCtrl', function($scope){

	//Pokemon/items already present in bag
 	$scope.inBag = [
		{name: 'Pikachu',
		description: "The most popular",
		type: "pokemon",
		evolved: false,
		imagePath: "img/pikachu.png"},

		{name: 'Squirtle',
		description: "The aquatic",
		type: "pokemon",
		evolved: false,
		imagePath: "img/squirtle.png"},

		{name: 'Jelly beans',
		description: "Yummy beans for your Pokemon.",
		type: "candy",
		evolved: false,
		imagePath: "img/jelly.jpg"},

		{name: 'Pieces',
		description: "A favorite from Carmin-at-Sea.",
		type: "candy",
		evolved: false,
		imagePath: "img/dots.jpg"},
	  ];

	//tracks info from selected Pokemon to feed
	$scope.feed = {
	  	name: '',
	  	candy: '',
	  	evolved: '',
	}

	//adds new Pokemon/item to bag
	$scope.addItem = function(item){
		$scope.inBag.push(item);
	}  

	//removes Pokemon/item from bag
	$scope.removeItem = function(item) {
		var index = $scope.inBag.indexOf(item);
		if (index > -1) {
	    $scope.inBag.splice(index, 1);
		}
	}

	//sets info from selected Pokemon to feed
	$scope.feedWho = function(pokemon){
		$scope.feedPoke = true; // opens candy selection area in DOM
		$scope.feed.name = pokemon.name;
		$scope.feed.evolved = pokemon.evolved;
	}

	//finds and removes selected candy and Pokemon from bag before generating evolution
	$scope.feedWhat = function(candy){
		if ($scope.feed.evolved === false) { //feeds only non-evolved Pokemon

			//iterate through bag, if item matches selected Pokemon, then remove from bag
			for (var x=0; x < $scope.inBag.length; x++){	
				if ($scope.inBag[x].name == $scope.feed.name){
					$scope.inBag.splice(x, 1);
					for (var y=0; y < $scope.inBag.length; y++){ //same for candy
						if ($scope.inBag[y].name == candy.name){
							$scope.inBag.splice(y, 1);
						}				
					}
				}
			}
			 //for this assignment, let's assume all pokemon evolve to Mewtwo
			alert("Your pokemon is evolving...");
			alert("It's a Mewtwo!");

			//replaces Pokemon with new Mewtwo evolution, and adds to bag
			var mewtwo = 
				{name: 'Mewtwo',
				description: "The ultimate evolution",
				type: "pokemon",
				evolved: true,
				imagePath: "img/mewtwo.jpg"};

			$scope.inBag.push(mewtwo);
		}
		
		else {
			alert("Your Pokemon has finished evolving. Try feeding another.");
		}
	}

})

