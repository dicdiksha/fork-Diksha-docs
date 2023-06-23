/* Custom JS Start */
/* Read more start */
$(document).ready(function(){
	$(".readMore").click(function(){
		$(".more-text").slideDown('slow','swing');
		$(".readMore").addClass("hide");
	});
	$(".readLess").click(function(){
		$(".more-text").slideUp('slow','swing');
		$(".readMore").removeClass("hide");
	});
});
/* Read more ends */
/* TOC start */
$(function() {
    $.toc.clickHideButton();
});
/* TOC ends */

/* Scroll to top start */
jQuery(document).ready(function(){
	$(window).on('scroll',function(e) {
		var massheadHeight = jQuery('#header').outerHeight();
		var mainNavHeight = jQuery('#nav-bar').outerHeight();
		var scrolledHeight = jQuery(window).scrollTop();
		if (scrolledHeight > 250) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});
	jQuery('.scrollup').click(function(){
		jQuery('html, body').animate({scrollTop : 0},800);
		return false;
	});
});
/*  Scroll to top ends */

/* Sidebar Toggle start */
function toggleFAQ(){
	$(".faqs").slideToggle() ;
	$(".sidebar-inner").slideToggle() ;
}
/* Sidebar Toggle ends */

/* Image zoom start */
$(document).ready(function(){
$(".zoomcover").click(function(){
	if (!$(this).hasClass("fullscreen")){
		$(this).addClass("fullscreen");
		$(this).find(".zoom").addClass("enabled").elevateZoom({
			zoomType: "inner",
			cursor  : "crosshair",
			scrollZoom: "true"
		});
	} else {
		$(this).removeClass("fullscreen");
		$(this).find(".zoom").removeClass("enabled");
		$(".zoomContainer").hide();
	}
});

$(document).keyup(function(e) {
	if (e.keyCode == 27) {
		$(".zoomcover").removeClass("fullscreen");
		$(".zoomcover").find(".zoom").removeClass("enabled");
		$(".zoomContainer").hide();
	}
});
});
/* Image zoom End */


/* take a tour starts*/
$(document).ready(function() {
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});
});

/* take a tour ends*/


/* Generate pdf start */

function generatepdf(){

	var pdfTitle = $(".page__title").text();
	pdfTitle = pdfTitle+'.pdf';

	var pdfWidth = $(".pdf-cover").outerWidth();
	var pfdWidthInPoint = $(".pdf-cover").outerWidth() * 0.62;

	var pdfContent = document.getElementById('pdf-cover');

	function setFonSize(elm, fontsize){
		pdfContent.style.fontSize = fontsize;
	}

	html2canvas(pdfContent, {
		onrendered: function(canvas) {
			var pdf = new jsPDF('p', 'pt', [pfdWidthInPoint, 712]);

			for (var i = 0; i <= pdfContent.clientHeight/980; i++) {

				var srcImg  = canvas;
				var sX      = 0;
				var sY      = 980*i; // start 980 pixels down for every new page
				var sWidth  = 1200;
				var sHeight = 986;
				var dX      = 0;
				var dY      = 5;
				var dWidth  = 1100;
				var dHeight = 950;

				window.onePageCanvas = document.createElement("canvas");
				onePageCanvas.setAttribute('width', 1100);
				onePageCanvas.setAttribute('height', 950);
				var ctx = onePageCanvas.getContext('2d');

				ctx.webkitImageSmoothingEnabled = false;
				ctx.mozImageSmoothingEnabled = false;
				ctx.imageSmoothingEnabled = false;

				ctx.drawImage(srcImg,sX,sY,sWidth,sHeight,dX,dY,dWidth,dHeight);

				var canvasDataURL = onePageCanvas.toDataURL("image/png", 1.0);

				var width = onePageCanvas.width;
				var height = onePageCanvas.clientHeight;

				// add another page
				if (i > 0) {
					pdf.addPage(pfdWidthInPoint, 712);
				}

				pdf.setPage(i+1);
				pdf.addImage(canvasDataURL, 'PNG', 20, 40, (width*.62), (height*.62));

			}
			pdf.save(pdfTitle);
		}
	});
};

/* Generate pdf ends */


jQuery.event.special.touchstart = {
    setup: function( _, ns, handle ){
        if ( ns.includes("noPreventDefault") ) {
            this.addEventListener("touchstart", handle, { passive: false });
        } else {
            this.addEventListener("touchstart", handle, { passive: true });
        }
    }
};


/* Map start */

$("#championssvg path").not(this).css({fill : "rgb(233,234,234)", stroke: 'rgb(255,255,255)'});
  	$("#upcomingsvg path").not(this).css({fill : "rgb(233,234,234)", stroke: 'rgb(255,255,255)'});
  	$('#championssvg #IN-MH').css({fill : "rgb(165,200,241)"});
  	$('#upcomingsvg #IN-RJ').css({fill : "rgb(165,200,241)"});


    $("#championssvg path").click(function() {

		$(this).css({fill : "rgb(165,200,241)"});
		$(this).attr("filter", "none");

		$("#championssvg path").not(this).css({fill : "rgb(233,234,234)", stroke: 'rgb(255,255,255)'});
		//$("#championssvg path").not(this).attr("filter", "url(#inner-shadow)");


	});

	$("#upcomingsvg path").click(function() {
		$(this).css({fill : "rgb(165,200,241)"});
		$(this).attr("filter", "none");
		$("#upcomingsvg path").not(this).css({fill : "rgb(233,234,234)", stroke: 'rgb(255,255,255)'});
		//$("#upcomingsvg path").not(this).attr("filter", "url(#inner-shadow1)");
	});
