// search button

searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchform.classList.toggle('active');
}


// login form start

var loginform = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () => {
    loginform.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () => {
    loginform.classList.remove('active');
}

// swipper home section

var swiper = new Swiper('.books-list', {
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
});


// featured section start

var swiper = new Swiper(".featured-slider",{

    spaceBetween:10,
      loop: true,
    centeredSlides: true,
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",

    },
    breakpoints: {
        0: { slidesPerView: 1 },
        450: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
    },
});


// Arrivals Section

document.querySelectorAll(".arrivals-slider").forEach((el) => {
    new Swiper(el, {
        spaceBetween: 10,
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
        },
    });
});



// Review Section Starts

var swiper = new Swiper(".review-slider", {
    spaceBetween:10,
      loop: true,
    centeredSlides: true,
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
    },

});


// Blogs Section Starts

var swiper = new Swiper(".blog-slider",{
    spaceBetween:10,
      loop: true,
    centeredSlides: true,
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },

});