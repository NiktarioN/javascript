// У вас есть:
// function getFriendlyNumbers(start, end) {}

// Необходимо реализовать функцию которая подсчитывает дружественные числа в заданном диапазоне;
// Сигнатура функции - getFriendlyNumbers(start, end);
// start - начало диапазона;
// end - конец диапазона;

// Функция должна возвращать массив из пар дружественных чисел.
// Например:

// Для диапазона от 1 до 300 функция должна вернуть [[220, 284]]
// Для диапазона от 1 до 100 функция должна вернуть пустой массив. []
// Для диапазона от 284 до 500 функция должна вернуть пустой массив. []
// Для диапазона от 1 до 1211 функция должна вернуть [[220, 284], [1184, 1210]]
// И так далее по диапазонам.

// В случае, если переданы не правильные аргументы (неправильный тип данных (только числа!), start > end, отрицательный диапазон, дробные числа), функция должна вернуть false.
// Числа должны находится в правильном порядке. [284, 220] - неправильно. Пары дружественных чисел не должны повторяться. [[220, 284], [284, 220]] - неправильно.


'use strict';

// Функция, которая проверяет на дружественность 2 числа. Возвращает true если числа дружественны и false если нет
function isFriendly(num1, num2) {
	let sum1 = getDivisorsSum(num1),
		sum2 = getDivisorsSum(num2);

	if (sum1 == num2 && sum2 == num1) {
		return true;
	} else {
		return false;
	}
}

// Общая функция для сразу двух действий: поиска делителей и поска суммы этих делителей. Возвращает итоговое значение суммы делителей числа
function getDivisorsSum(num) {
	return getSum(getDivisors(num));
}

// Функция поиска делителей числа. Возращает массив из делителей числа
function getDivisors(num) {
	let arr = [];
	for (let i = 1; i < num; i++) {
		if (num % i == 0) {
			arr.push(i);
		}
	}
	return arr;
}

// Функция суммы делителей числа. Возвращаем значение суммы числа
function getSum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

// Функция, которая соединяет все другие функции и возвращает решение задачи
function getFriendlyNumbers(start, end) {
	let result = [];
	if (typeof (start) === 'number' && typeof (end) === 'number' && start <= end && start > 0 && end > 0 && Number.isInteger(start) && Number.isInteger(end)) {
		for (let i = start; i < end; i++) {
			for (let j = i + 1; j <= end; j++) {
				if (isFriendly(i, j) == true) {
					result.push([i, j]);
				} else if (result == []) {
					return result;
				}
			}
		}
		return result;
	} else {
		return false;
	}
}

module.exports = {
	firstName: 'Name',
	secondName: 'Surname',
	task: getFriendlyNumbers
}