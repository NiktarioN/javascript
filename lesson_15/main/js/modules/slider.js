const slider = () => {
	let slideIndex = 1,
		slides = document.querySelectorAll('.slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.querySelectorAll('.dot');

	showSlides(slideIndex);

	function showSlides(n) {

		// Если количество слайдов превысило количество реальных сладйов, то возращаемся к первому
		if (n > slides.length) {
			slideIndex = 1;
		}

		// Если количество слайдов меньше 1, то возвращаемся к самому последнему
		if (n < 1) {
			slideIndex = slides.length;
		}

		// Перебираем все слайды и убираем их из видимости
		slides.forEach((item) => {
			item.style.display = 'none';
		});

		// Перебираем все точки и убираем у них класс с активностью
		dots.forEach((item) => {
			item.classList.remove('dot-active');
		});

		// Делаем так, что показывается первый слайд 
		slides[slideIndex - 1].style.display = 'block';

		// Делаем так, что активная точка становится по номеру слайда
		dots[slideIndex - 1].classList.add('dot-active');
	}

	function plusSlides(n) {
		showSlides(slideIndex += n);
	}

	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	prev.addEventListener('click', function () {
		plusSlides(-1);
	});

	next.addEventListener('click', function () {
		plusSlides(1);
	});

	dotsWrap.addEventListener('click', function (event) {
		for (let i = 0; i < dots.length + 1; i++) {
			if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
				currentSlide(i);
			}
		}
	});
}

module.exports = slider;