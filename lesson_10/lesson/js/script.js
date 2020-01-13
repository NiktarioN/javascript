let name = "Ivan",
	age = 30,
	mail = 'ex@mail.ru';

// Без интерполяции
// document.write('Пользователю ' + name + ' ' + age + ' лет. Его почтовый адрес: ' + mail); 

// С интерполяцией
document.write(`Пользователю ${name} ${age} лет. Его почтовый адрес: ${mail}`);

// Пример с var. Лучше использовать let и const
function makeArrey() {
	var items = [];

	for (var i = 0; i < 10; i++) {
		var item = function () {
			console.log(i);
		};
		items.push(item);
	}
	return items;
}

var arr = makeArrey();

arr[1]();
arr[3]();
arr[7]();

let fun = () => {
	console.log(this);
};
fun();

// Стрелочная функция анонимна и мы не можем задать ей имя. Можем только поместить в переменную 
// Мы не сможем управлять обработчиками событий
// Не сможем запускать функцию внутри себя, т.е. делать рекурсию
// Она не имеет своего контекста вызова. Если вызвать this, то будет window
// Она свой контекст берет из родителя. Если вызывать из объекта, то будет this как функция

let btn = document.querySelector('button');

btn.addEventListener('click', function () {
	let show = () => {
		console.log(this);
	};
	show();
});

function calcOrDouble(number, basis = 2) {
	// basis = 2; ES6
	// basis = basis || 2; ES5
	console.log(number * basis);
}
calcOrDouble(3, 5);
calcOrDouble(6);

class Rectangle {
	constructor(height, width = 20) {
		this.height = height;
		this.width = width;
	}
	calcArea() {
		return this.height * this.width;
	}
}

const square = new Rectangle(10, 10);

console.log(square.calcArea());

let video = ['youtube', 'vimeo', 'rutube'],
	blogs = ['wordpress', 'livejournal', 'blogger'],
	interner = [...video, ...blogs, 'vk', 'facebook'];

// ... - Оператор разворота

console.log(interner);

function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}
let numbers = [2, 5, 7];

log(...numbers);