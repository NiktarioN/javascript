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

for (let i = 0; i < 2; i++) {
	appData.expenses[prompt("Введите обязательную статью расходов в этом месяце", "Хлеб")] = +prompt("Во сколько обойдется в тыс. руб?", "1");
}

moneyPerDay = appData.moneyData / 30;

alert("Ваш бюджет на день: " + moneyPerDay + " тыс. рублей");