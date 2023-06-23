$(document).ready(function(){
    var myCarousel = document.querySelector('#carouselExampleSlidesOnly')
    var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 6000,
    wrap: true
    })
});