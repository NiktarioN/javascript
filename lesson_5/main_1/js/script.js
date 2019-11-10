'use strict';

// Восстановить порядок в меню, добавить пятый пункт
let menu = document.querySelector('.menu'),
	menuItems = document.querySelectorAll('.menu-item');

menu.insertBefore(menuItems[2], menuItems[1]);

let menuNewPost = document.createElement('li');
menuNewPost.classList.add('menu-item');
menuNewPost.textContent = "Пятый элемент";
menu.appendChild(menuNewPost);

// Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")
document.querySelector('.title').textContent = "Мы продаем только подлинную технику Apple";

// Заменить картинку заднего фона на другую из папки img
document.body.style.background = 'url(img/apple_true.jpg) center center';

// Удалить рекламу со страницы
let column = document.querySelectorAll('.column'),
	adv = document.querySelector('.adv');

column[1].removeChild(adv);

// Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
let answer = prompt("Как вы относитесь к технике Apple", "Нейтрально :)");

document.querySelector('#prompt').textContent = answer;