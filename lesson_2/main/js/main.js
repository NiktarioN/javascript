'use strict';

let money,
	time,
	appData,
	moneyPerDay;

money = +prompt("Ваш бюджет на месяц в тыс.руб.?", "30");
time = prompt("Введите дату в формате YYYY-MM-DD", "2019-10-30");

appData = {
	moneyData: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,
}

// ЦИКЛ ЧЕРЕЗ FOR 

for (let i = 0; i < 2; i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", "Хлеб"),
		b = +prompt("Во сколько обойдется в тыс. руб?", "1");

	if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
		console.log("Данные об обязательной статье расходов приняты");
		appData.expenses[a] = b;
	} else {
		alert("Извините, но возникла ошибка при вводе данных об обязательной статье расходов. Пожалуйста, введите данные еще раз");
		--i;
	}
}

// ЦИКЛ ЧЕРЕЗ WHILE 

// let i = 0;

// while (i < 2) {
// 	let a = prompt("Введите обязательную статью расходов в этом месяце", "Хлеб"),
// 		b = +prompt("Во сколько обойдется в тыс. руб?", "1");

// 	if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
// 		console.log("Данные об обязательной статье расходов приняты");
// 		appData.expenses[a] = b;
// 	} else {
// 		alert("Извините, но возникла ошибка при вводе данных об обязательной статье расходов. Пожалуйста, введите данные еще раз");
// 		--i;
// 	}
// 	i++;
// }

// ЦИКЛ ЧЕРЕЗ DO

// let i = 0;

// do {
// 	let a = prompt("Введите обязательную статью расходов в этом месяце", "Хлеб"),
// 		b = +prompt("Во сколько обойдется в тыс. руб?", "1");

// 	if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
// 		console.log("Данные об обязательной статье расходов приняты");
// 		appData.expenses[a] = b;
// 	} else {
// 		alert("Извините, но возникла ошибка при вводе данных об обязательной статье расходов. Пожалуйста, введите данные еще раз");
// 		--i;
// 	}
// 	i++;
// } while (i < 2);


appData.moneyPerDay = appData.moneyData / 30;

alert("Ваш бюджет на день: " + appData.moneyPerDay + " тыс. рублей");

if (appData.moneyPerDay < 100) {
	console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
	console.log("Высокий уровень достатка");
} else {
	console.log("Произошла ошибка");
}