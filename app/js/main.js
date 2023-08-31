
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
});




