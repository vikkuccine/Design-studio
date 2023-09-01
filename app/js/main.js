
document.addEventListener('DOMContentLoaded', function () {
    const element = document.querySelector('.js-choice');
    const choices = new Choices(element, {
        searchEnabled: false,

    });

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
});




