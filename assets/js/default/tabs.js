$(document).ready(function () {
    let origin = '';
    (window.origin == 'https://diksha.gov.in' || window.origin == 'https://staging.ntp.net.in') ? origin = window.origin : origin = 'https://preprod.ntp.net.in';
    let totalContentPlays = `https://diksha.gov.in/data/reports/cumulative_content_plays_till_date.json`,
        totalcontenttime = `https://diksha.gov.in/data/reports/overall_time_spent.json`,
        totalContributions = `https://diksha.gov.in/data/reports/total_contents_created.json`,//`https://ntpproductionall.blob.core.windows.net/reports/hawk-eye/total_contents_created.json`,
        totalContributors = `https://diksha.gov.in/data/reports/no_of_users_contributed_new.json`,//`https://ntpproductionall.blob.core.windows.net/reports/hawk-eye/no_of_users_contributed.json`,
        totalCourses = `https://diksha.gov.in/data/reports/total_courses_new.json`,//`https://ntpproductionall.blob.core.windows.net/reports/hawk-eye/total_courses_new.json`,
        totalEnrollments = `https://diksha.gov.in/data/reports/total_enrolments_new_new.json`,//`https://ntpproductionall.blob.core.windows.net/reports/hawk-eye/total_enrolments_new_new.json`,
        totalCompletions = `https://diksha.gov.in/data/reports/total_completions.json`,//`https://ntpproductionall.blob.core.windows.net/reports/hawk-eye/total_completions.json`,

    // let totalContentPlays = `https://obj.diksha.gov.in/odev-dev-diksha-publicreports/public/cumulative_content_plays_till_date.json`,
    //     totalcontenttime = `https://obj.diksha.gov.in/odev-dev-diksha-publicreports/public/overall_time_spent.json`,
    //     totalContributions = `https://obj.diksha.gov.in/odev-dev-diksha-publicreports/public/total_contents_created.json`,
    //     totalContributors = `https://obj.diksha.gov.in/odev-dev-diksha-publicreports/public/no_of_users_contributed_new.json`,
    //     totalCourses = `https://obj.diksha.gov.in/odev-dev-diksha-publicreports/public/total_courses_new.json`,
    //     totalEnrollments = `https://obj.diksha.gov.in/odev-dev-diksha-publicreports/public/total_enrolments_new_new.json`,
    //     totalCompletions = `https://obj.diksha.gov.in/odev-dev-diksha-publicreports/public/total_completions.json`,
        
        category = '',
        queryString = window.location.search;
    let a = new URLSearchParams(queryString);
    let clickType = a.get('type');
    let usageMetricsObj = {}, creationMetricsObj = {}, courseMetricsObj = {};

    $('[data-toggle="tooltip"]').tooltip();

    (clickType) ? radioTabsClickType(clickType) : radioTabsClickType('usage');

    $('input:radio[name=switch-two]').change(function () {
        radioTabsClickType($("input[name='switch-two']:checked").val());
    });

    $.date = function (orginaldate) {
      var monthArr = ["Jan", "Feb", "March", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
      var date = new Date(orginaldate);
      var day = date.getDate();
      var month = monthArr[date.getMonth()];
      var year = date.getFullYear();
      if (day < 10) {
        day = "0" + day;
      }
  
      var date = day + "-" + month + "-" + year;
      return date;
    };

    $(document).ready(function() {
      // GET USES MATRICS
            $.ajax({
              type: 'GET',
              url: totalcontenttime,
              success: function (data, textStatus, request) {
                  data = typeof data == "string" ? JSON.parse(data) : data;
                  var valInt = data.data[0]['Total Time Spent'] * 60;
                  $(".x-mins").text(parseInt(valInt).toLocaleString("en-IN"));
                  usageMetricsObj['xMins'] = parseInt(valInt).toLocaleString("en-IN");
              },
              error: function (request, textStatus, errorThrown) {
                  console.log(errorThrown);
              }
            });

            $.ajax({
                type: 'GET',
                url: totalContentPlays,
                success: function (data, textStatus, request) {
                    data = typeof data == "string" ? JSON.parse(data) : data;
                    $("#learningSession").text(parseInt(data.data[0]['Total Plays']).toLocaleString("en-IN"));
                    $(".updatedOn").text($.date(request.getResponseHeader('Last-Modified')));
                    usageMetricsObj['learningSession'] = parseInt(data.data[0]['Total Plays']).toLocaleString("en-IN");
                    usageMetricsObj['updatedOn'] = $.date(request.getResponseHeader('Last-Modified'));
                },
                error: function (request, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            });
      //GET CREATION MATRICS
            $.ajax({
              type: 'GET',
              url: totalContributions,
              success: function (data, textStatus, request) {
                data = typeof data == "string" ? JSON.parse(data) : data;
                console.log("alert1" + data)
                $("#totalContributions").text(parseInt(data.data[0]['Total Contents']).toLocaleString("en-IN"));
                $(".updatedOn").text($.date(request.getResponseHeader('Last-Modified')));
                creationMetricsObj['totalContributions'] = parseInt(data.data[0]['Total Contents']).toLocaleString("en-IN");
                creationMetricsObj['updatedOn'] = $.date(request.getResponseHeader('Last-Modified'));
              },
              error: function (request, textStatus, errorThrown) {
                console.log(errorThrown);
              }
            });

            $.ajax({
              type: 'GET',
              url: totalContributors,
              success: function (data, textStatus, request) {
                data = typeof data == "string" ? JSON.parse(data) : data;
                $("#totalContributors").text(parseInt(data.data[0]['No of Users Contributed']).toLocaleString("en-IN"));
                creationMetricsObj['totalContributors'] = parseInt(data.data[0]['No of Users Contributed']).toLocaleString("en-IN");
              },
              error: function (request, textStatus, errorThrown) {
                console.log(errorThrown);
              }
            });
      //GET COURSE MATRICS
            $.ajax({
              type: 'GET',
              url: totalCourses,
              success: function (data, textStatus, request) {
                data = typeof data == "string" ? JSON.parse(data) : data;
                $("#totalCourses").text(parseInt(data.data[0]['Total Courses']).toLocaleString("en-IN"));
                courseMetricsObj['totalCourses'] = parseInt(data.data[0]['Total Courses']).toLocaleString("en-IN");
              },
              error: function (request, textStatus, errorThrown) {
                console.log(errorThrown);
              }
            });

            $.ajax({
              type: 'GET',
              url: totalEnrollments,
              success: function (data, textStatus, request) {
                data = typeof data == "string" ? JSON.parse(data) : data;
                $("#totalEnrolments").text(parseInt(data.data[0]['Total Enrolments']).toLocaleString("en-IN"));
                courseMetricsObj['totalEnrolments'] = parseInt(data.data[0]['Total Enrolments']).toLocaleString("en-IN");
              },
              error: function (request, textStatus, errorThrown) {
                console.log(errorThrown);
              }
            });

            $.ajax({
              type: 'GET',
              url: totalCompletions,
              success: function (data, textStatus, request) {
                data = typeof data == "string" ? JSON.parse(data) : data;
                $("#totalCompletions").text(parseInt(data.data[0]['Total Completions']).toLocaleString("en-IN"));
                courseMetricsObj['totalCompletions'] = parseInt(data.data[0]['Total Completions']).toLocaleString("en-IN");
              },
              error: function (request, textStatus, errorThrown) {
                console.log(errorThrown);
              }
            });
     });
     

    function radioTabsClickType(clickType) {
        switch (clickType) {
            case 'usage':
            case 'usageMetrics':
                $(".section-creationMetrics, .section-courseMetrics, .metrix-div1, .download-statewise, .download-course").hide();
                $("#radio-one,#radio-four").prop("checked", true);
                $(".section-usageMetrics.sb-g").css("display", "grid");
                $(".state-ut-text, .section-usageMetrics, .metrix-div, .metrix-div2, .download-overall").show();
                category = "usage";
                getUsageMetrics();
                break;
            case 'creation':
            case 'creationMetrics':
                $(".download-overall, .download-statewise, .download-course, .state-ut-text, .section-usageMetrics, .section-courseMetrics, .metrix-div, .metrix-div2").hide();
                $("#radio-two,#radio-five").prop("checked", true);
                $(".section-creationMetrics").show();
                $(".metrix-div1").show();
                category = "creation";
                getCreationMetrics();
                break;
            case 'course':
            case 'courseMetrics':
                $(".section-usageMetrics, .section-creationMetrics, .download-overall, .download-statewise, .metrix-div, .metrix-div2").hide();
                $("#radio-three,#radio-six").prop("checked", true);
                $(".section-courseMetrics, .metrix-div1, .metrix-div2, .download-course, .state-ut-text").show();
                category = "course";
                getCoursesMetrics();
                break;
        }
    }

    function getUsageMetrics() {
        if($.isEmptyObject(usageMetricsObj)){
            $.ajax({
                type: 'GET',
                url: totalcontenttime,
                success: function (data, textStatus, request) {
                    data = typeof data == "string" ? JSON.parse(data) : data;
                    var valInt = data.data[0]['Total Time Spent'] * 60;
                    $(".x-mins").text(parseInt(valInt).toLocaleString("en-IN"));
                    usageMetricsObj['xMins'] = parseInt(valInt).toLocaleString("en-IN");
                },
                error: function (request, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            });
    
            $.ajax({
                type: 'GET',
                url: totalContentPlays,
                success: function (data, textStatus, request) {
                    data = typeof data == "string" ? JSON.parse(data) : data;
                    $("#learningSession").text(parseInt(data.data[0]['Total Plays']).toLocaleString("en-IN"));
                    $(".updatedOn").text($.date(request.getResponseHeader('Last-Modified')));
                    usageMetricsObj['learningSession'] = parseInt(data.data[0]['Total Plays']).toLocaleString("en-IN");
                    usageMetricsObj['updatedOn'] = $.date(request.getResponseHeader('Last-Modified'));
                },
                error: function (request, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            });
        }else{
            $(".x-mins").text(usageMetricsObj['xMins']);
            $("#learningSession").text(usageMetricsObj['learningSession']);
            $(".updatedOn").text(usageMetricsObj['updatedOn']);
        }
    }
    
    function getCreationMetrics() {
        if($.isEmptyObject(creationMetricsObj)){
            $.ajax({
                type: 'GET',
                url: totalContributions,
                success: function (data, textStatus, request) {
                  data = typeof data == "string" ? JSON.parse(data) : data;
                  console.log("alert1" + data)
                  $("#totalContributions").text(parseInt(data.data[0]['Total Contents']).toLocaleString("en-IN"));
                  $(".updatedOn").text($.date(request.getResponseHeader('Last-Modified')));
                  creationMetricsObj['totalContributions'] = parseInt(data.data[0]['Total Contents']).toLocaleString("en-IN");
                  creationMetricsObj['updatedOn'] = $.date(request.getResponseHeader('Last-Modified'));
                },
                error: function (request, textStatus, errorThrown) {
                  console.log(errorThrown);
                }
              });
    
              $.ajax({
                type: 'GET',
                url: totalContributors,
                success: function (data, textStatus, request) {
                  data = typeof data == "string" ? JSON.parse(data) : data;
                  $("#totalContributors").text(parseInt(data.data[0]['No of Users Contributed']).toLocaleString("en-IN"));
                  creationMetricsObj['totalContributors'] = parseInt(data.data[0]['No of Users Contributed']).toLocaleString("en-IN");
                },
                error: function (request, textStatus, errorThrown) {
                  console.log(errorThrown);
                }
              });
        }else{
            $("#totalContributions").text(creationMetricsObj['totalContributions']);
            $(".updatedOn").text(creationMetricsObj['updatedOn']);
            $("#totalContributors").text(creationMetricsObj['totalContributors']);
        }
    }

    function getCoursesMetrics() {
        if($.isEmptyObject(courseMetricsObj)){
            $.ajax({
              type: 'GET',
              url: totalCourses,
              success: function (data, textStatus, request) {
                data = typeof data == "string" ? JSON.parse(data) : data;
                $("#totalCourses").text(parseInt(data.data[0]['Total Courses']).toLocaleString("en-IN"));
                courseMetricsObj['totalCourses'] = parseInt(data.data[0]['Total Courses']).toLocaleString("en-IN");
              },
              error: function (request, textStatus, errorThrown) {
                console.log(errorThrown);
              }
            });

            $.ajax({
              type: 'GET',
              url: totalEnrollments,
              success: function (data, textStatus, request) {
                data = typeof data == "string" ? JSON.parse(data) : data;
                $("#totalEnrolments").text(parseInt(data.data[0]['Total Enrolments']).toLocaleString("en-IN"));
                courseMetricsObj['totalEnrolments'] = parseInt(data.data[0]['Total Enrolments']).toLocaleString("en-IN");
              },
              error: function (request, textStatus, errorThrown) {
                console.log(errorThrown);
              }
            });

            $.ajax({
              type: 'GET',
              url: totalCompletions,
              success: function (data, textStatus, request) {
                data = typeof data == "string" ? JSON.parse(data) : data;
                $("#totalCompletions").text(parseInt(data.data[0]['Total Completions']).toLocaleString("en-IN"));
                courseMetricsObj['totalCompletions'] = parseInt(data.data[0]['Total Completions']).toLocaleString("en-IN");
              },
              error: function (request, textStatus, errorThrown) {
                console.log(errorThrown);
              }
            });
        }else{
            $("#totalCourses").text(courseMetricsObj['totalCourses']);
            $("#totalEnrolments").text(courseMetricsObj['totalEnrolments']);
            $("#totalCompletions").text(courseMetricsObj['totalCompletions']);
        }
    }

});