// Слайдер
new Swiper('.swiper_menu, .swiper_gallery', {
    loop : true,
    speed: 800,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
});
new Swiper('.swiper_comments ', {
    loop : true,
    speed: 800,
    pagination: {
        el: '#swiper_comments',
        clickable: true,
    },
});
