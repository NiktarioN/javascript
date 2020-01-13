// ИТОГОВЫЙ КОНСПЕКТ
// 1) Просто вызов функции - window / undefined
// 2) Метод объекта - this = объект
// 3) Конструктор (new) - this = новый созданный объект
// 4) Указание конкретного контекста - call, apply, bind

// СТАРЫЙ СТАНДАРТ ES6
// // Функция - конструктор
// function User(name, id) {
// 	this.name = name;
// 	this.id = id;
// 	this.human = true;
// 	this.hello = function () {
// 		console.log('Hello! ' + this.name);
// 	};
// }
// User.prototype.exit = function (name) {
// 	console.log('Пользователь ' + this.name + ' ушел');
// }

// let ivan = new User('Ivan', 25),
// 	alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);

// ivan.exit();

// // НОВЫЙ СТАНДАРТ 
// class User {
// 	constructor(name, id) {
// 		this.name = name;
// 		this.id = id;
// 		this.human = true;
// 	}
// 	hello() {
// 		console.log(`Hello! ${this.name}`)
// 	}
// 	exit() {
// 		console.log(`Пользователь ${this.name} ушел`)
// 	}
// }
// let ivan = new User('Ivan', 23),
// 	alex = new User('Alex', 20);
// console.log(ivan);
// console.log(alex);
// ivan.hello();
// alex.hello();

// 1) Просто вызов функции - window / undefined
// function showThis(a, b) {
// 	console.log(this);

// 	function sum() {
// 		console.log(this);
// 		return a + b;
// 	}
// 	console.log(sum());
// }
// showThis(4, 5);
// showThis(6, 6);

// 2) Метод объекта - this = объект
// let obj = {
// 	a: 20,
// 	b: 15,
// 	sum: function () {
// 		console.log(this);

// 		function shout() {
// 			console.log(this);
// 		}
// 		shout();
// 	}
// };
// obj.sum();

// 3) Конструктор (new) - this = новый созданный объект

// let user = {
// 	name: "John"
// };

// function sayName(surname) {
// 	console.log(this);
// 	console.log(this.name + surname);
// }

// call() принимает аргумент только строку
// console.log(sayName.call(user, 'Smith'));
// apply() принимает аргумент только массив
// console.log(sayName.apply(user, ['Snow']));

// function count(number) {
// 	return this * number;
// }

// bind делает контекст вызова тот, что мы вписыаем
// let double = count.bind(2);
// console.log(double(3));
// console.log(double(5));

// 4) Указание конкретного контекста - call, apply, bind

let btn = document.querySelector('button');

btn.addEventListener('click', function () {
	console.log(this);
	this.style.padding = '20px';

	function showThis() {
		console.log(this);
	}
	showThis();
});