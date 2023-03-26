// Set up square element
const square = document.createElement('div');
square.classList.add('play-taps');
square.style.cssText = 'width: 50px; height: 50px; cursor: pointer; position: fixed; top: 5px; right: 5px; z-index: 9999; background: center no-repeat url(' + chrome.runtime.getURL('icon.png') + '); background-size: 100% 100%;';
document.body.appendChild(square);

// Initialize Taps audio
const taps = new Audio(chrome.runtime.getURL('taps.ogg'));

// Audio button event listener
document.body.addEventListener('click', (e) => {
	// Toggle play
	if (e.target.classList && e.target.classList.contains('play-taps')) {
		taps.play();
	} else {
		taps.pause();
		taps.currentTime = 0;
	}
});

// ESC key event listener
document.body.addEventListener('keyup', (e) => {
	if (e.keyCode == 27) {
		// Stop play if ESC is pressed
		taps.pause();
		taps.currentTime = 0;
	}
});