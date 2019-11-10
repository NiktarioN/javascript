'use strict';

// Вывести в столбик все простые числа от 1 до 100. Рядом с каждым числом написать оба делителя данного числа. Например: “Делители этого числа: 1 и n”


// Функция, которая проверяет является ли число простым
function getSimple(num) {
	if (num < 2) return false;
	for (var i = 2; i < num; i++) {
		if (num % i == 0)
			return false;
	}
	return true;
}

// Главная функция для нахождения простых чисел в диапазоне от start до end
function searhSimple(start, end) {
	let result = [];

	if (typeof (start) === 'number' && typeof (end) === 'number' && start <= end && start > 0 && end > 0 && Number.isInteger(start) && Number.isInteger(end)) {
		for (let i = start; i <= end; i++) {
			if (getSimple(i) == true) {
				result.push(i);
			}
		}
		for (let j = 0; j < result.length; j++) {
			document.body.innerHTML += "Делители у числа " + result[j].toString().bold() + ": 1 и " + result[j].toString().bold() + "<br>";
		}
		return result;
	} else {
		alert("Вы неправильно заполнили данные");
	}
}
searhSimple(1, 100);