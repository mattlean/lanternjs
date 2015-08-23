var lantern = document.getElementById('lantern');


/*
 * LOW-LEVEL FUNCTIONS
 * Functions that the high-level functions use that generally shouldn't be touched by Lantern.js users.
 */

/* Shows and hides the lightbox */
function toggleLantern(){
	var lantShow = 'lant-show';

	if (lantern.className === lantShow) {
		lantern.className = '';
	} else {
		lantern.className = lantShow;
	}
}

/* Modifies given links to open lightbox */
function lanternLinkMod (lanternLink) {
	lanternLink.addEventListener('click', function (e) {
		toggleLantern();
		e.preventDefault();
	});
}


/*
 * HIGH-LEVEL FUNCTIONS
 * Functions that Lantern.js users should use!
 */

/* Apply lanternLinkMod() to all pre-determined links */
function lanternLinkModAll(){
	var lanternLinks = document.querySelectorAll('[data-lantern]');

	for (var i = 0; i < lanternLinks.length; ++i) {
		lanternLinkMod(lanternLinks[i]);
	}
}

/* Sets up Lantern.js for use */
function lanternSetup(){
	lanternLinkModAll();

	// Makes button in lightbox close lightbox
	var closeBtn = lantern.getElementsByTagName('button')[0];
	closeBtn.addEventListener('click', function (e) {
		toggleLantern();
	})
}

/* "main()" */
lanternSetup();
