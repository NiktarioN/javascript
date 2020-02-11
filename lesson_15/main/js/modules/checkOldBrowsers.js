const checkOldBrowsers = () => {
	let browserOld;
	let isBrowserOld = {
		Firefox: function () {
			return navigator.userAgent.match(/Firefox/i);
		},
		Msie: function () {
			return navigator.userAgent.match(/MSIE/i);
		},
		Edge: function () {
			return navigator.userAgent.match(/Edge/i);
		},
		any: function () {
			return (isBrowserOld.Firefox() || isBrowserOld.Msie() || isBrowserOld.Edge());
		}
	};
	if (isBrowserOld.any()) {
		browserOld = true;
	}
	return browserOld;
	// if (navigator.userAgent.search(/Firefox/) > 0) {
	// 	a = 'MozillaFirefox'
	// };
	// if (navigator.userAgent.search(/MSIE/) > 0 || navigator.userAgent.search(/NET CLR /) > 0) {
	// 	a = 'Internet Explorer'
	// };
	// if (navigator.userAgent.search(/Edge/) > 0) {
	// 	a = 'Microsoft Edge'
	// };
};

module.exports = checkOldBrowsers;