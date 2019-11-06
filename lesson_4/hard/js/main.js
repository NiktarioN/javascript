'use strict';

// Многомерные массивы ( [ [], [], ..] ) иногда называют матрицами. Напишите функцию, которая будет спрашивать у пользователя сколько массивов включить во внутрь arr, заполняет их несколькими произвольными числами (не больше 5) и выводит сумму элементов этого массива.

let arr = [];

// Функция, где спрашиваем количество массивов, которые хотим добавить в массив
function countArrs() {
	let num;
	while (isNaN(num) || num == '' || num == null || num <= 0) {
		num = +prompt("Сколько массивов включить в наш массив?");
	}
	return num;
}

// Функция рандомных чисел от min до max + 1
function getRandomNum(min, max) {
	return Math.floor(min + Math.random() * (max + 1 - min));
}

// Функция заполнения массива данными
function fillArr() {
	let countArr = countArrs();

	for (let i = 0; i < countArr; i++) {
		let randomElemArr = getRandomNum(1, 2);
		arr[i] = [];

		for (let j = 0; j < randomElemArr; j++)
			arr[i][j] = getRandomNum(0, 50);
	}
}
fillArr();
console.log(arr);

// Функция подсчета суммы всех элементов массива
function sumArrs(array) {
	let result = 0;

	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array[i].length; j++) {
			result += array[i][j];
		}
	}
	return result;
}

console.log('Сумма элементов массива равна: ' + sumArrs(arr));