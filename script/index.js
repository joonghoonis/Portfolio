const projectSwiper = new Swiper('#project_swiper', {
    autoplay: { delay: 10000 },
    loop: true,
    speed:1000,
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
    speed:8500,
})
const designBottomSwiper = new Swiper ('#design_bottom_swiper', {
    loop: true,
    slidesPerView: 3.5,
    autoplay: {delay : 0,},
    speed:12000,
    spaceBetween: 15
})
const fullPageSwiper = new Swiper('main', {
    direction: 'vertical', 
    slidesPerView: 1,
    speed:800,
    mousewheel: {
        releaseOnEdges: true, 
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    on: {
        slideChange: function () {
            const navItems = document.querySelectorAll('header nav ul li'); 
            navItems.forEach(item => item.classList.remove('active'));
            navItems[this.activeIndex].classList.add('active'); 
        }
    }
});
document.querySelectorAll('header nav ul li').forEach((item, index) => {
    item.addEventListener('click', () => {
        const navItems = document.querySelectorAll('header nav ul li');
        navItems.forEach(navItem => navItem.classList.remove('active'));

        item.classList.add('active');
        
        fullPageSwiper.slideTo(index); 
    });
});
const popup = document.querySelector('#popup');
const popupImg = popup.querySelector('.popup_img');
const popupClose = popup.querySelector('.popup_close');
const designThumbs = document.querySelectorAll('#banner_details .swiper-slide button');

designThumbs.forEach((btn) => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img');
        if (!img) return;
        popupImg.src = img.src;
        popup.classList.add('active');
    });
});

popupClose.addEventListener('click', () => {
    popup.classList.remove('active');
    popupImg.src = '';
});

popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.classList.remove('active');
        popupImg.src = '';
    }
});