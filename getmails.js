var mailList = document.querySelectorAll("#list_for_view > .mailList.sender_context > li");
var checkedMailList = [];
for (i=0; i<mailList.length; i++) {
	var checkbox = mailList[i].querySelector(".mInfo > li > input");
	if (checkbox.checked) {
		checkedMailList.push(mailList[i].querySelector(".mTitle > .subject > a").href);
	}
}
checkedMailList;