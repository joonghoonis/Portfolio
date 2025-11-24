const projectSwiper = new Swiper('#project_swiper', {
    autoplay: { delay: 5000 },
    loop: true,
    pagination: {
    el: '#project_swiper .swiper-pagination',
    type: 'fraction',
formatFractionCurrent: function (number) {
    return number < 10 ? '0' + number : number;
    },
    formatFractionTotal: function (number) {
    return number < 10 ? '0' + number : number;
    },
    },
    navigation: {
    nextEl: '#project_swiper .swiper-button-next',
    prevEl: '#project_swiper .swiper-button-prev',
},
});
const designTopSwiper = new Swiper ('#design_top_swiper', {
    loop: true,
    autoplay: {delay : 0,},
    slidesPerView: 3,
    spaceBetween: 15,
    speed:4500,
})
const designBottomSwiper = new Swiper ('#design_bottom_swiper', {
    loop: true,
    slidesPerView: 3,
    autoplay: {delay : 0,},
    speed:4000,
    spaceBetween: 15
})