'use strict';

angular.module('bookmarkApp')
  .controller('TimelineCtrl', function ($scope) {

	chrome.storage.sync.get('bookmark', function(value) {
	  // The $apply is only necessary to execute the function inside Angular scope
	  $scope.$apply(function() {
	    $scope.load(value);
	  });
	});

	// If there is saved data in storage, use it. Otherwise, bootstrap with sample todos
	$scope.load = function(value) {
	  if (value && value.bookmark) {
	    $scope.bookmark = value.bookmark;
	  } else {
	    $scope.bookmark = [];
	  }
	}

  });
