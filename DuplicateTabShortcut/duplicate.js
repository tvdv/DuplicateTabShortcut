//Copyright (c) 2014, Tvdv

function duplicateTabClick(tab) {
	if (tab === undefined) {

	} else {
		chrome.tabs.duplicate(tab.id);
	}
}

chrome.browserAction.onClicked.addListener(duplicateTabClick);
