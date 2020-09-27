window.onload = function(){
	var aList = document.querySelector("#readFrame").getElementsByTagName("a");
	var unsubText = ["unsubscribe", "수신거부", "수신 거부", "구독 취소", "취소", "거부"];
	var unsubLink = aList[aList.length - 1].href;
	
	for (i=0; i<aList.length; i++) {
		isUnsubLink = false;
		for (j=0; j<unsubText.length; j++) {
			if (aList[i].textContent.includes(unsubText[j])){
				isUnsubLink = true;
				unsubLink = aList[i].href;
				break;
			}
		}
		if (isUnsubLink) break;
	}
	
	window.open(unsubLink, "_self")
}
