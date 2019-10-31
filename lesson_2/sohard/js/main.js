'use strict';

let myString = "artificial",
	btnClick1 = document.querySelector('.btn_task1'),
	btnClick2 = document.querySelector('.btn_task2');

btnClick1.onclick = () => {
	let myStringReverse = myString.toString().split('').reverse().join('');

	alert("Перевернутое слово от " + myString + " будет " + myStringReverse);
}

btnClick2.onclick = () => {
	let newString = myString.toString(),
		myStringReverse = "";

	for (let i = newString.length - 1; i >= 0; i--) {
		myStringReverse += newString[i];
		console.log(myStringReverse);
	}

	alert("Перевернутое слово от " + myString + " будет " + myStringReverse);
}