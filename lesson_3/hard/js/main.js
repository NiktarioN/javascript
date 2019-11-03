'use strict';

// Task 1
let str = 'урок-3-был слишком легким';

str = str[0].toUpperCase() + str.slice(1);

console.log(str);
// Самый правильный вариант, т.к может работать с отриц. значениями

// str = str[0].toUpperCase() + str.substring(1);

// str = str[0].toUpperCase() + str.substr(1);

// Task 2
str = str.replace(/-/g, " ");

console.log(str);

// Task 3
str = str.split(' ');
str = str[str.length - 1].replace('им', 'о');

console.log(str);

// Task 4
let arr = [20, 33, 1, 'Человек', 2, 3],
	countThis,
	sumCubes = 0;

countThis = () => {
	for (let i = 0; i < arr.length; i++) {
		if ((typeof (arr[i]) === 'number')) {
			sumCubes += Math.pow(arr[i], 3);
		} else {
			continue;
		}
	}
	return sumCubes = Math.sqrt(sumCubes).toFixed(3);
}

console.log(countThis());

// Task 5
function changeText(e) {
	if (typeof (e) == 'string') {
		e = e.trim();
		if (e.length > 50) {
			e = e.slice(0, 50) + "...";
		}
	} else {
		alert("Пожалуйста, введите строчное значение");
	}
	return e;
}

console.log(changeText("             Туман за окном, почти непроглядная белая пелена - идёт снег! Он покрыл землю, крыши и ветви деревьев, он пришёл на смену неприятному холоду и льду предшествующих дней, он зовёт гулять - погрузиться в этот влажный, полный белых пушинок воздух и идти, идти, идти - дыша свежестью             и превращаясь в сугроб, ловя момент - ибо сия прелесть недолговечна, и уже очень скоро будет либо мороз, либо тихая погода с серым и низким зимним небом, либо - месиво из снега, воды и грязи.                "));