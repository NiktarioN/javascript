window.addEventListener('DOMContentLoaded', function () {

	'use strict';

	let tab = document.querySelectorAll('.info-header-tab'),
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');

	// Скрываем контент табов
	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}
	hideTabContent(1);

	// Показываем контент табов
	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	// Отслеживаем событие нажатия на любой из табов. Если нажали на любой из табов, то запускается цикл, который считывает общее количество табов и ищет тот, на который мы нажали. Он имеет индекс i и когда находит скрывает все табы и показывает нужный нам таб
	info.addEventListener('click', function (event) {
		let target = event.target;
		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});

	// Таймер
	let deadLine = '2019-12-10';

	// Функция, которая добаляет 0 перед датами
	function setZeroBeforeDate(item) {
		if (item < 10) {
			item = "0" + item;
		} else {
			item = item;
		}
		return item;
	}

	// Функция для расчета времени и формирования объекта с этим временем
	function getTimeRemaining(endTime) {
		let t = Date.parse(endTime) - Date.parse(new Date()),
			seconds = setZeroBeforeDate(Math.floor((t / 1000) % 60)),
			minutes = setZeroBeforeDate(Math.floor((t / 1000 / 60) % 60)),
			hours = setZeroBeforeDate(Math.floor((t / (1000 * 60 * 60))));

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	// Функция для установки таймера
	function setClock(id, endTime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds'),
			// Ставим интервал в одну секунду
			timeInterval = setInterval(updateClock, 1000);

		function updateClock() {
			let t = getTimeRemaining(endTime);
			hours.textContent = t.hours;
			minutes.textContent = t.minutes;
			seconds.textContent = t.seconds;

			if (t.total <= 0) {
				clearInterval(timeInterval);
				hours.textContent = '00';
				minutes.textContent = '00';
				seconds.textContent = '00';
			}
		}
	}

	setClock('timer', deadLine);

	// Меню с прокруткой
	// Найти элементы с меню. Делегировать их относительно главного элемента
	// Связать как с табами элемент меню с нужной секцией и перематывать до нее

});