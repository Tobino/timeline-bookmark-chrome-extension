'use strict';

angular.module('bookmarkApp')
  .controller('TimelineCtrl', function ($scope) {

    $scope.datepickerOptions = {
        format: 'dd-mm-yyyy',
        language: 'fr',
        autoclose: true,
        weekStart: 0
    }

  	chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
	   function(tabs){
	      $scope.$apply(function(){
	      	$scope.url = tabs[0].url;
	      	$scope.title = tabs[0].title;
	  	  });
	   }
	);

    $scope.save = function() {
      console.log($scope.title);
      console.log($scope.url);
      console.log($scope.date);
    };

    $scope.timeline = function() {
    	chrome.tabs.create({url: "timeline.html"});
    };

    $scope.options = function() {
    	chrome.tabs.create({url: "options.html"});
    };



  });
