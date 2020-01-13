// Выведите на экран правильное сообщение, которое берет значение из input

let age = document.getElementById('age');

function showUser(surname, name) {
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

showUser.call(age, 'Trofimov', 'Nikita');
showUser.apply(age, ['Trofimov', 'Nikita']);

let justDoIt = showUser.bind(age);

justDoIt('Trofimov', 'Nikita');