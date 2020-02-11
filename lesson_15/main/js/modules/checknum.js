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