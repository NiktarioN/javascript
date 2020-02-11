/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

	const checkCalNum = __webpack_require__(/*! ./checkcalnum */ "./js/modules/checkcalnum.js");

	checkCalNum(persons);
	checkCalNum(restDays);
}

module.exports = calc;

/***/ }),

/***/ "./js/modules/checkMobileBrowser.js":
/*!******************************************!*\
  !*** ./js/modules/checkMobileBrowser.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const checkMobileBrowser = () => {
	let mobileBrowser;
	//Проверка на конкретный мобильный браузер
	let isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		//Проверка на любой мобильный браузер
		any: function () {
			return (isMobile.Android() || isMobile.BlackBerry() ||
				isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	}; // Возврат функцией true, если браузер мобильный
	if (isMobile.any()) {
		mobileBrowser = true;
	}

	return mobileBrowser;
};

module.exports = checkMobileBrowser;

/***/ }),

/***/ "./js/modules/checkOldBrowsers.js":
/*!****************************************!*\
  !*** ./js/modules/checkOldBrowsers.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./js/modules/checkcalnum.js":
/*!***********************************!*\
  !*** ./js/modules/checkcalnum.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const checkCalNum = (item) => {
	item.setAttribute('type', 'text');
	item.addEventListener('input', function () {
		this.value = this.value.replace(/[\D,\+]/, '');
	});
}

module.exports = checkCalNum;

/***/ }),

/***/ "./js/modules/checknum.js":
/*!********************************!*\
  !*** ./js/modules/checknum.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const checkNum = () => {
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
}

module.exports = checkNum;

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

const forms = () => {

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
}

module.exports = forms;

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const modal = () => {

	const checkMobileBrowser = __webpack_require__(/*! ./checkMobileBrowser */ "./js/modules/checkMobileBrowser.js"),
		checkOldBrowsers = __webpack_require__(/*! ./checkOldBrowsers */ "./js/modules/checkOldBrowsers.js");

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

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

const slider = () => {
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
}

module.exports = slider;

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

const tabs = () => {
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
}

module.exports = tabs;

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

const timer = () => {
	const deadLine = '2020-02-20';

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
}

module.exports = timer;

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', () => {

	'use strict';

	const calc = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js"),
		checknum = __webpack_require__(/*! ./modules/checknum */ "./js/modules/checknum.js"),
		forms = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js"),
		modal = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js"),
		slider = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js"),
		tabs = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js"),
		timer = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");

	calc();
	checknum();
	forms();
	modal();
	slider();
	tabs();
	timer();

});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map