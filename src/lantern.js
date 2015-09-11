/* Latern 0.2.0 */
function Lantern(element, options) {
	/*
	 * BEGIN CONSTRUCTOR
	 */
	var that = this;
	var body = document.querySelector('body');
	this.html = '<div id="lantern"><img src="" alt=""><button>X</button></div>';

	body.insertAdjacentHTML('beforeend', this.html);

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
	
	var img = this.element.querySelector('img');


	/*
	 * PRIVATE METHODS
	 */

	/* Modifies given links to open lightbox */
	function modLink(lantLink) {
		lantLink.addEventListener('click', function(e) {
			if(e.button === 0) {
				img.src = lantLink.getAttribute('href');
				that.toggle();
				e.preventDefault();
			}
		});
	}

	/* Sets close button */
	function setClose(){
		var closeBtn = that.element.querySelector('button');

		that.element.addEventListener('click', function(e){
			if (e.target === closeBtn || e.target === that.element) {
				that.toggle();
			}
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
				body.style.overflow = 'initial';
				img.src = '';
			} else {
				this.element.className = this.showClass;
				body.style.overflow = 'hidden';
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
	 * END CONSTRUCTOR
	 */

	setClose();
	this.modifyLinks();
}
