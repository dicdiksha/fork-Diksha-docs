var prodContentID = ["do_313293175154794496141228","do_313293140881448960141190","do_31331574689208729617900","do_31331574954357555217906","do_31331865137675468814160","do_31331874940900147214675","do_3133172511066767361872","do_3133172617787228161888","do_313316683866103808111840","do_313316683933589504111841","do_31331865464571494414173","do_31331865638068224014176","do_3133172892870983681943","do_3133172941777059841954","do_313316679921401856111832","do_313316680339447808111834","do_31331866823552204814210","do_31331876672904396814782","do_3133172972659179521961","do_3133172991102730241967","do_31331527828932198417788","do_31331528387569254417795","do_31331528676771430417798","do_31331529298522112017807","do_31331526724221337617774","do_31331527061940633617778","do_313316660702060544111733","do_313316660813185024111734","do_31331576647050035217921","do_31331576798757683217923","do_31331649620751974419936","do_31331649740954009619938","do_313316664089681920111745","do_313316671616122880111814","do_31331515922916147217729","do_31331515946471424017731","do_313316628826267648111619","do_313316629588246528111621","do_31332704423729561612919","do_31332704299693670412918","do_31332704180844953612917","do_31332704028223897612915","do_31332703700141670412912","do_31332703856751411212914"];

var perProdContentID = ["do_313293175154794496141228","do_313293140881448960141190","do_31331574689208729617900","do_31331574954357555217906","do_31331865137675468814160","do_31331874940900147214675","do_3133172511066767361872","do_3133172617787228161888","do_313316683866103808111840","do_313316683933589504111841","do_31331865464571494414173","do_31331865638068224014176","do_3133172892870983681943","do_3133172941777059841954","do_313316679921401856111832","do_313316680339447808111834","do_31331866823552204814210","do_31331876672904396814782","do_3133172972659179521961","do_3133172991102730241967","do_31331527828932198417788","do_31331528387569254417795","do_31331528676771430417798","do_31331529298522112017807","do_31331526724221337617774","do_31331527061940633617778","do_313316660702060544111733","do_313316660813185024111734","do_31331576647050035217921","do_31331576798757683217923","do_31331649620751974419936","do_31331649740954009619938","do_313316664089681920111745","do_313316671616122880111814","do_31331515922916147217729","do_31331515946471424017731","do_313316628826267648111619","do_313316629588246528111621","do_31332704423729561612919","do_31332704299693670412918","do_31332704180844953612917","do_31332704028223897612915","do_31332703700141670412912","do_31332703856751411212914"];

var contentID;
var metadataArray = [];
var iframeFlag = true;
var previewElement;
var baseUrl;

if (window.location.hostname == 'localhost' || window.location.hostname == '127.0.0.1') {
    baseUrl = "https://diksha.gov.in/api/content/v1";
    contentID = prodContentID;
} else {
    baseUrl = "https://diksha.gov.in/api/content/v1";
    if (window.location.hostname == 'diksha.gov.in') {
        contentID = prodContentID;
    } else if (window.location.hostname == 'staging.ntp.net.in') {
        contentID = prodContentID;
    } else if (window.location.hostname == 'preprod.ntp.net.in') {
        contentID = prodContentID;
    }
}
var previewObj = {
    "context": {
        "mode": "play",
        "partner": [],
        "contentId": "",
        "sid": "",
        "uid": "",
        "channel": "",
        "dims": [],
        "tags": [],
        "app": [
            ""
        ],
        "cdata": []
    },
    "config": {
        "showEndPage": false,
        "showStartPage": true,
        "host": "",
        "overlay": {
            "showUser": false,
            "showNext": true, // show/hide next navigation button on content. default is true
            "showPrevious": true,
            "showReload": false
        },
        "splash": {
            "text": "",
            "icon": "",
            "bgImage": "assets/icons/splacebackground_1.png",
            "webLink": ""
        },
        "apislug": "/action",
        "repos": [],
        "plugins": [
            {
                "id": "org.sunbird.player.endpage",
                "ver": 1.1,
                "type": "plugin"
            }
        ],
        "enableTelemetryValidation": false
    },
    "metadata": {}, "data": {}
};

// loading content player on click
var iframeContentHtml = '<iframe id="preview" src="/node_modules/@project-sunbird/content-player/preview.html?webview=true" width=100% height=100% onload="iframePreview()"></iframe>';
var playfirstContent = "";

var contentIdSearchUrl = baseUrl + "/search";
var payload = {
    request: {
        filters: {
            identifier: contentID
        }
    }
}
$.ajax({
    url: contentIdSearchUrl,
    type: "POST", async: false,
    dataType: "json",
    data: JSON.stringify(payload),
    contentType: "application/json",
    success: function (data) {
        let result = data.result.content;
        prodContentID.forEach(doId=>{
            result.forEach(data=>{
                if(doId==data.identifier){
                    metadataArray.push(data);
                }
            });
        });
    },
    complete: function () {
        createTemplate();
    }
});

function createTemplate() {
    $.each(metadataArray, function (data) {
        if (data === 0) {
            playfirstContent = metadataArray[data].identifier;
        }
        var grades = "";
        $.each(metadataArray[data].gradeLevel, function (gradeData) {
            grades = grades + metadataArray[data].gradeLevel[gradeData].replace('Class', '');
        });
        var divTemplate = "<div class='card-content' id='" + metadataArray[data].identifier + "' onclick=playFeatureContent('" + metadataArray[data].identifier + "')><div class='card-section1'><div class='img-div mr-2'><img class='img-fluid' src='" + metadataArray[data].appIcon + "' alt='Feature Content Img'></div><div class='card-details'><div class='subject-details'><label class='m-0 d-block'>" + metadataArray[data].subject + "</label></div></div></div><div class='card-section2'><div class='card-title'><label>" + metadataArray[data].name + "</label></div><div class='syslabs-details'><label class='m-0'>" + metadataArray[data].organisation.toString() + "</label></div></div></div>";
        $('#featureContentCardContainer').append(divTemplate);
        $('#featureContentCardContainerMobile').append(divTemplate);
    });
}

//<div class='action-label'><label class='m-0'>Learn</label></div><div class='subject-details'><label class='m-0 d-block'>Subject: " + metadataArray[data].subject + "</label><label class='m-0 d-block'>Class: " + grades + "</label><label class='m-0 d-block'>Medium: " + ((metadataArray[data].medium) ? metadataArray[data].medium : '') + "</label></div>

$('#featureContentPlay').on('click', function () {
    playFeatureContent("" + playfirstContent);
});

function playFeatureContent(contentID) {
    previewObj.data = {};
    $('#' + contentID).addClass('active').siblings().removeClass('active');
    var selectedMetadata;
    $.each(metadataArray, function (data) {
        if (metadataArray[data].identifier === contentID) {
            selectedMetadata = metadataArray[data];
        }
    });
    previewObj.metadata = selectedMetadata;
    if (selectedMetadata.mimeType === 'application/vnd.ekstep.ecml-archive') {
        var readUrl = baseUrl + "/read/";
        $.ajax({
            url: readUrl + contentID + '?fields=body',
            type: "GET", async: false,
            dataType: "json",
            contentType: "application/json",
            success: function (data) {
                content = data.result.content;
                previewObj.data = JSON.parse(content.body);
                addIframeAndPreview(previewObj);
            },
            complete: function () {
            }
        });
    } else {
        addIframeAndPreview(previewObj);
    }
}

function addIframeAndPreview(previewObj) {
    if (iframeFlag) {
        $('#featuredContentPlayer').append(iframeContentHtml);
        $('#featureContentPlay').css({ 'display': 'none' });
        previewElement = jQuery('#preview')[0];
        iframeFlag = false;
    } else {
        previewElement.src = previewElement.src;
    }
}

function iframePreview() {
    previewElement.contentWindow.initializePreview(previewObj);
}