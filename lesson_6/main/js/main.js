'use strict';

let startBtn = document.querySelector('#start'),
	budgetValue = document.querySelector('.budget-value'),
	daybudgetValue = document.querySelector('.daybudget-value'),
	levelValue = document.querySelector('.level-value'),
	expensesValue = document.querySelector('.expenses-value'),
	optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
	incomeValue = document.querySelector('.income-value'),
	monthsavingsValue = document.querySelector('.monthsavings-value'),
	yearsavingsValue = document.querySelector('.yearsavings-value'),
	expensesItem = document.querySelectorAll('.expenses-item'),
	expensesBtn = document.querySelector('.expenses-item-btn'),
	optionalExpensesBtn = document.querySelector('.optionalexpenses-btn'),
	budgetCountBtn = document.querySelector('.count-budget-btn'),
	optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
	percentValue = document.querySelector('.choose-percent'),
	dayValue = document.querySelector('.day-value'),
	monthValue = document.querySelector('.month-value'),
	yearValue = document.querySelector('.year-value'),
	items = document.querySelectorAll('.data > button, .data > input, #savings'),
	money,
	time,
	appData;


// Отключаем все кнопки, поля ввода и чек - боксы
items.forEach((item) => {
	item.setAttribute('disabled', '');
});

// Функция для проверки ввода только номеров
function checkNum(item) {
	item.addEventListener('input', () => {
		if (/^[0-9]*?$/.test(item.value)) {
			item.defaultValue = item.value;
		} else {
			item.value = item.defaultValue;
		}
	});
}

// Функция для проверки ввода только букв
function checkWord(item) {
	item.addEventListener('input', () => {
		item.value = item.value.replace(/[^а-яё]/, '');
	});
}


// Событие для кнопки, которая запускает программу
startBtn.addEventListener('click', function () {
	money = +prompt("Ваш бюджет на месяц в месяц в руб.?", "30000");
	while (isNaN(money) || money == '' || money == null) {
		money = +prompt("Ваш бюджет на месяц в руб.?", "30000");
	}
	time = prompt("Введите дату в формате YYYY-MM-DD", "2019-10-30");
	appData.moneyData = money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed() + ' руб.';
	yearValue.value = new Date(Date.parse(time)).getFullYear();
	monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
	dayValue.value = new Date(Date.parse(time)).getDate();
	// Снова включаем все кнопки, поля ввода и чек-боксы
	items.forEach((item) => {
		item.removeAttribute('disabled', '');
	});
});

// Проверка на ввод только цифр в обязательных расходах
expensesItem.forEach((item, i) => {
	if (i % 2) {
		checkNum(item);
	}
});

// Событие для обязательных расходов
expensesBtn.addEventListener('click', function () {
	let sum = 0;

	for (let i = 0; i < expensesItem.length; i++) {
		let a = expensesItem[i].value,
			b = +expensesItem[++i].value;

		if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
			console.log("Данные об обязательной статье расходов приняты");
			appData.expenses[a] = b;
			sum += b;
		} else {
			alert("Извините, но возникла ошибка при вводе данных об обязательной статье расходов. Пожалуйста, введите данные еще раз");
			--i;
		}
	}
	expensesValue.textContent = sum + ' руб.';
	appData.sumExp = sum;
	if (sum > appData.moneyData) {
		alert('Сумма ваших расходов превышают доходы. Пожалуйста, возвращайтесь когда у вас все будет в порядке со средствами');
		expensesValue.textContent = '';
	}
});

// Проверка на ввод только букв в необязательных расходах
optionalExpensesItem.forEach((item) => {
	checkWord(item);
});

// Событие для необязательных расходов
optionalExpensesBtn.addEventListener('click', function () {
	for (let i = 0; i < optionalExpensesItem.length; i++) {
		let optional = optionalExpensesItem[i].value;
		if ((typeof (optional)) === 'string' && (typeof (optional) != null) && optional != '' && optional.length < 50) {
			appData.optionalExpenses[i] = optional;
			optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
		} else {
			// alert("Извините, но возникла ошибка при вводе данных об необязательной статье расходов. Пожалуйста, введите данные еще раз");
			// --i;
		}
	}
});

// Событие для расчета дневного бюджета
budgetCountBtn.addEventListener('click', function () {
	if (appData.moneyData != undefined) {
		if (appData.sumExp != undefined) {
			appData.moneyPerDay = ((appData.moneyData - appData.sumExp) / 30).toFixed();
			daybudgetValue.textContent = appData.moneyPerDay + ' руб.';

			if (appData.moneyPerDay < 100) {
				levelValue.textContent = "Минимальный уровень достатка";
			} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
				levelValue.textContent = "Средний уровень достатка";
			} else if (appData.moneyPerDay > 2000) {
				levelValue.textContent = "Высокий уровень достатка";
			} else {
				levelValue.textContent = "Произошла ошибка";
			}
		} else {
			daybudgetValue.textContent = "Произошла ошибка";
			alert('Для расчета дневного бюджета сначала введите все обязательные расходы');
		}
	} else {
		daybudgetValue.textContent = "Произошла ошибка";
		alert('Для расчета дневного бюджета сначала введите все необходимые данные после нажатия кнопки "Начать расчет"');
	}
});

// Событие для статей возможного дохода
incomeItem.addEventListener('input', function () {
	let items = incomeItem.value;
	appData.income = items.split(', ');
	incomeValue.textContent = appData.income;
});

// Событие для накоплений
checkSavings.addEventListener('click', function () {
	if (appData.savings == true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});

// Рассчет сумы накоплений
sumValue.addEventListener('input', function () {
	if (appData.savings == true) {
		let sum = +sumValue.value,
			percent = +percentValue.value;

		appData.monthIncome = (sum / 100 / 12 * percent).toFixed(1);
		appData.yearIncome = (sum / 100 * percent).toFixed(1);

		monthsavingsValue.textContent = appData.monthIncome + ' руб.';
		yearsavingsValue.textContent = appData.yearIncome + ' руб.';
	}
});

// Рассчет суммы накоплений
percentValue.addEventListener('input', function () {
	if (appData.savings == true) {
		let sum = +sumValue.value,
			percent = +percentValue.value;

		appData.monthIncome = (sum / 100 / 12 * percent).toFixed(1);
		appData.yearIncome = (sum / 100 * percent).toFixed(1);

		monthsavingsValue.textContent = appData.monthIncome;
		yearsavingsValue.textContent = appData.yearIncome;
	}
});

// Глобальный объект
appData = {
	moneyData: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
}