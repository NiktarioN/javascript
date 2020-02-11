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