'use strict';

let money,
	time,
	appData,
	moneyPerDay;

function start() {
	money = +prompt("Ваш бюджет на месяц в тыс.руб.?", "30");
	while (isNaN(money) || money == '' || money == null) {
		money = +prompt("Ваш бюджет на месяц в тыс.руб.?", "30");
	}
	time = prompt("Введите дату в формате YYYY-MM-DD", "2019-10-30");
}
start();

appData = {
	moneyData: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true,
}

function chooseExpenses() {
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
}

function detectDayBudget() {
	appData.moneyPerDay = (appData.moneyData / 30).toFixed();
	alert("Ваш бюджет на день: " + appData.moneyPerDay + " тыс. рублей");
}

function detectLevel() {
	if (appData.moneyPerDay < 100) {
		console.log("Минимальный уровень достатка");
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		console.log("Средний уровень достатка");
	} else if (appData.moneyPerDay > 2000) {
		console.log("Высокий уровень достатка");
	} else {
		console.log("Произошла ошибка");
	}
}

function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt("Какова сумма накоплений?", "2000"),
			percent = +prompt("Под какой процент?", "10");

		appData.monthIncome = (save / 100 / 12 * percent).toFixed(3);
		alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
	}
}

function chooseOptExpenses() {
	for (let i = 0; i < 3; i++) {
		let optional = prompt("Статья необязательных расходов?", "Бургер");
		if ((typeof (optional)) === 'string' && (typeof (optional) != null) && optional != ' ' && optional.length < 50) {
			appData.optionalExpenses[i] = optional;
		} else {
			alert("Извините, но возникла ошибка при вводе данных об необязательной статье расходов. Пожалуйста, введите данные еще раз");
			--i;
		}
	}
}

chooseExpenses();
detectDayBudget();
detectLevel();
checkSavings();
chooseOptExpenses();