// Слайдер
const swiper = new Swiper('.swiper', {
    loop : true,
    speed: 800,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '#swiper_comments',
        clickable: true,
    },
});
