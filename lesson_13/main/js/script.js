window.addEventListener('DOMContentLoaded', () => {

	'use strict';

	const tab = document.querySelectorAll('.info-header-tab'),
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
	info.addEventListener('click', (event) => {
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
	const deadLine = '2020-01-25';

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

			if (t.total <= 0 || isNaN(t.total)) {
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


	// Модальное окно
	const more = document.querySelectorAll('.more, .description-btn'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');

	// При нажатии на кнопку появляется модальное окно. This - сама кнопка
	more.forEach((item) => {
		item.addEventListener('click', function () {
			overlay.style.display = 'block';
			this.classList.add('more-splash');
			document.body.style.overflow = 'hidden';
		});
	});

	// При нажатии на крестик скрывается модальное окно
	close.addEventListener('click', () => {
		overlay.style.display = 'none';
		more.forEach((item) => {
			item.classList.remove('more-splash');
		})
		document.body.style.overflow = '';
	});

	// Формы для отправки данных

	// Делаем так, чтобы в инпутах с телефонами можно было ввести только цифры и знак +
	const inputsPhone = document.querySelectorAll('input[name="phone"]');

	// Функция для проверки ввода только номеров
	function checkNum(item) {
		item.addEventListener('input', () => {
			if (/^[0-9+()\s-]*?$/.test(item.value)) {
				item.defaultValue = item.value;
			} else {
				item.value = item.defaultValue;
			}
		});
	}

	// Вешаем проверку на все инпуты на странице проверку на ввод только цифр и знака +
	inputsPhone.forEach((item) => {
		checkNum(item);
	});

	// Объект с сообщением при отправке данных из формы
	const messageObject = {
		loading: 'Загрузка...',
		success: 'Спасибо! Скоро мы с вами свяжемся!',
		failure: 'Что-то пошло не так...'
	};

	const statusMessage = document.createElement('div');

	statusMessage.classList.add('status');

	function sendData(form, message) {
		let formToSubmit = document.querySelector(form);

		// Не вешать на кнопку! Вешать на саму форму
		// События для отправки данных для модального окна
		formToSubmit.addEventListener('submit', function (event) {
			event.preventDefault();
			this.appendChild(message);
			// Объект FormData создаст данные из формы в формате ключ:значение. Здесь получаем данные из определенной формы
			let formData = new FormData(this);

			// Создаем объект, в который поместим все данные из формы
			let obj = {};
			formData.forEach(function (value, key) {
				obj[key] = value;
			});

			// Превращаем с помощью stringify наш объект в понятный для json код
			let json = JSON.stringify(obj);

			function postData() {
				return new Promise(function (resolve, reject) {
					// Создаем объект, который позволяет асинхронно общаться с сервером
					let request = new XMLHttpRequest();
					// Метод опыт open помогает нам настроить ajax запрос
					// request.open(method, url, async, login, pass);
					request.open('POST', '../server.php');
					// request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
					request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
					request.send(json);

					// Событие, которое отлавливает изменения статуса отправки данных
					request.addEventListener('readystatechange', function () {
						if (request.readyState < 4) {
							message.innerHTML = messageObject.loading;
						} else if (request.readyState === 4 && request.status == 200) {
							resolve();
						} else {
							reject();
						}
					});
				});
			}

			// Функция, которая очищает все инпуты и текстэриа в форме
			const clearInput = () => {
				// Находим в форме все инпуты
				let formInputs = this.querySelectorAll('input, textarea');

				// Если инпуты есть, то очищаем их, если нет, то вернем false
				if (formInputs) {
					for (let i = 0; i < formInputs.length; i++) {
						formInputs[i].value = '';
					}
				} else {
					return false;
				}
			}

			postData()
				.then(() => message.innerHTML = messageObject.success)
				.catch(() => message.innerHTML = messageObject.failure)
				.finally(() => {
					clearInput();
					setTimeout(() => {
						message.remove();
					}, 6000);
				});

		});
	}

	sendData('.main-form', statusMessage);
	sendData('.contact-send', statusMessage);

	// Slider

	let slideIndex = 1,
		slides = document.querySelectorAll('.slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.querySelectorAll('.dot');

	showSlides(slideIndex);

	function showSlides(n) {

		// Если количество слайдов превысило количество реальных сладйов, то возращаемся к первому
		if (n > slides.length) {
			slideIndex = 1;
		}

		// Если количество слайдов меньше 1, то возвращаемся к самому последнему
		if (n < 1) {
			slideIndex = slides.length;
		}

		// Перебираем все слайды и убираем их из видимости
		slides.forEach((item) => {
			item.style.display = 'none';
		});

		// Перебираем все точки и убираем у них класс с активностью
		dots.forEach((item) => {
			item.classList.remove('dot-active');
		});

		// Делаем так, что показывается первый слайд 
		slides[slideIndex - 1].style.display = 'block';

		// Делаем так, что активная точка становится по номеру слайда
		dots[slideIndex - 1].classList.add('dot-active');
	}

	function plusSlides(n) {
		showSlides(slideIndex += n);
	}

	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	prev.addEventListener('click', function () {
		plusSlides(-1);
	});

	next.addEventListener('click', function () {
		plusSlides(1);
	});

	dotsWrap.addEventListener('click', function (event) {
		for (let i = 0; i < dots.length + 1; i++) {
			if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
				currentSlide(i);
			}
		}
	});

	// Calc

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

	// Функция для проверки ввода только целых 
	function checkCalNum(item) {
		item.setAttribute('type', 'text');
		item.addEventListener('input', function () {
			this.value = this.value.replace(/[\D,\+]/, '');
		});
	}

	checkCalNum(persons);
	checkCalNum(restDays);

	console.log(window.navigator.userAgent);
});