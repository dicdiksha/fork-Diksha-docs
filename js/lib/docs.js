/* Documentation sample */

// function loadPage(page,a) {

// 	var img = $('<img />');
// 	img.ready(function() {
// 		var container = $('.sample-docs .p'+page);
// 		img.css({width: container.width(), height: container.height()});
// 		img.appendTo($('.sample-docs .p'+page));
// 		container.find('.loader').remove();
// 	});
// 	if(a=="sample-docs"){
// 		img.attr('src', 'pages/section1/' +  (page-1) + '.png');
// 	}else if(a=="sample-docs1"){
// 		img.attr('src', 'pages/section2/' +  (page-1) + '.png');
// 	}


// }

function addPage(page, book, a) {
	console.log(a);
	var id, pages = book.turn('pages');

	var element = $('<div />', {});

	if (book.turn('addPage', element, page, a)) {
		console.log(a);
		if (page<28) {
			element.html('<div class="gradient"></div><div class="loader"></div>');
			//loadPage(page,a);
		}
	}
}

function updateTabs() {
	
	var tabs = {7: 'Clases', 12:'Constructor', 14:'Properties', 16:'Methods', 23:'Events'},
		left = [],
		right = [],
		book = $('.sample-docs'),
		actualPage = book.turn('page'),
		view = book.turn('view');

	for (var page in tabs) {
		var isHere = $.inArray(parseInt(page, 10), view)!=-1;

		if (page>actualPage && !isHere)
			right.push('<a href="#page/' + page + '">' + tabs[page] + '</a>');
		else if (isHere) {
			
			if (page%2===0)
				left.push('<a href="#page/' + page + '" class="on">' + tabs[page] + '</a>');
			else
				right.push('<a href="#page/' + page + '" class="on">' + tabs[page] + '</a>');
		} else
			left.push('<a href="#page/' + page + '">' + tabs[page] + '</a>');

	}

	$('.sample-docs .tabs .left').html(left.join(''));
	$('.sample-docs .tabs .right').html(right.join(''));

}


function numberOfViews(book) {
	return book.turn('pages') / 2 + 1;
}


function getViewNumber(book, page) {
	return parseInt((page || book.turn('page'))/2 + 1, 10);
}


function moveBar(yes) {
	if (Modernizr && Modernizr.csstransforms) {
		$('#slider .ui-slider-handle').css({zIndex: yes ? -1 : 10000});
	}
}

function setPreview(view) {

	var previewWidth = 115,
		previewHeight = 73,
		previewSrc = '',
		preview = $(_thumbPreview.children(':first')),
		numPages = (view==1 || view==$('#slider').slider('option', 'max')) ? 1 : 2,
		width = (numPages==1) ? previewWidth/2 : previewWidth;

	_thumbPreview.
		addClass('no-transition').
		css({width: width + 15,
			height: previewHeight + 15,
			top: -previewHeight - 30,
			left: ($($('#slider').children(':first')).width() - width - 15)/2
		});

	preview.css({
		width: width,
		height: previewHeight
	});

	if (preview.css('background-image')==='' ||
		preview.css('background-image')=='none') {

		preview.css({backgroundImage: 'url(' + previewSrc + ')'});

		setTimeout(function(){
			_thumbPreview.removeClass('no-transition');
		}, 0);

	}

	preview.css({backgroundPosition:
		'0px -'+((view-1)*previewHeight)+'px'
	});
}
