$(document).ready(function () {

    let datasetsJson = `/assets/json/datasets.json`,
        dictionaryJson = `/assets/json/dictionary.json`;

    let current = new Date(),
        c_1 = new Date(),
        c_2 = new Date(),
        c_3 = new Date(),
        c_4 = new Date(),
        c_5 = new Date(),
        c_6 = new Date();
        c_7 = new Date();
        c_8 = new Date();
        c_9 = new Date();
        c_10 = new Date();
        c_11 = new Date();
        c_12 = new Date();
        c_13 = new Date();
        c_14 = new Date();
        c_15 = new Date();
        c_16 = new Date();
        c_17 = new Date();
        c_18 = new Date();
        c_19 = new Date();
        c_20 = new Date();
        c_21 = new Date();
        c_22 = new Date();
        c_23 = new Date();
        c_24 = new Date();
        c_29 = new Date();
          c_25 = new Date();
          c_26 = new Date();
          c_27 = new Date();
          c_28 = new Date();
    current.setDate(current.getDate());
    c_1.setDate(c_1.getDate() - 1);
    c_2.setDate(c_2.getDate() - 2);
    c_3.setDate(c_3.getDate() - 3);
    c_4.setDate(c_4.getDate() - 4);
    c_5.setDate(c_5.getDate() - 5);
    c_6.setDate(c_6.getDate() - 6);
    c_7.setDate(c_7.getDate() - 7);
    c_8.setDate(c_8.getDate() - 8);
    c_9.setDate(c_9.getDate() - 9);
    c_10.setDate(c_10.getDate() - 10);
    c_11.setDate(c_11.getDate() - 11);
    c_12.setDate(c_12.getDate() - 12);
    c_13.setDate(c_13.getDate() - 13);
    c_14.setDate(c_14.getDate() - 14);
    c_15.setDate(c_15.getDate() - 15);
    c_16.setDate(c_16.getDate() - 16);
    c_17.setDate(c_17.getDate() - 17);
    c_18.setDate(c_18.getDate() - 18);
    c_19.setDate(c_19.getDate() - 19);

    c_20.setDate(c_20.getDate() - 20);
    c_21.setDate(c_21.getDate() - 21);

    c_22.setDate(c_22.getDate() - 22);
    c_23.setDate(c_23.getDate() - 23);
    c_24.setDate(c_24.getDate() - 24);
    c_25.setDate(c_25.getDate() - 25);
    c_26.setDate(c_26.getDate() - 26);
    c_27.setDate(c_27.getDate() - 27);
    c_28.setDate(c_28.getDate() - 28);
    c_29.setDate(c_29.getDate() - 29);



    let pathname = window.location.pathname;
    const queryString = window.location.search;
    let a = new URLSearchParams(queryString);
    let d_id = a.get('datasetId');
    $("#lastUpdate-consumption").html(`Updated : ${moment().subtract(1, 'days').startOf('day').format('DD-MM-YYYY')}`);
    $(".mid-crumb").addClass("active");
    $(".isDetails").hide();
    $(".isUsefulLinks").hide();
    if (d_id) {
        getDatasetFromArray(d_id);
    }
    if (pathname.includes("useful-links")) {
        $(".mid-crumb").removeClass("active");
        $(".isUsefulLinks").show();
    }
    $('input[name="datethirty"]').daterangepicker({
        singleDatePicker: true,
        "startDate": moment(new Date()).subtract(1, 'd'),
        "dateFormat": "dd-mm-yy",
        "minDate": moment(new Date()).add(-1, 'M'),
        "maxDate": new Date()

    });


    $('input[name="daterange"]').daterangepicker({
        minDate: moment().subtract(1, 'months').subtract(2, 'days').format('MM/DD/YYYY'),
        maxDate: moment().subtract(2, 'days').format('MM/DD/YYYY'),
        startDate: moment().subtract(2, 'days').format('MM/DD/YYYY'),
        endDate: moment().subtract(2, 'days').format('MM/DD/YYYY')
    });


    getDictionaryItems();

    if (pathname == '/data/datasets/') {
        $.ajax({
            type: 'GET',
            url: datasetsJson,
            success: function (data, textStatus, request) {
                if (data.items.length > 0) {
                    let a = ``;
                    data.items.forEach(element => {
                        a += `<div class="sb-g-col-xs-12 sb-g-col-md-4 sb-g-col-lg-4 sb-g-col-xl-4 sb-g-col-xxl-4 sb-g-col-xxxl-4"> <div class="cd-card"> <div class="sb-g mb-15"> <div class="sb-g-col-xs-9 sb-g-col-md-9 sb-g-col-lg-9 sb-g-col-xl-9 sb-g-col-xxl-9 sb-g-col-xxxl-9"> <a class="view-dictionary-link showmore-catalogue-details" href="/data/datasets/details/?datasetId=${element.id}"> <h4>${element.title}</h4> <h6>Updated: ${moment(c_1).format("DD-MM-YYYY")}</h6> <h6 class="sub">${element.typeofupdate}</h6> <p class="truncate-overflow">${element.shortDescription}</p></a>`;
                        if (element.description) {
                            a += `<a class="view-dictionary-link showmore-catalogue-details catalogue-showmore" data-id="${element.id}}" href="/data/datasets/details/?datasetId=${element.id}">Show More</a>`;
                        }
                        a += `</div><div class="sb-g-col-xs-3 sb-g-col-md-3 sb-g-col-lg-3 sb-g-col-xl-3 sb-g-col-xxl-3 sb-g-col-xxxl-3"> <img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/diksha-mission/catalogue/Shape.svg" onerror="this.src='https://obj.diksha.gov.in/ntp-content-production/homepage/prod/diksha-mission/catalogue/Shape.svg'" class="icon" alt="Shape Image"> </div></div><div class="sb-g"> <div class="sb-g-col-xs-12 sb-g-col-md-12 sb-g-col-lg-12 sb-g-col-xl-12 sb-g-col-xxl-12 sb-g-col-xxxl-12"> <a class="view-dictionary-link dictionary-popup-open" data-id="${element.id}" title="View Dictionary"><img src="https://obj.diksha.gov.in/ntp-content-production/homepage/prod/diksha-mission/catalogue/dict.svg" onerror="this.src='https://obj.diksha.gov.in/ntp-content-production/homepage/prod/diksha-mission/catalogue/dict.svg'" class="mr-8" alt="Dictionary Image"></a> </div></div><hr/> <div class="sb-g"> <div class="sb-g-col-xs-9 sb-g-col-md-9 sb-g-col-lg-9 sb-g-col-xl-9 sb-g-col-xxl-9 sb-g-col-xxxl-9"> <h5>Download</h5><a href="${element.link}${moment(c_1).format("YYYY-MM-DD")}.csv" class="cd-button download-csv" download> CSV </a> </div><div class="sb-g-col-xs-3 sb-g-col-md-3 sb-g-col-lg-3 sb-g-col-xl-3 sb-g-col-xxl-3 sb-g-col-xxxl-3"> </div></div></div></div>`;
                    });
                    $(".datasets-objects").html(a);
                }
            },
            error: function (request, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });
    }

    function getDictionaryItems() {
        $.ajax({
            type: 'GET',
            url: dictionaryJson,
            success: function (data, textStatus, request) {
                if (data.items.length > 0) {
                    let content = '';
                    content = '<div class="table-responsive"><table class="table table-striped table-hover"><thead><tr><th scope="col">Sl.No.</th scope="col"><th scope="col">Column</th scope="col"><th scope="col">Label</th scope="col"><th scope="col">Description</th scope="col"></tr></thead><tbody>';
                    data.items.forEach(element => {
                        content += `<tr scope="row"><td>${element.id}</td><td>${element.column}</td><td>${element.label}</td><td>${element.description}</td></tr>`;
                    });
                    content += '</tbody></table></div>';
                    $(".dictionary-table-data").html(content);
                }
            },
            error: function (request, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });
    }

    function getDatasetFromArray(id) {
        $.ajax({
            type: 'GET',
            url: datasetsJson,
            success: function (data, textStatus, request) {
                $(".isDetails").show();
                $(".mid-crumb").removeClass("active");
                let a = '', b = '';
                data.items.forEach(element => {
                    if (element.id == id) {
                        a += `<div class="detail-description"> <div class="container-fluid sb-g p-0"> <div class="sb-g-col-xs-10 sb-g-col-sm-10 sb-g-col-md-10 sb-g-col-lg-10 sb-g-col-xl-10 sb-g-col-xxl-10 sb-g-col-xxxl-10"> <h2>${element.title}</h2> </div><div class="sb-g-col-xs-2 sb-g-col-sm-2 sb-g-col-md-2 sb-g-col-lg-2 sb-g-col-xl-2 sb-g-col-xxl-2 sb-g-col-xxxl-2"> </div></div><h6 class="upd">Updated : ${moment(c_1).format("DD-MM-YYYY")}</h6> <h6 class="sub">${element.typeofupdate}</h6> ${element.description}</div>`;
                        b += `<div class="sb-g-col-xs-4 sb-g-col-sm-4 sb-g-col-md-4 sb-g-col-lg-4 sb-g-col-xl-4 sb-g-col-xxl-4 sb-g-col-xxxl-4 breaker"> <ul class="nav nav-pills flex-column" id="myTab" role="tablist"> <li class="nav-item"> <a class="nav-link active" id="tab-3" data-toggle="tab" href="#tab-three" role="tab" aria-controls="tab-three" aria-selected="false">Latest</a> </li><li class="nav-item"> <a class="nav-link" id="tab-4" data-toggle="tab" href="#tab-four" role="tab" aria-controls="tab-four" aria-selected="false">${moment(c_3).format("DD-MM-YYYY")}</a> </li><li class="nav-item"> <a class="nav-link" id="tab-5" data-toggle="tab" href="#tab-five" role="tab" aria-controls="tab-five" aria-selected="false">${moment(c_4).format("DD-MM-YYYY")}</a> </li><li class="nav-item"> <a class="nav-link" id="tab-6" data-toggle="tab" href="#tab-six" role="tab" aria-controls="tab-six" aria-selected="false">${moment(c_5).format("DD-MM-YYYY")}</a> </li><li class="nav-item"> <a class="nav-link" id="tab-7" data-toggle="tab" href="#tab-seven" role="tab" aria-controls="tab-seven" aria-selected="false">${moment(c_6).format("DD-MM-YYYY")}</a> </li></ul></div><div class="sb-g-col-xs-8 sb-g-col-sm-8 sb-g-col-md-8 sb-g-col-lg-8 sb-g-col-xl-8 sb-g-col-xxl-8 sb-g-col-xxxl-8"> <div class="tab-content" id="downloadTabContent"> <div class="tab-pane fade show active" id="tab-three" role="tabpanel" aria-labelledby="tab-three"> <h4>${element.title}</h4> <p class="sub">Updated : ${moment(c_2).format("DD-MM-YYYY")}</p><div> <a onclick="checkIfLinkExist('${element.link}${moment(c_2).format("YYYY-MM-DD")}.csv')" class="download-buttons" download>Download CSV</a> </div></div><div class="tab-pane fade" id="tab-four" role="tabpanel" aria-labelledby="tab-four"> <h4>${element.title}</h4> <p class="sub">Updated : ${moment(c_3).format("DD-MM-YYYY")}</p><div> <a onclick="checkIfLinkExist('${element.link}${moment(c_3).format("YYYY-MM-DD")}.csv')" class="download-buttons" download>Download CSV</a> </div></div><div class="tab-pane fade" id="tab-five" role="tabpanel" aria-labelledby="tab-five"> <h4>${element.title}</h4> <p class="sub">Updated : ${moment(c_4).format("DD-MM-YYYY")}</p><div> <a onclick="checkIfLinkExist('${element.link}${moment(c_4).format("YYYY-MM-DD")}.csv')" class="download-buttons" download>Download CSV</a> </div></div><div class="tab-pane fade" id="tab-six" role="tabpanel" aria-labelledby="tab-six"> <h4>${element.title}</h4> <p class="sub">Updated : ${moment(c_5).format("DD-MM-YYYY")}</p><div> <a onclick="checkIfLinkExist('${element.link}${moment(c_5).format("YYYY-MM-DD")}.csv')" class="download-buttons" download>Download CSV</a> </div></div><div class="tab-pane fade" id="tab-seven" role="tabpanel" aria-labelledby="tab-seven"> <h4>${element.title}</h4> <p class="sub">Updated : ${moment(c_6).format("DD-MM-YYYY")}</p><div> <a onclick="checkIfLinkExist('${element.link}${moment(c_6).format("YYYY-MM-DD")}.csv')" class="download-buttons" download>Download CSV</a> </div></div></div></div>`;
                        $(".d-l-head").html(element.title);
                        $(".d-l-download").attr('onclick', `checkIfLinkExist('${element.link}${moment(c_2).format("YYYY-MM-DD")}.csv')`);
                    }
                });
                $("#download-list").html(`<option value="c-2" selected>Latest</option><option value="c-3">${moment(c_3).format("DD-MM-YYYY")}</option><option value="c-4">${moment(c_4).format("DD-MM-YYYY")}</option><option value="c-5">${moment(c_5).format("DD-MM-YYYY")}</option><option value="c-6">${moment(c_6).format("DD-MM-YYYY")}</option><option value="c-7">${moment(c_7).format("DD-MM-YYYY")}</option><option value="c-8">${moment(c_8).format("DD-MM-YYYY")}</option>
                <option value="c-9">${moment(c_9).format("DD-MM-YYYY")}</option><option value="c-10">${moment(c_10).format("DD-MM-YYYY")}</option><option value="c-11">${moment(c_11).format("DD-MM-YYYY")}</option><option value="c-12">${moment(c_12).format("DD-MM-YYYY")}</option><option value="c-13">${moment(c_13).format("DD-MM-YYYY")}</option><option value="c-14">${moment(c_14).format("DD-MM-YYYY")}</option><option value="c-15">${moment(c_15).format("DD-MM-YYYY")}</option>
                <option value="c-16">${moment(c_16).format("DD-MM-YYYY")}</option><option value="c-17">${moment(c_17).format("DD-MM-YYYY")}</option><option value="c-18">${moment(c_18).format("DD-MM-YYYY")}</option><option value="c-19">${moment(c_19).format("DD-MM-YYYY")}</option><option value="c-20">${moment(c_20).format("DD-MM-YYYY")}</option><option value="c-21">${moment(c_21).format("DD-MM-YYYY")}</option><option value="c-22">${moment(c_22).format("DD-MM-YYYY")}</option>
                <option value="c-23>${moment(c_23).format("DD-MM-YYYY")}</option><option value="c-24">${moment(c_24).format("DD-MM-YYYY")}</option><option value="c-25">${moment(c_25).format("DD-MM-YYYY")}</option><option value="c-26">${moment(c_26).format("DD-MM-YYYY")}</option><option value="c-27">${moment(c_27).format("DD-MM-YYYY")}</option><option value="c-28">${moment(c_28).format("DD-MM-YYYY")}</option><option value="c-29">${moment(c_29).format("DD-MM-YYYY")}</option>`);
                $(".content-text").html(a);
                $(".download-set-webview").html(b);
                $(".d-l-updated").html('Updated: ' + moment(c_2).format("DD-MM-YYYY"));
            },
            error: function (request, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });
    };

    $(document).on('click', '.dictionary-popup-open', function () {
        $(".dictionary-download-button").attr("data-id", $(this).attr("data-id"));
        $("#dictionaryModal").modal("show");
    });

    $("#download-list").on("change", function () {
        let final;
        switch ($(this).val()) {
            case 'c': final = current; break;
            case 'c-1': final = c_1; break;
            case 'c-2': final = c_2; break;
            case 'c-3': final = c_3; break;
            case 'c-4': final = c_4; break;
            case 'c-5': final = c_5; break;
            case 'c-6': final = c_6; break;
            case 'c-7': final = c_7; break;
            case 'c-8': final = c_8; break;
            case 'c-9': final = c_9; break;
            case 'c-10': final = c_10; break;
            case 'c-11': final = c_11; break;
            case 'c-12': final = c_12; break;
            case 'c-13': final = c_13; break;
            case 'c-14': final = c_14; break;
            case 'c-15': final = c_15; break;
            case 'c-16': final = c_16; break;
            case 'c-17': final = c_17; break;
            case 'c-18': final = c_18; break;
            case 'c-19': final = c_19; break;
            case 'c-20': final = c_20; break;
            case 'c-21': final = c_21; break;
            case 'c-22': final = c_22; break;
            case 'c-23': final = c_23; break;
            case 'c-24': final = c_24; break;
            case 'c-25': final = c_25; break;
            case 'c-26': final = c_26; break;
            case 'c-27': final = c_27; break;
            case 'c-28': final = c_28; break;
            case 'c-29': final = c_29; break;
           
            
            
        }
        $(".d-l-updated").html('Updated: ' + moment(final).format("DD-MM-YYYY"));
        $(".d-l-download").attr('onclick', `checkIfLinkExist('https://ntpproductionall.blob.core.windows.net/public-reports/public/diksha-data-exhaust/${moment(final).format("YYYY-MM-DD")}.csv')`);
    });


    $(".datasets-navigation").on("click", function () {
        window.location.href = '/data/datasets/';
    });

    $(".dictionary-download-button").on("click", function () {
        let did = $(this).attr("data-id");
        $.ajax({
            type: 'GET',
            url: dictionaryJson,
            success: function (data, textStatus, request) {
                if (data.items.length > 0) {
                    var headers = {
                        id: 'Sl.No',
                        column: "Column",
                        label: "Label",
                        description: "Description"
                    };

                    var itemsFormatted = [];

                    data.items.forEach((item) => {
                        itemsFormatted.push({
                            id: item.id,
                            column: item.column,
                            label: item.label,
                            description: item.description
                        });
                    });

                    var fileTitle = `diksha-data-dictionary-${did}`;

                    exportDetailsCSVFile(headers, itemsFormatted, fileTitle);
                }
            },
            error: function (request, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });
    })
});

function convertToDetailsCSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line != '') line += ','

            line += array[i][index];
        }

        str += line + '\r\n';
    }

    return str;
}

function exportDetailsCSVFile(headers, items, fileTitle) {
    if (headers) {
        items.unshift(headers);
    }

    // Convert Object to JSON
    var jsonObject = JSON.stringify(items);

    var csv = convertToDetailsCSV(jsonObject);

    var exportedFilenmae = fileTitle + '.csv' || 'export.csv';

    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", exportedFilenmae);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}
function getDateLink() {
    var getDate = $(".download-date-picker").val();
    return moment(getDate).format('YYYY-MM-DD'); 
}

function checkIfLinkExist(link) {
    downloadFile(link, function (resp) {
        console.log(resp);
        if (resp) {
            console.log(resp);
            displayGrowl("Preparing to download the report ...", true);
            window.location = link;
        } else if (resp == false) {
            displayGrowl("Report does not exist for the given date", false);
        }
    });
}
function downloadFile(url, callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.status == 200) {
            this.abort();
            callback(true);
        } else if (this.status == 404 && this.readyState == 4) {
            callback(false);
        }
    }
    xhttp.open("GET", url);
    xhttp.send();
}

function displayGrowl(message, type) {
    if (type == true) {
        $('.growl-notice-success').fadeIn().html(message);
        setTimeout(function () {
            $('.growl-notice-success').fadeOut();
        }, 3500);
    } else if (type == false) {
        $('.growl-notice-fail').fadeIn().html(message);
        setTimeout(function () {
            $('.growl-notice-fail').fadeOut();
        }, 3500);
    }
}
