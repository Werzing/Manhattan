

/* ========================header=========================== */

let posters = document.getElementsByClassName("posters__buttons__button")
let wall__posters = document.getElementById("wall__posters")
function chenge_posters_poster() {
	for (poster of posters) {
		if (!poster.classList.contains("size")) {
			poster.classList.add("size")
			wall__posters.classList.remove("wall__posters__revers")
			continue
		}
		if (poster.classList.contains("size")) {
			poster.classList.remove("size")
			wall__posters.classList.add("wall__posters__revers")
			continue
		}
	}
}

/* ========================================================= */


/* =========================Slider============================= */
let slideIndex = 1;
let n =1
let btnleft = document.getElementById("left");
let btnright = document.getElementById("right");
function nextSlide() {
	showSlides(slideIndex += 1);
}
function previousSlide() {
	showSlides(slideIndex -= 1);
}
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
		
	/* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
	let slides = document.getElementsByClassName("item");

	/* Проверяем количество слайдов: */
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}

	/* Проходим по каждому слайду в цикле for: */
	for (let slide of slides) {
		slide.style.display = "none";
	}
	/* Делаем элемент блочным: */
	slides[slideIndex - 1].style.display = "flex";
}

someFunc()
function someFunc() {
	// Выполняем действие, если ширина меньше 1000px
	var w = document.documentElement.clientWidth;
	if (w < 700) {
		console.log("ldkgj")
		/* Вызываем функцию, которая реализована ниже: */
		showSlides(slideIndex);

		/* Увеличиваем индекс на 1 — показываем следующий слайд: */
		nextSlide()

		/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
		previousSlide()

		/* Устанавливаем текущий слайд: */
		currentSlide(n)

		/* Функция перелистывания: */
		showSlides(n)
		btnleft.style.display = "block"
		btnright.style.display = "block"
	}
	else if (w>700){
		let slides = document.getElementsByClassName("item");
		for (let slide of slides) {
			slide.style.display = "flex";
		}
		/* Делаем элемент блочным: */
		slides[slideIndex - 1].style.display = "flex";
		btnleft.style.display = "none"
		btnright.style.display = "none"

	}
}

// Выполняем заново при изменении размера окна
window.addEventListener('resize', function () {
	console.log("ыповлр")
	someFunc();
});














/* Функция перелистывания: */
function showSlides(n) {
	/* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
	let slides = document.getElementsByClassName("item");

	/* Проверяем количество слайдов: */
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}

	/* Проходим по каждому слайду в цикле for: */
	for (let slide of slides) {
		slide.style.display = "none";
	}
	/* Делаем элемент блочным: */
	slides[slideIndex - 1].style.display = "flex";
}



/* ========================================================= */


/* =========================teh============================= */
(function () {
	var d = document,
		accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
		setAria,
		setAccordionAria,
		switchAccordion,
		touchSupported = ('ontouchstart' in window),
		pointerSupported = ('pointerdown' in window);

	skipClickDelay = function (e) {
		e.preventDefault();
		e.target.click();
	}

	setAriaAttr = function (el, ariaType, newProperty) {
		el.setAttribute(ariaType, newProperty);
	};
	setAccordionAria = function (el1, el2, expanded) {
		switch (expanded) {
			case "true":
				setAriaAttr(el1, 'aria-expanded', 'true');
				setAriaAttr(el2, 'aria-hidden', 'false');
				break;
			case "false":
				setAriaAttr(el1, 'aria-expanded', 'false');
				setAriaAttr(el2, 'aria-hidden', 'true');
				break;
			default:
				break;
		}
	};
	//function
	switchAccordion = function (e) {
		console.log("triggered");
		e.preventDefault();
		var thisAnswer = e.target.parentNode.nextElementSibling;
		var thisQuestion = e.target;
		if (thisAnswer.classList.contains('is-collapsed')) {
			setAccordionAria(thisQuestion, thisAnswer, 'true');
		} else {
			setAccordionAria(thisQuestion, thisAnswer, 'false');
		}
		thisQuestion.classList.toggle('is-collapsed');
		thisQuestion.classList.toggle('is-expanded');
		thisAnswer.classList.toggle('is-collapsed');
		thisAnswer.classList.toggle('is-expanded');

		thisAnswer.classList.toggle('animateIn');
	};
	for (var i = 0, len = accordionToggles.length; i < len; i++) {
		if (touchSupported) {
			accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
		}
		if (pointerSupported) {
			accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
		}
		accordionToggles[i].addEventListener('click', switchAccordion, false);
	}
})();

/* ========================================================= */



