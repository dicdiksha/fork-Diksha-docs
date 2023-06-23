var publisherArray = [{
    'diksha_ntptest_org': {}
}];

Array.prototype.groupBy = function (prop) {
    return this.reduce(function (groups, item) {
        const val = (item[prop] === 'Live') ? 'live' : (item[prop] === 'In Progress') ? 'inProgress' : item[prop];
        groups[val] = groups[val] || [];
        groups[val].push(item);
        return groups
    }, {})
};

if (localStorage.getItem('dikshaStaticMetricsData')) {
    var dikshaStaticData = JSON.parse(localStorage.getItem('dikshaStaticMetricsData'));
    if (window.location.pathname.indexOf('state-onboarded') != -1) {
        $('#onboardedStateCount').html('' + dikshaStaticData.metricsSummary.onboardSummary.stateCount);
        $('#onboardedStateYear').html('by ' + dikshaStaticData.metricsSummary.metricsAsOnYear);
        const groupByStatus = dikshaStaticData.onboardMetrics.states.groupBy('onboardStatus');
        $.each(groupByStatus.live, function (data) {
            var tableRowTemplate = "<tr class='state-info-container tr-border'><td><label class=col-text m-0>" + groupByStatus.live[data].stateName + "</label></td><td><label class='col-text m-0'>" + groupByStatus.live[data].onboardStatus + "</label></td><td><label class='col-text m-0'>" + groupByStatus.live[data].academicYear + "</label></td></tr>";
            $('#onboardedStatesTable').append(tableRowTemplate);
        });
        $.each(groupByStatus.inProgress, function (data) {
            var tableRowTemplate = "<tr class='state-info-container tr-border'><td><label class=col-text m-0>" + groupByStatus.inProgress[data].stateName + "</label></td><td><label class='col-text m-0'>" + groupByStatus.inProgress[data].onboardStatus + "</label></td><td><label class='col-text m-0'>" + groupByStatus.inProgress[data].academicYear + "</label></td></tr>";
            $('#onboardedStatesTable').append(tableRowTemplate);
        });
    } else if (window.location.pathname.indexOf('textbook-printed') != -1) {
        $('#textbookPrintedCount').html(formateIndianCurrency(dikshaStaticData.metricsSummary.etbSummary.etbPrintCount) + '+');
        $('#textbookPrintedYear').html('Textbook printed by ' + dikshaStaticData.metricsSummary.metricsAsOnYear);
        $('#textbookBoardCount').html('in ' + dikshaStaticData.metricsSummary.etbSummary.boardCount + ' boards');
        const groupByStatus = dikshaStaticData.etbPrintMetrics.boards.groupBy('status');
        console.log(groupByStatus);
        $.each(groupByStatus.live, function (data) {
            var tableRowTemplate = "<tr class='state-info-container tr-border'><td><label class='col-text m-0'>" + groupByStatus.live[data].board + "</label></td><td><label class='col-text m-0'>" + groupByStatus.live[data].stateName + "</label></td><td><label class='col-text m-0'>" + groupByStatus.live[data].classes + "</label></td><td><label class='col-text m-0'>" + groupByStatus.live[data].subjects + "</label></td><td><label class='col-text m-0'>" + groupByStatus.live[data].etbAcademicYear + "</label></td><td><label class='col-text m-0'>" + groupByStatus.live[data].status + "</label></td></tr>";
            $('#textbookPrintedTable').append(tableRowTemplate);
        });
        $.each(groupByStatus.inProgress, function (data) {
            var tableRowTemplate = "<tr class='state-info-container tr-border'><td><label class='col-text m-0'>" + groupByStatus.inProgress[data].board + "</label></td><td><label class='col-text m-0'>" + groupByStatus.inProgress[data].stateName + "</label></td><td><label class='col-text m-0'>" + groupByStatus.inProgress[data].classes + "</label></td><td><label class='col-text m-0'>" + groupByStatus.inProgress[data].subjects + "</label></td><td><label class='col-text m-0'>" + groupByStatus.inProgress[data].etbAcademicYear + "</label></td><td><label class='col-text m-0'>" + groupByStatus.inProgress[data].status + "</label></td></tr>";
            $('#textbookPrintedTable').append(tableRowTemplate);
        });
    }
} else {
    var tableRowTemplate = "<tr class='state-info-container tr-border'><td colspan=3><label class=col-text m-0>No Data Avaliable</label></td></tr>";
    $('#onboardedStatesTable').append(tableRowTemplate);
    $('#textbookPrintedTable').append(tableRowTemplate);
}

if (localStorage.getItem('dikshaAggregateMetricsData') && (localStorage.getItem('dikshaStaticMetricsData'))) {
    var data = JSON.parse(localStorage.getItem('dikshaAggregateMetricsData'));
    var dikshaStaticData = JSON.parse(localStorage.getItem('dikshaStaticMetricsData'));
    if (window.location.pathname.indexOf('digital-content') != -1) {
        $('#digitalContentTeacherCount').html('by ' + formateIndianCurrency(dikshaStaticData.metricsSummary.contentCreationSummary.teachers) + ' teachers, in ' + dikshaStaticData.metricsSummary.contentCreationSummary.languages + ' languages');
        $('#digitalContentCount').html(formateIndianCurrency(data.metrics_summary.totalContentPublished.count) + "+");
        $.each(data.metrics_summary.totalContentPublished.language_publisher_breakdown, function (ele) {
            var langString = "";
            var langCount = 0;
            $.each(data.metrics_summary.totalContentPublished.language_publisher_breakdown[ele].languages, function (subEle) {
                console.log(subEle);
                langString = (subEle < data.metrics_summary.totalContentPublished.language_publisher_breakdown[ele].languages.length - 1) ? langString + data.metrics_summary.totalContentPublished.language_publisher_breakdown[ele].languages[subEle].id + ", " : langString + data.metrics_summary.totalContentPublished.language_publisher_breakdown[ele].languages[subEle].id + " ";
                langCount = langCount + data.metrics_summary.totalContentPublished.language_publisher_breakdown[ele].languages[subEle].count;
            });
            var tableRowTemplate = "<tr class='state-info-container tr-border'><td><label class='col-text m-0'>" + data.metrics_summary.totalContentPublished.language_publisher_breakdown[ele].publisher + "</label></td><td><label class='col-text m-0'>" + langString + "</label></td><td><label class='col-text m-0'>" + formateIndianCurrency(langCount) + "</label></td></tr>";
            $('#digitalContentTable').append(tableRowTemplate);
        });
    }
} else {
    var tableRowTemplate = "<tr class='state-info-container tr-border'><td colspan=3><label class=col-text m-0>No Data Avaliable</label></td></tr>";
    $('#digitalContentTable').append(tableRowTemplate);
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
            var formateRS = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") +
                lastThree;
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