//page action?

chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
	if(tab.url.indexOf('dotinstall') != -1) {
		//page action show
		chrome.pageAction.show(tabId);
	}
});	
//click?

chrome.pageAction.onClicked.addListener(function(){
	chrome.tabs.executeScript(null,{"code" : "document.body.style.backgroundColor='red'"});
});