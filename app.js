angular.module('myApp', [])
.controller('AppCtrl', function($scope){
  console.log('inside the controller');

  $scope.inBag = [
	{name: 'pikachu',
	description: "the most popular",
	evoluted: false,
	imagePath: "img/pikachu.png"},

	{name: 'squirtle',
	description: "the aquatic",
	evoluted: false,
	imagePath: "img/squirtle.png"},

	{name: 'jelly',
	description: "the aquatic",
	evoluted: false,
	imagePath: "img/jelly.jpg"},

	{name: 'dots',
	description: "the aquatic",
	evoluted: false,
	imagePath: "img/dots.jpg"},
  ];


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

})

$(document).ready(function(){
	$('button').click(function(){
	$(this).hide();
	$(this).next().hide();
	})	
})
