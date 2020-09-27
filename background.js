chrome.browserAction.onClicked.addListener(function(tab) {
	var url = new URL(tab.url)
	var domain = url.hostname

	if (domain == "mail.naver.com") {
		chrome.tabs.executeScript(null, {file: "getmails.js"});
	}
});