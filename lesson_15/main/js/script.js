window.addEventListener('DOMContentLoaded', () => {

	'use strict';

	const calc = require('./modules/calc'),
		checknum = require('./modules/checknum'),
		forms = require('./modules/forms'),
		modal = require('./modules/modal'),
		slider = require('./modules/slider'),
		tabs = require('./modules/tabs'),
		timer = require('./modules/timer');

	calc();
	checknum();
	forms();
	modal();
	slider();
	tabs();
	timer();

});