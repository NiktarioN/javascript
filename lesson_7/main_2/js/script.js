'use strict';

// Функция, которая показывает время
function showTime() {
	// Объявляем дату, получаем секунды, минуты и часы
	let date = new Date(),
		seconds = setZeroBeforeDate(date.getSeconds()),
		minutes = setZeroBeforeDate(date.getMinutes()),
		hours = setZeroBeforeDate(date.getHours());

	document.querySelector('.timer').innerHTML = "Текущее время: " + hours + ":" + minutes + ":" + seconds;
}

// Функция, которая добаляет 0 перед датами
function setZeroBeforeDate(item) {
	if (item < 10) {
		item = "0" + item;
	} else {
		item = item;
	}
	return item;
}

setInterval(showTime, 1000);