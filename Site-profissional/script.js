$(`.card`).owlCarousel({
    margin:20,
    loop:true,
    autopLayTimeOut:2000,
    autopLayHoverPauser:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1440:{
            items:3,
            nav:false
        }
    }
})

$('.btn').click(function() {
    $('.menu-mobile').slideToggle('show')
})