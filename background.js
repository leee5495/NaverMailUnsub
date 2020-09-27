chrome.browserAction.onClicked.addListener(function(tab) {
	var url = new URL(tab.url)
	var domain = url.hostname

	if (domain == "mail.naver.com") {
		chrome.tabs.executeScript(null, {file: "getmails.js"}, 
			function(results){
				for (i=0; i<results[0].length; i++) {
					chrome.tabs.create({url: results[0][i], active: true},
						function(tab) {
							chrome.tabs.executeScript(tab.id, {file: "unsubscribe.js"});
						});
				}
			});
	}
});