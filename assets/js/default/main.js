// Start of Header Bg change on scroll
var session2 = $('#section1').offset().top - 150;
var screensize = document.documentElement.clientWidth;
if (screensize <= 1024) {
    $('#inFocusCardContainer').css({ 'width': screensize + 'px' });
    $('.featured-content-sm').css({ 'width': screensize + 'px' });
    $('.featured-content-card-container').css({ 'width': screensize + 'px', 'margin': '0 auto', 'max-width': 'inherit' });
} else {
    $('#inFocusCardContainer').css({ 'width': '950px' });
    $('.featured-content-card-container').css({ 'width': '870px', 'margin': '0 auto' });
}


$(window).resize(function () {
    screensize = document.documentElement.clientWidth;
    if (screensize <= 1024) {
        console.log(screensize);
        $('#inFocusCardContainer').css({ 'width': screensize + 'px' });
        $('.featured-content-sm').css({ 'width': screensize + 'px' });
        $('.featured-content-card-container').css({ 'width': screensize + 'px', 'margin': '0 auto', 'max-width': 'inherit' });
    } else {
        $('#inFocusCardContainer').css({ 'width': '950px' });
        $('.featured-content-card-container').css({ 'width': '870px', 'margin': '0 auto' });
    }

});

var flagForScroll = 0;
$(document).scroll(function () {
    var scrollPos = $(document).scrollTop();
    if (scrollPos >= 50 && flagForScroll == 0) {
        // $('#menuHeader').addClass("bg-white-header animated fadeInDown");
        $('#signInImg').attr('src', './assets/imgs/signin-logo-blue.svg');
        flagForScroll = 1;
    } else if (scrollPos < 50 && flagForScroll == 1) {
        // $('#menuHeader').removeClass("bg-white-header fadeInDown");
        $('#signInImg').attr('src', './assets/imgs/signin-logo-white.svg');
        flagForScroll = 0;
    }
}); 

// Smooth Scroll to section

$("#downAddrow").on('click', function (event) {
    $('html, body').animate({
        scrollTop: $('#section2').offset().top - 150
    }, 800);
});

// Vertical Slide Selection changing

$('#verticalSectionSlides').on('slid.bs.carousel', function (e) {
    $('#verticals' + e.to).addClass('active').siblings().removeClass('active');;
});

// Verticals Slide on selected vertical

$('.selector-div').on('click', function (e) {
    $('#' + e.currentTarget.id).addClass('active').siblings().removeClass('active');
    var selectVerticalId = parseInt(e.currentTarget.id.replace('verticals', ''), 10);
    $('#verticalSectionSlides').carousel(selectVerticalId);
});  

/* counter */
setTimeout(() => {
    (function ($) {
        $.fn.countTo = function (options) {
            options = options || {};

            return $(this).each(function () {
                // set options for current element
                var settings = $.extend({}, $.fn.countTo.defaults, {
                    from: $(this).data('from'),
                    to: $(this).data('to'),
                    speed: $(this).data('speed'),
                    refreshInterval: $(this).data('refresh-interval'),
                    decimals: $(this).data('decimals')
                }, options);

                // how many times to update the value, and how much to increment the value on each update
                var loops = Math.ceil(settings.speed / settings.refreshInterval),
                    increment = (settings.to - settings.from) / loops;

                // references & variables that will change with each update
                var self = this,
                    $self = $(this),
                    loopCount = 0,
                    value = settings.from,
                    data = $self.data('countTo') || {};

                $self.data('countTo', data);

                // if an existing interval can be found, clear it first
                if (data.interval) {
                    clearInterval(data.interval);
                }
                data.interval = setInterval(updateTimer, settings.refreshInterval);

                // initialize the element with the starting value
                render(value);

                function updateTimer() {
                    value += increment;
                    loopCount++;

                    render(value);

                    if (typeof (settings.onUpdate) == 'function') {
                        settings.onUpdate.call(self, value);
                    }

                    if (loopCount >= loops) {
                        // remove the interval
                        $self.removeData('countTo');
                        clearInterval(data.interval);
                        value = settings.to;

                        if (typeof (settings.onComplete) == 'function') {
                            settings.onComplete.call(self, value);
                        }
                    }
                }

                function render(value) {
                    var formattedValue = settings.formatter.call(self, value, settings);
                    var commaValue = formattedValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    commaValue = new Intl.NumberFormat().format(formattedValue);
                    $self.text(commaValue);
                }
            });
        };

        $.fn.countTo.defaults = {
            from: 0,               // the number the element should start at
            to: 0,                 // the number the element should end at
            speed: 3000,           // how long it should take to count between the target numbers
            refreshInterval: 100,  // how often the element should be updated
            decimals: 0,           // the number of decimal places to show
            formatter: formatter,  // handler for formatting the value before rendering
            onUpdate: null,        // callback method for every time the element is updated
            onComplete: null       // callback method for when the element finishes updating
        };

        function formatter(value, settings) {
            return value.toFixed(settings.decimals);
        }
    }(jQuery));

    jQuery(function ($) {

        $('.timer').each(count);



        function count(options) {
            var $this = $(this);
            options = $.extend({}, options || {}, $this.data('countToOptions') || {});
            $this.countTo(options);
        }
    });
}, 850);


jQuery(document).ready(function ($) {
    //function to check if the .cd-image-container is in the viewport here

    //make the .cd-handle element draggable and modify .cd-resize-img width according to its position
    $('.cd-image-container').each(function () {
        var actual = $(this);
        drags(actual.find('.cd-handle'), actual.find('.cd-resize-img'), actual);
    });

    //function to upadate images label visibility here
});

//draggable funtionality 
function drags(dragElement, resizeElement, container) {
    dragElement.on("mousedown vmousedown", function (e) {
        dragElement.addClass('draggable');
        resizeElement.addClass('resizable');

        var dragWidth = dragElement.outerWidth(),
            xPosition = dragElement.offset().left + dragWidth - e.pageX,
            containerOffset = container.offset().left,
            containerWidth = container.outerWidth(),
            minLeft = containerOffset + 10,
            maxLeft = containerOffset + containerWidth - dragWidth - 10;

        dragElement.parents().on("mousemove vmousemove", function (e) {
            leftValue = e.pageX + xPosition - dragWidth;

            //constrain the draggable element to move inside its container
            if (leftValue < minLeft) {
                leftValue = minLeft;
            } else if (leftValue > maxLeft) {
                leftValue = maxLeft;
            }

            widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + '%';

            $('.draggable').css('left', widthValue).on("mouseup vmouseup", function () {
                $(this).removeClass('draggable');
                resizeElement.removeClass('resizable');
            });

            $('.resizable').css('width', widthValue);

            //function to upadate images label visibility here
            // ...

        }).on("mouseup vmouseup", function (e) {
            dragElement.removeClass('draggable');
            resizeElement.removeClass('resizable');
        });
        e.preventDefault();
    }).on("mouseup vmouseup", function (e) {
        dragElement.removeClass('draggable');
        resizeElement.removeClass('resizable');
    });
};

// milestone mobile function
var count = 1;
showDiv(count); // show first one because all are hidden by default
var timer = setInterval(changeDiv, 2000);

function changeDiv() {
    count++;
    if (count == 7) {
        $('.mobile-path-' + (count - 1)).removeClass('col-active');
        count = 1;
    }
    showDiv(count);
}

function showDiv(index) {

    if (index != 1) {
        $('.mobile-path-' + index).addClass('col-active');
        $('.mobile-path-' + (index - 1)).removeClass('col-active');
    } else {
        $('.mobile-path-' + index).addClass('col-active');
    }
}

// Function to Call the Api Metrix Data
var dikshaAMDUrlStaging = "https://ntpstagingall.blob.core.windows.net/portal-metrics/diksha-aggregate-metrics.json";
var dikshaSMSUrlStaging = "https://ntpstagingall.blob.core.windows.net/portal-metrics/diksha-static-metrics.json";
var dikshaAMDUrlProd = "https://ntpproductionall.blob.core.windows.net/portal-metrics/diksha-aggregate-metrics.json";
var dikshaSMSUrlProd = "https://ntpproductionall.blob.core.windows.net/portal-metrics/diksha-static-metrics.json";
var dikshaAMDUrlPreProd= "https://preprodall.blob.core.windows.net/portal-metrics/diksha-aggregate-metrics.json";
var dikshaSMSUrlPreProd= "https://preprodall.blob.core.windows.net/portal-metrics/diksha-static-metrics.json";
var aggregateMetricsURL;
var staticMetricsURL;
if (window.location.hostname == 'localhost' || window.location.hostname == 'diksha.gov.in') {
    aggregateMetricsURL = dikshaAMDUrlProd;
    staticMetricsURL = dikshaSMSUrlProd;
} else if (window.location.hostname == 'staging.ntp.net.in') {
    aggregateMetricsURL = dikshaAMDUrlStaging;
    staticMetricsURL = dikshaSMSUrlStaging;
} else if (window.location.hostname == 'preprod.ntp.net.in'){
    aggregateMetricsURL = dikshaAMDUrlPreProd;
    staticMetricsURL = dikshaSMSUrlPreProd;
} else {
    aggregateMetricsURL = dikshaAMDUrlProd;
    staticMetricsURL = dikshaSMSUrlProd;
}
var milestoneData;
var mileStoneData2;
var milestoneObj = {
    'stateOnboardID': 'stateOnboard',
    'textBookPrintedID': 'textBookPrinted',
    'digitalContentID': 'digitalContent',
    'learningExpID': 'learningExp',
    'hoursOnDikshaID': 'hoursOnDiksha',
    'noOfDevicesID': 'noOfDevices',
    'stateOnboardMobileID': 'stateOnboardMobile',
    'textBookPrintedMobileID': 'textBookPrintedMobile',
    'digitalContentMobileID': 'digitalContentMobile',
    'learningExpMobileID': 'learningExpMobile',
    'hoursOnDikshaMobileID': 'hoursOnDikshaMobile',
    'noOfDevicesMobileID': 'noOfDevicesMobile',
    'yearIdTextbookID': 'yearIdTextbook',
    'boardIDTextbookID': 'boardIDTextbook',
    'noOfLanguagesID': 'noOfLanguages',
    'noOfTeachersID': 'noOfTeachers',
    'yearIdTextbookMobileID': 'yearIdTextbookMobile',
    'boardIDTextbookMobileID': 'boardIDTextbookMobile',
    'noOfTeachersMobileID': 'noOfTeachersMobile',
    'noOfLanguagesMobileID': 'noOfLanguagesMobile'
}
$('#' + milestoneObj.stateOnboardID).attr('data-to', '0');
$('#' + milestoneObj.textBookPrintedID).attr('data-to', '0');
$('#' + milestoneObj.digitalContentID).attr('data-to', '0');
$('#' + milestoneObj.learningExpID).attr('data-to', '0');
$('#' + milestoneObj.hoursOnDikshaID).attr('data-to', '0');
$('#' + milestoneObj.noOfDevicesID).attr('data-to', '0');
$('#' + milestoneObj.yearIdTextbookID).text('0');
$('#' + milestoneObj.boardIDTextbookID).text('0');
$('#' + milestoneObj.stateOnboardMobileID).html(0);
$('#' + milestoneObj.textBookPrintedMobileID).html(0);
$('#' + milestoneObj.digitalContentMobileID).html(0);
$('#' + milestoneObj.learningExpMobileID).html(0);
$('#' + milestoneObj.hoursOnDikshaMobileID).html(0);
$('#' + milestoneObj.noOfDevicesMobileID).html(0);
$('#' + milestoneObj.yearIdTextbookMobileID).html(0);
$('#' + milestoneObj.boardIDTextbookMobileID).html(0);
$('#' + milestoneObj.noOfTeachersMobileID).html(0);
$('#' + milestoneObj.noOfLanguagesMobileID).html(0);

$.get("" + aggregateMetricsURL, function (data) {
    milestoneData = JSON.parse(data);
    localStorage.setItem('dikshaAggregateMetricsData', JSON.stringify(milestoneData));
    $('#' + milestoneObj.digitalContentID).attr('data-to', milestoneData.metrics_summary.totalContentPublished.count);
    $('#' + milestoneObj.learningExpID).attr('data-to', milestoneData.metrics_summary.totalContentPlaySessions);
    $('#' + milestoneObj.hoursOnDikshaID).attr('data-to', milestoneData.metrics_summary.totalTimeSpent);
    $('#' + milestoneObj.noOfDevicesID).attr('data-to', milestoneData.metrics_summary.noOfUniqueDevices);
    $('#' + milestoneObj.digitalContentMobileID).html(formateIndianCurrency(milestoneData.metrics_summary.totalContentPublished.count) + " +");
    $('#' + milestoneObj.learningExpMobileID).html(formateIndianCurrency(milestoneData.metrics_summary.totalContentPlaySessions) + " +");
    $('#' + milestoneObj.hoursOnDikshaMobileID).html(Math.round(milestoneData.metrics_summary.totalTimeSpent) + " +");
    $('#' + milestoneObj.noOfDevicesMobileID).html(formateIndianCurrency(milestoneData.metrics_summary.noOfUniqueDevices) + " +");
});

$.get("" + staticMetricsURL, function (data) {
    mileStoneData2 = data;
    localStorage.setItem('dikshaStaticMetricsData', JSON.stringify(mileStoneData2));
    mValueDyanmic(mileStoneData2);
});


function mValueDyanmic(mileStoneData2) {
    $('#' + milestoneObj.stateOnboardID).attr('data-to', mileStoneData2.metricsSummary.onboardSummary.stateCount);
    $('#' + milestoneObj.textBookPrintedID).attr('data-to', mileStoneData2.metricsSummary.etbSummary.etbPrintCount);
    $('#' + milestoneObj.yearIdTextbookID).text(mileStoneData2.metricsSummary.metricsAsOnYear);
    $('#' + milestoneObj.boardIDTextbookID).text(mileStoneData2.metricsSummary.etbSummary.boardCount);
    $('#' + milestoneObj.noOfLanguagesID).text(mileStoneData2.metricsSummary.contentCreationSummary.languages);
    $('#' + milestoneObj.noOfTeachersID).text(mileStoneData2.metricsSummary.contentCreationSummary.teachers);
    $('#' + milestoneObj.stateOnboardMobileID).html(mileStoneData2.metricsSummary.onboardSummary.stateCount);
    $('#' + milestoneObj.textBookPrintedMobileID).html(formateIndianCurrency(mileStoneData2.metricsSummary.etbSummary.etbPrintCount) + " +");
    $('#' + milestoneObj.yearIdTextbookMobileID).html(mileStoneData2.metricsSummary.metricsAsOnYear);
    $('#' + milestoneObj.boardIDTextbookMobileID).html(mileStoneData2.metricsSummary.etbSummary.boardCount);
    $('#' + milestoneObj.noOfTeachersMobileID).html(formateIndianCurrency(mileStoneData2.metricsSummary.contentCreationSummary.teachers));
    $('#' + milestoneObj.noOfLanguagesMobileID).html(mileStoneData2.metricsSummary.contentCreationSummary.languages);
}

function showHomeBanner() {
    $('.homeBannerImg').css({ 'display': 'none' });
    $('.homeBanner').css({ 'display': 'block' });
}

function formateIndianCurrency(rupees) {
    var rsFormated = 0;
    var indianRupees = 0;
    var ngative = false;
    if (rupees != "" && rupees != undefined) {
        rupees = rupees.toString();
        // Check Negative
        if (rupees < 0) {
            rupees = rupees.slice(1);
            ngative = true;
        }

        rupees = rupees.split(".");
        if (rupees.length <= 2 && (rupees[0] != undefined && rupees[0] != "")) {
            indianRupees = rupees[0];
            indianRupees = indianRupees.toString();
            var lastThree = indianRupees.substring(indianRupees.length - 3);
            var otherNumbers = indianRupees.substring(0,
                indianRupees.length - 3);
            if (otherNumbers != '') {
                lastThree = ',' + lastThree;
            }
            var formateRS = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",")
                + lastThree;
            if (rupees[1] != undefined) {
                formateRS = formateRS + '.' + rupees[1];
            }
            // Negative
            if (ngative) {
                formateRS = '-' + formateRS;
            }

            rsFormated = formateRS;
            return rsFormated;
        } else {
            rsFormated = "0.00";
            // Negative
            if (ngative) {
                rsFormated = '-' + rsFormated;
            }
            return rsFormated;
        }
    } else {
        rsFormated = "0.00";
        return rsFormated;
    }
}
