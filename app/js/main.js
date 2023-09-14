
document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.js-choice');
  elements.forEach((element) => {
    const choices = new Choices(element, {
      searchEnabled: false,
      choices: [
        {
          value: 'UA',
          label: 'UA',
          selected: window.location.pathname === '/index-ua.html',
        },
        {
          value: 'EN',
          label: 'EN',
          selected: window.location.pathname === '/index.html' || window.location.pathname === '/',
        },
      ]
    });

    element.addEventListener(
      'choice',
      function (event) {
        if (event.detail.choice.value === 'UA') {
          window.location.href = "index-ua.html";
        } else {
          window.location.href = "/";
        }

      },
      false,
    );
  })

  let gallaryItems = document.querySelector('.gallery__inner')

  if (gallaryItems) {
    var mixer = mixitup(gallaryItems, {
      load: {
        filter: '.all'
      },
      callbacks: {
        onMixEnd: function (state) {
          // Визначаємо активний контейнер
          var activeContainer = state.activeFilter.selector;

          // Знайдіть всі активні контейнери і видаліть клас "active-container" з попереднього активного контейнера
          gallaryItems.querySelectorAll('.gallery__items').forEach(function (item) {
            item.classList.remove('active-container');
          });

          // Додаємо клас "active-container" до активного контейнера
          gallaryItems.querySelectorAll(activeContainer).forEach(function (item) {
            item.classList.add('active-container');
          });
        }
      }

    })
  }

  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      990: {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true
      }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

  })



  Fancybox.bind('[data-fancybox="gallery-1"]', {
    // Your custom options
  });

  Fancybox.bind('[data-fancybox="gallery-2"]', {
    // Your custom options
  });

  Fancybox.bind('[data-fancybox="gallery-3"]', {
    // Your custom options
  });

  Fancybox.bind('[data-fancybox="gallery-4"]', {
    // Your custom options
  });

  Fancybox.bind('[data-fancybox="gallery-5"]', {
    // Your custom options
  });


  let menuBtn = document.querySelector('.burger-menu');
  let menu = document.querySelector('.burger-text');
  let body = document.querySelector('body')

  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('burger-menu--open');
    menu.classList.toggle('burger-text--open');
    body.classList.toggle('overflow-hidden');
  })

  let infoBtn = document.querySelector('.info__text-btn')
  let secondParagraph = document.querySelector('.info__text-paragraph')
  let readLess = document.querySelector('.info__text-paragraph .info__text-paragraph--hide')

  infoBtn.addEventListener('click', () => {
    let readLess = document.querySelector('.info__text-paragraph--hide')

    secondParagraph.classList.toggle('info__text-paragraph--hide');
    infoBtn.innerHTML = readLess ? 'READ MORE' : 'READ LESS'

  })


  let galleryImg = document.querySelectorAll('.gallery__item-img')
  let adjustTextTo = document.querySelector('.footer__logo')
  let adjustingDiv = document.querySelector('.footer__contacts')
  let nextSibling = document.querySelector('.footer__about .footer__contacts')
  let reversAdjustment = document.querySelector('.footer__inner')

  window.addEventListener('resize', () => {
    console.log('resize');
    if (window.innerWidth <= 450) {
      galleryImg.forEach((element) => {
        if (!element.src.includes('-mobile.jpg')) {
          element.src = element.src.replace('.jpg', '-mobile.jpg')
        }
      })
    }

    if (window.innerWidth > 450) {
      galleryImg.forEach((element) => {
        if (element.src.includes('-mobile.jpg')) {
          element.src = element.src.replace('-mobile.jpg', '.jpg')
        }
      })
    }

    let nextSibling = document.querySelector('.footer__about .footer__contacts')

    if (window.innerWidth <= 840 && !nextSibling) {
      adjustTextTo.after(adjustingDiv)
    }

    if (window.innerWidth > 840 && nextSibling) {
      reversAdjustment.append(adjustingDiv)
    }

  })


  if (window.innerWidth <= 840) {
    adjustTextTo.after(adjustingDiv)
  }

  if (window.innerWidth <= 450) {
    galleryImg.forEach((element) => {
      element.src = element.src.replace('.jpg', '-mobile.jpg')
    })
  }

  let galleryBtn = document.querySelector('.gallery__hide-btn')
  let gallaryItem = document.querySelectorAll('.gallery__item')

  let scrollTo = document.querySelector('.gallery__buttons')

  galleryBtn.addEventListener('click', () => {

  galleryBtn.innerHTML = gallaryItems.classList.contains('expanded') ? 'View More' : 'View Less'
    
    if (gallaryItems.classList.contains('expanded')) {
      // Згорнути
      gallaryItems.style.maxHeight = '840px'; // Змініть це значення на ваш вибір
      gallaryItems.classList.remove('expanded');
      document.querySelectorAll('.active-container .gallery__item')[2].scrollIntoView({ behavior: "smooth" });

    } else {
      // Розгорнути
      gallaryItems.style.maxHeight = '3000px'; // Змініть це значення на ваш вибір
      gallaryItems.classList.add('expanded');

    }
  })
});




