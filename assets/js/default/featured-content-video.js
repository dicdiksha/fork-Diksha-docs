
var prodContentID = ["do_31341568892819046413475", "do_31350989395470745612364", "do_3134672440725258241710","do_3134672487375257601312",
"do_31347649720567398412062","do_31348725056307200012098","do_31352600010726604811696"
];
var contentID;
var metadataArray = [];
var iframeFlag = true;
var previewElement;
var baseUrl="https://diksha.gov.in/api/content/v1";
    baseUrl = "https://diksha.gov.in/api/content/v1";
    contentID = prodContentID;

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
        "cdata": [],
        "did" : ""
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
var iframeContentHtml = '<iframe id="preview" src="../../node_modules/@project-sunbird/content-player/preview.html?webview=true" width=100% height=100% onload="iframePreview()"></iframe>';
var playfirstContent = "";

var contentIdSearchUrl = baseUrl + "/search";
var payload = {
    request: {
        filters: {
            identifier: contentID
        }
    }
}
async function contentSearch () {
    try {
    await fetch(contentIdSearchUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        }).then(response => response.text())
        .then(data => {
            metadataArray = JSON.parse(data).result.content;
            createTemplate();
        })
    }catch(error){
       console.log(error);
    }
        
    
    }
  
  
  contentSearch();

function createTemplate() {
    $.each(metadataArray, function (data) {
        if (data === 0) {
            playfirstContent = metadataArray[data].identifier;
        }
        var grades = "";
        $.each(metadataArray[data].gradeLevel, function (gradeData) {
            grades = grades + metadataArray[data].gradeLevel[gradeData].replace('Class', '');
        });
        var divTemplate = "<div class='card-content' id='" + metadataArray[data].identifier + "' onclick=playFeatureContent('" + metadataArray[data].identifier + "')><div class='card-section1 mb-2'><div class='img-div mr-2'><img class='img-fluid' src='" + metadataArray[data].appIcon + "' alt='Feature Content Img'></div><div class='card-details'><div class='action-label'><label class='m-0'>Learn</label></div><div class='subject-details'><label class='m-0 d-block'>Subject: " + metadataArray[data].subject + "</label><label class='m-0 d-block'>Class: " + grades + "</label><label class='m-0 d-block'>Medium: " + ((metadataArray[data].medium) ? metadataArray[data].medium : '') + "</label></div></div></div><div class='card-section2'><div class='card-title'><label>" + metadataArray[data].name + "</label></div><div class='syslabs-details'><label class='m-0'>" + metadataArray[data].board + "</label></div></div></div>";
        $('#featureContentCardContainer').append(divTemplate);
        $('#featureContentCardContainerMobile').append(divTemplate);
    });
}
document.getElementById("featureContentPlay").onclick = function(){
    playFeatureContent("" + playfirstContent);
}

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
    var c_did = sessionStorage.getItem("FP_T");
    previewObj.context.did = c_did;
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