$(document).ready(function () {

	// Функции появления подложки и модального окна без animate
	// const showModal = function () {
	// 	$('.overlay').fadeIn("slow");
	// 	$('.modal').slideDown("slow");
	// };
	// $('.main_btna, .main_btn, a[href="#sheldure"').on('click', showModal);

	// const closeModal = function () {
	// 	$('.overlay').fadeOut("slow");
	// 	$('.modal').slideUp("slow");
	// };
	// $('.close').on('click', closeModal);

	// Функции появления подложки и модального окна с animate
	const showModal = function () {
		$('.overlay').fadeIn("slow");
		$('.modal').css("transform", "translateY(-500px)");
		$('.modal').animate({
			height: 'toggle',
			transform: 'translateY(0px)'
		}, 600);
	};
	$('.main_btna, .main_btn, a[href="#sheldure"').on('click', showModal);

	const closeModal = function () {
		$('.overlay').fadeOut("slow");
		$('.modal').slideUp("slow");
	};
	$('.close').on('click', closeModal);
});