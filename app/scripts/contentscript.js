'use strict';

chrome.storage.sync.get('bookmark', function(value) {
  var icon = 'icon-128-2.png';
  var folder = 'images/';

  chrome.runtime.sendMessage({ "newIconPath" : folder+icon });
});