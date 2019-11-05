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
	chooseExpenses: function () {
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
	},
	detectDayBudget: function () {
		appData.moneyPerDay = (appData.moneyData / 30).toFixed();
		alert("Ваш бюджет на день: " + appData.moneyPerDay + " тыс. рублей");
	},
	detectLevel: function () {
		if (appData.moneyPerDay < 100) {
			console.log("Минимальный уровень достатка");
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log("Средний уровень достатка");
		} else if (appData.moneyPerDay > 2000) {
			console.log("Высокий уровень достатка");
		} else {
			console.log("Произошла ошибка");
		}
	},
	checkSavings: function () {
		if (appData.savings == true) {
			let save = +prompt("Какова сумма накоплений?", "2000"),
				percent = +prompt("Под какой процент?", "10");

			appData.monthIncome = (save / 100 / 12 * percent).toFixed(3);
			alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
		}
	},
	chooseOptExpenses: function () {
		for (let i = 0; i < 3; i++) {
			let optional = prompt("Статья необязательных расходов?", "Бургер");
			if ((typeof (optional)) === 'string' && (typeof (optional) != null) && optional != '' && optional.length < 50) {
				appData.optionalExpenses[i] = optional;
			} else {
				alert("Извините, но возникла ошибка при вводе данных об необязательной статье расходов. Пожалуйста, введите данные еще раз");
				--i;
			}
		}
	},
	chooseIncome: function () {
		for (let i = 0; i < 1; i++) {
			let items = prompt("Что принесет дополнительный доход? (перечислите через запятую)", "Повышение стоимости работ, Новая работа, Меньше кушать");
			if (typeof (items) === 'string' && (typeof (items) != null && items != '')) {
				appData.income = items.split(', ');
				appData.income.push(prompt("Может что-то еще?", "Холодный обзвон"));
				appData.income.sort();
			} else {
				alert('Извините, но возникла ошибка при вводе данных об дополнительном доходе. Пожалуйста, введите данные еще раз')
					--i;
			}
		}
		document.body.innerHTML += "Способы дополнительного заработка:" + "<br>";
		appData.income.forEach((item, i) => {
			document.body.innerHTML += i + 1 + ': ' + item + '<br>';
		});
	}
}

console.log('Наша программа включает в себя данные: ');
for (let key in appData) {
	console.log(key + ": " + appData[key]);
}