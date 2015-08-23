/* Latern Class */
function Lantern(element, options) {
	/*
	 * PUBLIC MEMBERS
	 */

	var that = this;

	if (element === undefined) {
		this.element = document.getElementById('lantern');
	} else {
		this.element = element;
	}

	this.showClass = 'lantern-show';
	if (options !== undefined) {
		if (options.showClass !== undefined) {
			this.showClass = options.showClass;
		}
	}


	/*
	 * PRIVATE MEMBERS
	 */

	var img = that.element.getElementsByTagName('img')[0];


	/*
	 * PRIVATE METHODS
	 */

	/* Modifies given links to open lightbox */
	function modLink(lantLink) {
		lantLink.addEventListener('click', function(e) {
			img.src = lantLink.getAttribute('href');
			that.toggle();
			e.preventDefault();
		});
	}

	/* Sets close button */
	function setCloseBtn(){
		var closeBtn = that.element.getElementsByTagName('button')[0];

		closeBtn.addEventListener('click', function(){
			that.toggle();
		});
	}


	/*
	 * PUBLIC METHODS
	 */

	/* Shows and hides the lightbox */
	Object.defineProperty(Lantern.prototype, 'toggle', {
		enumerable: false,
		value: function(){
			if (this.element.className === this.showClass) {
				this.element.className = '';
			} else {
				this.element.className = this.showClass;
			}
		}
	});

	/* Apply modLink() to all pre-designated links */
	Object.defineProperty(Lantern.prototype, 'modifyLinks', {
		enumerable: false,
		value: function(){
			var lanternLinks = document.querySelectorAll('[data-lantern]');

			for (var i = 0; i < lanternLinks.length; ++i) {
				modLink(lanternLinks[i]);
			}
		}
	});


	/*
	 * CONSTRUCTOR
	 */

	setCloseBtn();
	this.modifyLinks();
}


/* "main()" */
var lantern = new Lantern();

console.log(lantern);
for (var foo in lantern) {
    console.log(foo);
}
