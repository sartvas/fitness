$(document).ready(function(){
    $('.crousel__inner').slick({
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="/src/img/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="/src/img/right.png"></button>',
        responsive: [ 
            {
                breakpoint: 768,
                settings: {
                  dots: true,
                  arrows: false
                }
            }

        ]
    
    });
});