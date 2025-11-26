const projectSwiper = new Swiper('#project_swiper', {
    autoplay: { delay: 500000 },
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
    speed:4500,
})
const designBottomSwiper = new Swiper ('#design_bottom_swiper', {
    loop: true,
    slidesPerView: 3,
    autoplay: {delay : 0,},
    speed:4000,
    spaceBetween: 15
})
const fullPageSwiper = new Swiper('main', {
    // 💡 수직 슬라이드 방향 설정 (상하 스크롤)
    direction: 'vertical', 
    slidesPerView: 1,
    speed:800,
    // ...
    // 💡 마우스 휠 설정
    mousewheel: {
        releaseOnEdges: true, // Swiper 끝에 도달하면 일반 스크롤 작동 허용
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    on: {
        slideChange: function () {
            // 이 셀렉터가 실제 헤더 메뉴를 정확히 가리켜야 합니다.
            const navItems = document.querySelectorAll('header nav ul li'); 
            
            // 모든 active 클래스 제거
            navItems.forEach(item => item.classList.remove('active'));
            
            // 현재 활성 슬라이드(this.activeIndex)에 해당하는 메뉴에 active 클래스 추가
            navItems[this.activeIndex].classList.add('active'); 
        }
    }
});
document.querySelectorAll('header nav ul li').forEach((item, index) => {
    item.addEventListener('click', () => {
        // 1. 모든 메뉴에서 'active' 클래스 제거
        const navItems = document.querySelectorAll('header nav ul li');
        navItems.forEach(navItem => navItem.classList.remove('active'));
        
        // 2. 현재 클릭된 메뉴에 'active' 클래스 추가
        item.classList.add('active'); // ⭐ 이 코드를 추가하거나 확인해야 합니다.
        
        // 3. Swiper를 해당 슬라이드로 이동
        fullPageSwiper.slideTo(index); 
    });
});