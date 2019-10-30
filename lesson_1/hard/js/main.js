'use strict';

let num = 33721;

let numMultiplication = num.toString().split('').reduce((a, b) => {
	return +(a * b);
});

alert("Произведение цифр числа " + num + " равно: " + numMultiplication);

let numPow = numMultiplication ** 3;

alert("Возведение числа " + numMultiplication + " в степень 3 равно " + numPow.toString().substring(0, 8) + ", а первые два числа равны " + numPow.toString().substring(0, 2));