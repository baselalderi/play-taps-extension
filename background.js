chrome.action.onClicked.addListener((tab) => {
	// Return if clicked inside a "chrome://" tab
	if (tab.url?.startsWith("chrome://")) return;
	chrome.scripting.executeScript({
		target: {
			tabId: tab.id,
		},
		func: () => {
			// Toggle play
			if (taps.duration > 0 && !taps.paused) {
				taps.pause();
				taps.currentTime = 0;
			} else {
				taps.play();
			}
		}
	});
});