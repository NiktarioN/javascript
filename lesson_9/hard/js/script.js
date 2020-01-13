// Выполнить ряд задач:
// 1) При клике на видимый input - мы вводим номер телефона. (Если есть желание - можете подключить маску. Либо самописную, либо тык или аналог)
// 2) При клике на блок с названием страны и стрелкой - показывается нижний блок. Также стрелка разворачивается
// 3) При клике на нижний видимый блок, причем в любом месте, даже на input - он меняется местами с верхним
// 4) Обратите внимание на поведение стрелок. В нижнем блоке - она всегда скрыта, при перемещении вверх - она смотрит вниз
// 5) Нижнее подчеркивание блока реализуется при помощи border-bottom. Оно также меняется замене
// 6) Попробуйте поменять их местами 5 раз - если все верно - ничего не должно сломаться

// 1) Функция с кликом на блок с названием страны, стрелкой. В ней мы делаем делегирование, так же добавляем событие на клик, при событии мы меняем стили visiable у нижних блоков, так же меняем стили у стрелки и поворачиваем ее в обратную сторону
// 2) Функция, которая при клике возвращает все обратно. Т.е. обратные действия
// 3) Функция, которая при клике меняет местами выбранный и исходный инпуты. Меняет так же стили для подчеркивания

// ЗАМЕТКИ:
// 1) Стрелке точно нужно добавлять и убирать класс .overlay .popup__call-svg-active
// 2) При смене мест мы должны удалять у элемента класс popup__call-phone-hidden, а элементу, который был изначально наоборот его добавлять

window.addEventListener('DOMContentLoaded', function () {

	'use strict';

	// Подключаю маски к инпутам
	jQuery(function ($) {
		$(".input__call-phobe-rus").mask("+7 (999) 999 99 99");
		$(".input__call-phobe-bel").mask("+375 (99) 999 99 99");
	});

	// Объявляем глобальные переменные
	let phoneBlock = document.querySelectorAll('.popup__call-phone'),
		phoneBlockHidden = document.querySelectorAll('.popup__call-phone-hidden'),
		arrow = document.querySelector('.popup__call-svg'),
		phoneBlockCheck = document.querySelectorAll('.popup__call-wrap');




	// Функция, при которой появляются все номера. Минусы: приходится проходить по всем блокам с "чекбоксом" и даже в скрытых будет возможность его нажать и вызвать наверно ошибку
	function showNumbers() {
		// Перебиваю весь массив с "чеками"
		phoneBlockCheck.forEach(function (item) {
			// Событие для клика на любой из массивов с телефонами
			item.addEventListener('click', function () {
				// Перебираю массив всех скрытых блоков
				phoneBlockHidden.forEach(function (item) {
					item.style.visibility = "visible";
					arrow.classList.add('popup__call-svg-active');
				})
			});
		});
	}
	showNumbers();

	// function showNumbers() {
	// 	phoneBlock.forEach(function (item) {
	// 		item.addEventListener('click', function () {
	// 			if (phoneBlockInvisible.classList.contains('popup__call-phone-hidden')) {
	// 				phoneBlockInvisible.style.visibility = "visible";
	// 				arrow.classList.add('.overlay .popup__call-svg-active');
	// 			}
	// 		});
	// 	});
	// }
	// showNumbers();

	// function hideNumbers() {
	// 	phoneBlock.forEach(function (item) {
	// 		item.addEventListener('click', function () {
	// 			phoneBlockInvisible.forEach(function (gg) {
	// 				if (gg.style.visibility == 'visible') {
	// 					gg.style.visibility = "hidden";
	// 					arrow.classList.remove('popup__call-svg-active');
	// 				}
	// 			});
	// 		});
	// 	});
	// };
	// hideNumbers();

	// Теперь нужно объеденить их


});