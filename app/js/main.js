
document.addEventListener('DOMContentLoaded', function () {
  const element = document.querySelector('.js-choice');
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
        selected: window.location.pathname === '/index.html' || window.location.pathname === '/' ,
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
});




