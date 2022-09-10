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