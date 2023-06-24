//banner

$(document).ready(function () {

    $(".open_menu").click(function(){
    $('.menu_sp').toggle();
    $('body').toggleClass('none_scroll');
    });


    jQuery(".box_drop_down").click(function(){
        $(this).parent(".box_content").find(".first_grap").slideToggle();
        $(this).parent(".box_content").prevAll(".box_content").find(".first_grap").slideUp();
        $(this).parent(".box_content").nextAll(".box_content").find(".first_grap").slideUp();
    });
});

var swiper = new Swiper(".swiper_banner", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },

});

var swiper = new Swiper(".swiper_news", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: true,
    breakpoints: {
        768: {
            slidesPerView: 2,
            autoplay: false,
        },
        1024: {
            slidesPerView: 3,
            autoplay: false,
        },
        
    },
});


var swiper = new Swiper(".swiper_reviews", {
    slidesPerView: 1,
    spaceBetween: 21,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },

    breakpoints: {
        768: {
            slidesPerView: 2,
            autoplay: false,
        },
    },
});