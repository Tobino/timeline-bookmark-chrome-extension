'use strict';

angular.module('bookmarkApp')
  .controller('MainCtrl', function ($scope) {
  	$scope.truc = 'Durtal';


  	chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
	   function(tabs){
	      $scope.$apply(function(){
	      	$scope.url = tabs[0].url;
	      	$scope.title = tabs[0].title;
	  	  });
	   }
	);



  });
