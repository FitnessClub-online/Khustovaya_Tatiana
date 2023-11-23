var burger = document.querySelector(".burger");
var headerTop = document.querySelector(".header__top");
var isMenuOpen = false;

burger.addEventListener("click", function (e) {
  e.preventDefault();
  isMenuOpen = !isMenuOpen;
  headerTop.classList.toggle("header__top-open", isMenuOpen);
});

// Добавляем обработчик события на весь документ
document.addEventListener("click", function (e) {
  // Проверяем, был ли клик выполнен внутри бургер-меню или на самом бургере
  if (!headerTop.contains(e.target) && e.target !== burger) {
    isMenuOpen = false;
    headerTop.classList.remove("header__top-open");
  }
});

// --------------------

$(function () {
  $(".program__acc-link").on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("program__acc-link--active")) {
      $(this).removeClass("program__acc-link--active");
      $(this).children(".program__acc-text").slideUp();
    } else {
      $(".program__acc-link").removeClass("program__acc-link--active");
      $(".program__acc-text").slideUp();
      $(this).addClass("program__acc-link--active");
      $(this).children(".program__acc-text").slideDown();
    }
  });
});
$(function () {
  $(".questions__acc-link").on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("questions__acc-link--active")) {
      $(this).removeClass("questions__acc-link--active");
      $(this).children(".questions__acc-text").slideUp();
    } else {
      $(".questions__acc-link").removeClass("questions__acc-link--active");
      $(".questions__acc-text").slideUp();
      $(this).addClass("questions__acc-link--active");
      $(this).children(".questions__acc-text").slideDown();
    }
  });
});

// ===========================mentorImagesSwiper====================
// ===========================mentorImagesSwiper====================

const mentorImagesSwiper = new Swiper("#mentor-swiper .swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 2000, // Задержка между слайдами в миллисекундах (в данном случае, 3 секунды)
    disableOnInteraction: true, // Оставить автоплей после взаимодействия пользователя (например, при перелистывании слайдов)
  },
  // Navigation arrows
  navigation: {
    nextEl: ".mentor__btn-next",
    prevEl: ".mentor__btn-prev",
  },
});

const mentorQuestionsSwiper = () => {
  const results = document.getElementById("mentor-swiper-results");

  const cardsMentor = dataMentor.map(
    (review) => `
    <div class="swiper-slide">
      <img class="mentor__swiper-img" height="280px" src="${review}" alt="#">
    </div>
  `
  );

  // Развернуть массив cardsMentor
  const reversedCards = cardsMentor.reverse();

  results.innerHTML = reversedCards.join("");
};

mentorQuestionsSwiper();

// ===========================ReviewsSwiper====================
// ===========================ReviewsSwiper====================

const swiper = new Swiper("#reviews-swiper .swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  spaceBetween: 20,
  slidesPerView: 2,
  // Navigation arrows
  navigation: {
    nextEl: ".btn__next",
    prevEl: ".btn__prev",
  },
  breakpoints: {
    900: {
      slidesPerView: 3,
      spaceBetween: 10,
    },

    500: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
  },
});

const generateReviewsSwiper = () => {
  const results = document.getElementById("reviews-swiper-results");

  const cardsArr = dataReviews.map(
    (review) => `
    <div class="swiper-slide">
    <img class="reviews__swiper-img"  src="${review}" alt="#">
    </div>
  `
  );

  results.innerHTML = cardsArr.join("");
};

generateReviewsSwiper();

///Скрипт плавного перехода к нужному блоку --------------------------------------------------------

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute("href");
    const offset = parseInt(anchor.getAttribute("data-offset")) || 0; // парсим значение атрибута или задаем 0, если атрибут не задан
    const targetElement = document.querySelector("" + blockID);
    const targetPosition =
      targetElement.getBoundingClientRect().top + window.pageYOffset; // вычисляем положение целевого элемента относительно верхней границы видимой области
    const offsetPosition = targetPosition - offset; // вычисляем позицию, на которую нужно скролить
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
}
