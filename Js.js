// Слайдер
new Swiper('.swiper_menu', {
    loop : true,
    speed: 800,
    spaceBetween: 15,
    breakpoints: {
        1200: {
            slidesPerView: 3,
        },
        765: {
            slidesPerView: 2,
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
});
new Swiper('.swiper_gallery', {
    loop : true,
    speed: 2500,
    spaceBetween: 20,
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    direction: 'vertical',
    breakpoints: {
        880: {
            direction: 'horizontal',
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
});
new Swiper('.swiper_comments', {
    loop : true,
    speed: 800,
    pagination: {
        el: '#swiper_comments',
        clickable: true,
    },
});
// Бургер
const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.header_menu_content');
if (iconMenu){
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}