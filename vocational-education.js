$(document).ready(function () {
    $('.more-less-button').click(function () {
        $('.more-text').slideToggle();
        if ($('.more-less-button').text() == "Read more") {
            $(this).text("Read less")
        } else {
            $(this).text("Read more")
        }
    });

    $("label.accordion-label").click(function () {
        if (!($(this).hasClass($(this).attr('data-bg-color')))) {
            $(this).parent().removeClass("no-bg");
            $("label.accordion-label").removeClass($("label.accordion-label").attr('data-bg-color')).addClass('collapsed');
            $("label.accordion-label").siblings().removeClass("show");
            $(this).addClass($(this).attr('data-bg-color'));
            $(this).children("i").removeClass("fa-plus").addClass("fa-minus");
        } else {
            $(this).parent().addClass("no-bg");
            $(this).removeClass($(this).attr('data-bg-color'));
            $(this).children("i").removeClass("fa-minus").addClass("fa-plus");
        }
    })
});