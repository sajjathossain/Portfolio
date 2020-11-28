$('#recipeCarousel').carousel({
    interval: 10000
})

$('.carousel .carousel-item').each(function(){
    let minPerSlide = 3;
    let next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (let i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});