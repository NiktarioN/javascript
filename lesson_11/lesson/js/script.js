// let options = {
// 	width: 1366,
// 	height: 768,
// 	background: 'red',
// 	font: {
// 		size: '16px',
// 		color: '#fff'
// 	}
// };

// console.log(JSON.parse(JSON.stringify(options)));

let inputRub = document.getElementById('rub'),
	inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
	// Главный объект для работы с AJAX запросами
	let request = new XMLHttpRequest();

	// Метод опыт open помогает нам настроить ajax запрос
	// request.open(method, url, async, login, pass);
	request.open('GET', 'js/current.json');
	request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	request.send();

	// status - код получаем
	// statusText - текстовый ответ
	// responseText - текст ответа сервера / response
	// readyState

	request.addEventListener('readystatechange', function () {
		if (request.readyState === 4 && request.status == 200) {
			let data = JSON.parse(request.response);

			inputUsd.value = (inputRub.value / data.usd).toFixed(5);
		} else {
			inputUsd.value = "Что-то пошло не так!";
		}
	});

});