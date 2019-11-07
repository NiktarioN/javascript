'use strict';

// function isFriendly(num1, num2) {
// 	let sum1 = getDivisorsSum(num1),
// 		sum2 = getDivisorsSum(num2);

// 	if (sum1 == num2 && sum2 == num1) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

function isFriendly(start, end) {
	let result = [],
		sum1 = 0;

	for (let i = start; i <= end; i++) {
		sum1 = getDivisorsSum(i);
		if (sum1 == i) {
			result.push(i);
		} else {}
	}
	return result;
}
console.log(isFriendly(1, 100));



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