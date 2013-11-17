'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
    console.log('previousVersion', details.previousVersion);
});

chrome.tabs.onUpdated.addListener(function (tabId) {
	    chrome.pageAction.show(tabId);    
});


chrome.tabs.executeScript({file: "content.js"});
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
	    // read `newIconPath` from request and read `tab.id` from sender
	    console.log(chrome.pageAction);
	    chrome.pageAction.setIcon({
	        path: request.newIconPath,
	        tabId: sender.tab.id
	    });
});

