
//counter
$('.counter').counterUp({
    delay: 50,
    time: 3000
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 2000,
        disableOneInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// scrolll top button
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const circle = document.querySelector('.circle-of-the-section-one');
    circle.styles.transform = `translateY(${scrollPosition * 0.2}px)`;
});


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    const btn = document.getElementById("scrollBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.classList.add("show");
        btn.classList.remove("hide");
    } else {
        btn.classList.add("hide");
        setTimeout(function () {
            btn.classList.remove("show");
        }, 700);
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var loader = document.querySelector(".first-animation");
window.addEventListener("load", function () {
    if (loader) {
        setTimeout(function () {
            loader.style.display = "none";
        }, 4000);
    }
});



