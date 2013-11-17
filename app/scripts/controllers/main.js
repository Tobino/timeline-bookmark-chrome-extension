'use strict';

angular.module('bookmarkApp')
  .controller('MainCtrl', function ($scope,$rootScope) {

    $scope.datepickerOptions = {
        format: 'dd-mm-yyyy',
        language: 'fr',
        autoclose: false,
        weekStart: 0
    }

    chrome.storage.sync.get('bookmark', function(value) {
      // The $apply is only necessary to execute the function inside Angular scope
      $scope.$apply(function() {
        $scope.load(value);
      });
    });

    // If there is saved data in storage, use it. Otherwise, bootstrap with sample todos
    $scope.load = function(value) {
      //chrome.storage.sync.set({'bookmark':null});
      if (value && value.bookmark) {
        $scope.bookmark = value.bookmark;
      } else {
        $scope.bookmark = [];
      }
    }

    chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
      function(tabs){
        $scope.$apply(function(){
          $scope.url = tabs[0].url;
          $scope.title = tabs[0].title;
          $scope.tabId = tabs[0].id;
        });
        //$scope.save();
      }
    );

    $scope.save = function() {
      $scope.bookmark.push({
        title:$scope.title,
        url:$scope.url,
        date:$scope.date
      });
      chrome.storage.sync.set({'bookmark':$scope.bookmark});
      chrome.pageAction.setIcon({
        //path: request.newIconPath,
        path: {'19': 'images/icon-19-2.png','38':'images/icon-38-2.png'},
        tabId: $scope.tabId
      },function(){
        window.close();
      });
    };

    $scope.remove = function (bookmark) {
      var bookmarks = $scope.bookmark;
      bookmarks.splice(bookmarks.indexOf(bookmark), 1);
      chrome.storage.sync.set({'bookmark':$scope.bookmark});
    };

    $scope.timeline = function() {
      chrome.tabs.create({url: "timeline.html"});
    };

    $scope.options = function() {
      chrome.tabs.create({url: "options.html"});
    };



  });
