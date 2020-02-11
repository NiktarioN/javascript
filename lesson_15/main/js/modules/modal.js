const modal = () => {

	const checkMobileBrowser = require('./checkMobileBrowser'),
		checkOldBrowsers = require('./checkOldBrowsers');

	function showModal(triggerSelector, modalSelector, closeSelector) {
		const trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector);

		const mobileBrowser = checkMobileBrowser(),
			oldBrowser = checkOldBrowsers();

		trigger.forEach(item => {
			item.addEventListener('click', function (e) {
				if (e.target) {
					e.preventDefault();
				}
				modal.style.display = "block";
				document.body.style.overflow = "hidden";
				if (!mobileBrowser && !oldBrowser) {
					modal.children[0].animate([{
							top: '-500px',
							opacity: '0'
						},
						{
							top: '150px',
							opacity: '1'
						}
					], 400);
				}
				if (oldBrowser) {
					modal.children[0].classList.add('anim-slidedown');
				}
				if (oldBrowser || !mobileBrowser) {
					this.classList.add('more-splash');
				}
			});
		});

		close.addEventListener('click', () => {
			trigger.forEach(item => {
				item.classList.remove('more-splash');
			});
			if (!mobileBrowser && !oldBrowser) {
				let animation = modal.children[0].animate([{
						top: '150px',
						opacity: '1'
					},
					{
						top: '-500px',
						opacity: '0'
					}
				], 400);
				animation.addEventListener('finish', () => {
					modal.style.display = "none";
					document.body.style.overflow = "";
				});
			}
			if (oldBrowser) {
				modal.children[0].classList.remove('anim-slidedown');
				modal.children[0].classList.add('anim-slideup');
				setTimeout(function () {
					modal.children[0].classList.remove('anim-slideup');
					modal.style.display = "none";
					document.body.style.overflow = "";
				}, 400);
			}
			if (mobileBrowser) {
				modal.style.display = "none";
				document.body.style.overflow = "";
			}
		});

		modal.addEventListener('click', (e) => {
			if (e.target === modal) {
				trigger.forEach(item => {
					item.classList.remove('more-splash');
				});
				modal.style.display = "none";
				document.body.style.overflow = "";
				if (oldBrowser) {
					modal.children[0].classList.remove('anim-slidedown');
				}
			}
		});

	}

	showModal('.description-btn', '.overlay', '.popup .popup-close');
	showModal('.more', '.overlay', '.popup .popup-close');
};

module.exports = modal;