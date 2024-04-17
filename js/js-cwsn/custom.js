
$(document).ready(function () {

  $("#blueBook").on("click", function () {
    var htmlData1 = '<div id="canvas1"><div id="book-zoom1"> <div class="sample-docs" id="sample-docs1"> <div ignore="1" class="next-button"></div> <div ignore="1" class="previous-button"></div> <div class="hard"></div> <div> <div class="gradient"></div>  <div class="coversSprite bookcover21"></div> </div> <div> <div class="gradient"></div>  <div class="coversSprite bookcover22"></div></div> <div> <div class="gradient"></div> <div class="coversSprite bookcover23"></div> </div> <div> <div class="gradient"></div>  <div class="coversSprite bookcover24"></div> </div> <div> <div class="gradient"></div>  <div class="coversSprite bookcover25"></div> </div> <div> <div class="gradient"></div>  <div class="coversSprite bookcover26"></div> </div><div class="hard p8"></div> </div> </div>';

    $('#canvas1').css({ visibility: 'hidden' });

    $(".generate1").html(htmlData1);
    var flipbook = $('#sample-docs1');
    if ($('#sample-docs1').turn('is')) {
      $('#sample-docs1').turn('destroy');
    }

    if (flipbook.width() == 0 || flipbook.height() == 0) {
      return;
    }

    $('#book-zoom1').mousewheel(function (event, delta, deltaX, deltaY) {

      var data = $(this).data(),
        step = 30,
        flipbook = $('#sample-docs1'),
        actualPos = $('#slider1').slider('value') * step;

      if (typeof (data.scrollX) === 'undefined') {
        data.scrollX = actualPos;
        data.scrollPage = flipbook.turn('page');
      }

      data.scrollX = Math.min($("#slider1").slider('option', 'max') * step,
        Math.max(0, data.scrollX + deltaX));

      var actualView = Math.round(data.scrollX / step),
        page = Math.min(flipbook.turn('pages'), Math.max(1, actualView * 2 - 2));

      if ($.inArray(data.scrollPage, flipbook.turn('view', page)) == -1) {
        data.scrollPage = page;
        flipbook.turn('page', page);
      }

      if (data.scrollTimer)
        clearInterval(data.scrollTimer);

      data.scrollTimer = setTimeout(function () {
        data.scrollX = undefined;
        data.scrollPage = undefined;
        data.scrollTimer = undefined;
      }, 1000);

    });

    $("#slider1").slider({
      min: 1,
      max: 100,

      start: function (event, ui) {
        if (!window._thumbPreview) {
          _thumbPreview = $('<div />', {
            'class': 'thumbnail'
          }).html('<div></div>');
          setPreview(ui.value);
          _thumbPreview.appendTo($(ui.handle));
        } else
          setPreview(ui.value);

        moveBar(false);
      },

      slide: function (event, ui) {
        setPreview(ui.value);
      },

      stop: function () {
        if (window._thumbPreview)
          _thumbPreview.removeClass('show');

        $('#sample-docs1').turn('page', Math.max(1, $(this).slider('value') * 2 - 2));
      }
    });

    Hash.on('^page\/([0-9]*)$', {
      yep: function (path, parts) {
        var page = parts[1];

        if (page !== undefined) {
          if ($('#sample-docs1').turn('is'))
            $('#sample-docs1').turn('page', page);
        }

      },
      nop: function (path) {

        if ($('#sample-docs1').turn('is'))
          $('#sample-docs1').turn('page', 1);
      }
    });

    flipbook.turn({
      elevation: 50,
      acceleration: false,
      gradients: true,
      autoCenter: true,
      duration: 1000,
      when: {

        turning: function (e, page, view) {

          var book = $(this),
            currentPage = book.turn('page'),
            pages = book.turn('pages');

          if (currentPage > 3 && currentPage < pages - 3) {
            if (page == 1) {
              book.turn('page', 2).turn('stop').turn('page', page);
              e.preventDefault();
              return;
            } else if (page == pages) {
              book.turn('page', pages - 1).turn('stop').turn('page', page);
              e.preventDefault();
              return;
            }
          } else if (page > 3 && page < pages - 3) {
            if (currentPage == 1) {
              book.turn('page', 2).turn('stop').turn('page', page);
              e.preventDefault();
              return;
            } else if (currentPage == pages) {
              book.turn('page', pages - 1).turn('stop').turn('page', page);
              e.preventDefault();
              return;
            }
          }

          Hash.go('page/' + page).update();

          if (page == 1 || page == pages)
            $('#sample-docs1 .tabs').hide();


        },

        turned: function (e, page, view) {

          var book = $(this);

          $('#slider1').slider('value', getViewNumber(book, page));

          if (page != 1 && page != book.turn('pages'))
            $('#sample-docs1 .tabs').fadeIn(500);
          else
            $('#sample-docs1 .tabs').hide();

          book.turn('center');
          updateTabs();

        },

        start: function (e, pageObj) {

          moveBar(true);

        },

        end: function (e, pageObj) {

          var book = $(this);

          setTimeout(function () {
            $('#slider1').slider('value', getViewNumber(book));
          }, 1);

          moveBar(false);

        },

        missing: function (e, pages) {
          var classVal = e.target.id;
          for (var i = 0; i < pages.length; i++)
            addPage(pages[i], $(this), classVal);
        }
      }
    }).turn('page', 2);


    $('#slider1').slider('option', 'max', numberOfViews(flipbook));

    flipbook.addClass('animated');

    $('#canvas1').css({ visibility: 'visible' });

    $("#teachAndLearnModal").modal("show");

    $('.next-button').bind($.mouseEvents.over, function () {

      $(this).addClass('next-button-hover');

    }).bind($.mouseEvents.out, function () {

      $(this).removeClass('next-button-hover');

    }).bind($.mouseEvents.down, function () {

      $(this).addClass('next-button-down');

    }).bind($.mouseEvents.up, function () {

      $(this).removeClass('next-button-down');

    }).click(function () {

      $('#sample-docs1').turn('next');

    });

    $('.previous-button').bind($.mouseEvents.over, function () {

      $(this).addClass('previous-button-hover');

    }).bind($.mouseEvents.out, function () {

      $(this).removeClass('previous-button-hover');

    }).bind($.mouseEvents.down, function () {

      $(this).addClass('previous-button-down');

    }).bind($.mouseEvents.up, function () {

      $(this).removeClass('previous-button-down');

    }).click(function () {

      $('#sample-docs1').turn('previous');

    });
  });
  yepnope({
    test: Modernizr.csstransforms,
    yep: ['../js/lib/turn.min.js', '../css/jquery.ui.css'],
    nope: ['../js/lib/turn.html4.min.js', '../css/jquery.ui.html4.css'],
    both: ['../css/docs.css', '../js/lib/docs.js']
  });
});