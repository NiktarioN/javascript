const calc = () => {
	let persons = document.querySelectorAll('.counter-block-input')[0],
		restDays = document.querySelectorAll('.counter-block-input')[1],
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personsSum = 0,
		daysSum = 0,
		total = 0;

	totalValue.innerHTML = 0;

	persons.addEventListener('change', function () {
		if (restDays.value == '' || this.value == '') {
			totalValue.innerHTML = 0;
		} else {
			personsSum = +this.value;
			total = (daysSum + personsSum) * 4000;
			totalValue.innerHTML = total;
		}
	});

	restDays.addEventListener('change', function () {
		if (persons.value == '' || this.value == '') {
			totalValue.innerHTML = 0;
		} else {
			daysSum = +this.value;
			total = (daysSum + personsSum) * 4000;
			totalValue.innerHTML = total;
		}
	});

	place.addEventListener('change', function () {
		if (restDays.value == '' || persons.value == '') {
			totalValue.innerHTML = 0;
		} else {
			let a = total;
			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
		}
	});

	const checkCalNum = require('./checkcalnum');

	checkCalNum(persons);
	checkCalNum(restDays);
}

module.exports = calc;