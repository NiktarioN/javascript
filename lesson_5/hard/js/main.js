'use strict';

// 1) Выведите на страницу текущую дату и время в формате '09:59:59 30.05.2018'
function getTime() {
	let date = new Date(),
		seconds = setZeroBeforeDate(date.getSeconds()),
		minutes = setZeroBeforeDate(date.getMinutes()),
		hours = setZeroBeforeDate(date.getHours()),
		days = setZeroBeforeDate(date.getDate()),
		month = setZeroBeforeDate(date.getMonth()),
		year = setZeroBeforeDate(date.getFullYear());

	document.querySelector('.date-one').innerHTML = "Текущая дата и время: " + hours + ":" + minutes + ":" + seconds + " " + days + ":" + month + ":" + year;
}
getTime();

// 2) Напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.6.2018 сделает 01.06.2018)
function setZeroBeforeDate(item) {
	if (item < 10) {
		item = "0" + item;
	} else {
		item = item;
	}
	return item;
}

// 3) Напишите функцию, которая выводит на страницу текущий день недели на русском языке (реализацию выбираете сами)
function showWeekDay() {
	let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
		date = new Date();

	document.querySelector('.date-two').innerHTML = "Текущий день недели: " + days[date.getDay()];
}
showWeekDay();


// 4) Напишите функцию, которая выводит на страницу разницу между двумя датами в количестве дней

// Создаем переменные инпутов и кнопки
let firstDate = document.querySelector('.date-input-one'),
	secondDate = document.querySelector('.date-input-two'),
	btnStart = document.querySelector('.button-result'),
	inputResult = document.querySelector('.result');

// Добавляем событие на нажатие кнопки
btnStart.addEventListener('click', function () {
	// Принимаем значения из инпутов в наши переменные с датами
	let dateStart = firstDate.value,
		dateEnd = secondDate.value,
		result = 0;
	//  Метод Date.parse(str) разбирает строку str в таком формате (YYYY-MM-DD – дата в формате год-месяц-день) и возвращает соответствующее ей количество миллисекунд
	dateStart = Date.parse(dateStart);
	dateEnd = Date.parse(dateEnd);

	// Проверка на то, чтобы все инпуты с датами были заполнены
	if (firstDate.value && secondDate.value) {
		// Math.ceil - округляет полученный результат до целого числа, Math.abs делает число положительным (сделано для того, чтобы избежать случая, когда начальная дата больше конечной)
		result = Math.ceil(Math.abs(dateEnd - dateStart)) / (1000 * 3600 * 24);
		inputResult.value = result;
	} else {
		alert('Пожалуйста, введите даты еще раз');
	}
});