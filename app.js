angular.module('myApp', [])
.controller('AppCtrl', function($scope){
  console.log('inside the controller');



})

$(document).ready(function(){
	$('button').click(function(){
	console.log('clicked');
	$(this).next().hide();
	})	
})
