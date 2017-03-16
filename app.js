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


})

$(document).ready(function(){
	$('button').click(function(){
	$(this).hide();
	$(this).next().hide();
	})	
})
