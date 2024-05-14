
$(document).ready(function () {

  $("#blueBook").on("click", function () {
    console.log("book clicked..");
    var htmlData1 = `<div id="canvas1"><div id="book-zoom1"> <div class="sample-docs" id="sample-docs1"> <div ignore="1" class="next-button"></div> <div ignore="1" class="previous-button"></div> <div class="hard"></div> 
    <div> <div class="gradient"></div>  
    <div class="coversSprite bookcover21">Differences are fluid in nature, not always fixed, respecting individual rights 
    of self-identity, recognizing that no one is superior and based on several 
    socio-cultural-linguistic-plurality in the Indian society, some  categorization 
    have been suggested in the NEP 2020 for addressing the diverse needs and paying 
    more attention to education of children belonging to socio-economically disadvantaged 
    groups (SEDGs). SEDGs are broadly categorized into five sub categories, based on gender 
    identities (particularly female and transgender individuals), socio-cultural identities 
    (such as Scheduled Castes, Scheduled Tribes, OBCs, linguistic and religious minorities), 
    geographical identities (such as students from villages, small towns, and aspirational 
    districts), socio-economic conditions (such as migrant communities, low income households, 
    children in vulnerable situations, victims of or children of victims of trafficking, 
    orphans including child beggars in urban areas, and the urban poor) and disabilities. 
    </div> </div> <div> <div class="gradient"></div>  
    <div class="coversSprite bookcover22">The Rights of Persons with Disabilities Act 2016 has specified a schedule of disabilities 
    such as locomotor disability, leprosy cured person, cerebral palsy, dwarfism,  muscular 
    dystrophy, acid attack victims,  blindness, low-vision, deafness, hard of hearing,  
    speech & language disability, intellectual disability, specific learning disabilities, 
    autism spectrum disorder, mental illness, chronic neurological conditions, multiple 
    sclerosis, parkinson’s disease, haemophilia, thalassemia, sickle cell disease, multiple 
    disabilities and deaf-blindness or as further notified disability. The NEP 2020 endorses all recommendations of the RPwD Act 2016 with regard to school education. </div></div> <div> <div class="gradient"></div> 
     <div class="coversSprite bookcover23">The National Education Policy, 2020 has a vision of transforming India by
     providing high-quality equitable and inclusive education to ensure that all 
     students with diverse learning needs are able to thrive in the education system
      with equal learning opportunities in an inclusive environment to realize their 
      full potentials. Equitable and Inclusive education is a dynamic process which 
      brings change in the society. Equitable does not mean the equal. Equitable 
      education is more concerned with the learner's specific learning needs. 
      Inclusion aims at bringing all these children with their different
     abilities and needs together to learn under one roof. The need of the hour 
     is to address the diverse socio-economic, geographic, cultural and idiographic 
     issues through adopting the policy of 'Teaching all children together'
      and facilitating 'Equitable and outcome based Learning for All'.</div> </div> <div> <div class="gradient"></div>  
      <div class="coversSprite bookcover24">In coherence with NEP 2020, a lot of resources have been developed based on 
      the philosophy of equitable and inclusive education and principles of Universal
       Design to provide educational e-Content to learners across and beyond the country. 
       These resources and e-contents are developed by experts in the field following systematic 
       procedures of evaluation and reviews for delivering the quality end product.  
       The resources and e-contents are available on 'One Nation One Platform' DIKSHA - 
       Equitable and Inclusive Education Vertical, which is evolving in nature.</div> </div> 
       <div> <div class="gradient"></div>  <div class="coversSprite bookcover25"></div> </div> <div class="hard p6"></div> </div> </div>`;

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
    yep: ['js/lib/turn.min.js', 'css/jquery.ui.css'],
    nope: ['js/lib/turn.html4.min.js', 'css/jquery.ui.html4.css'],
    both: ['css/docs.css', 'js/lib/docs.js']
  });
});