
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


  if (document.querySelector('.gallery__inner')) {
    var mixer = mixitup('.gallery__inner', {
      load: {
        filter: '.all'
      }
    })
  }

  const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
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
  infoBtn.addEventListener('click', () => {
    secondParagraph.classList.toggle('info__text-paragraph--hide');
  })


  let galleryImg = document.querySelectorAll('.gallery__item-img')

window.addEventListener('resize', () => {
  console.log('resize');
  if(window.innerWidth <= 450) {

  }
})

  if (window.innerWidth <= 450) {
    galleryImg.forEach((element) => {
      element.src = element.src.replace('.jpg', '-mobile.jpg')
    })
  }
});




