var url = $(location).attr('href');
if (url.indexOf("assessment") != -1){
    $('.hero-banner-school-leadership').addClass('assement-bg');
} else if (url.indexOf("innovation-innovative") != -1){
    $('.hero-banner-school-leadership').addClass('innovation-and-innovative-bg');
} else if (url.indexOf("school-leadership") != -1){
    $('.hero-banner-school-leadership').addClass('school-leadership-bg');
} else if (url.indexOf("teaching-and-learning") != -1){
    $('.hero-banner-school-leadership').addClass('teaching-and-learning-bg');
}
