$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();

  let origin = '';
  if (window.origin == 'https://diksha.gov.in' || window.origin == 'https://staging.ntp.net.in') {
    origin = window.origin;
  } else {
    origin = 'https://preprod.ntp.net.in'
  }

  let weeklyPlaysByState = `https://diksha.gov.in/data/reports/overall_play_state_data.json`,
    stateWiseDataCount = `https://diksha.gov.in/data/reports/state_wise_course_data_public.json`,//`https://ntpproductionall.blob.core.windows.net/reports/hawk-eye/state_wise_course_data_public.json`,
    totalEnrollments = `https://diksha.gov.in/data/reports/total_enrolments_new_new.json`,
  // let weeklyPlaysByState = `https://obj.diksha.gov.in/odev-dev-diksha-publicreports/public/weekly_plays_by_state.json`,
  //   stateWiseDataCount = `https://obj.diksha.gov.in/odev-dev-diksha-publicreports/public/state_wise_course_data_public.json`,//`https://ntpproductionall.blob.core.windows.net/reports/hawk-eye/state_wise_course_data_public.json`,
    // totalEnrollments = `https://obj.diksha.gov.in/odev-dev-diksha-publicreports/public/total_enrolments_new_new.json`,
    mapsJson = `https://obj.diksha.gov.in/odev-dev-diksha-publicreports/usage_metrics/maps.json`,
    contentPlayData = d3.map(),
    tenantSlugs = [],
    dataset = [], MapJSON, category = "",
    pathname = window.location.pathname,
    queryString = window.location.search,
    a = new URLSearchParams(queryString),
    doubleCheck = ['Andaman & Nicobar Islands', 'Andaman and Nicobar', 'Uttar Pradesh', 'Uttar pradesh', 'Delhi', 'National Capital Territory of Delhi', 'Union Territory of Puducherry', 'Puducherry', 'unknown', 'Jammu and Kashmir', 'Jammu And Kashmir'];
  ;
  let slugname = a.get('id');
  let clickType = a.get('type');

  $.getJSON(mapsJson, function (data) {
    console.log("data---",data);
    MapJSON = data;
    (clickType) ? radioTabsClickType(clickType) : radioTabsClickType('usage');
  });

  const colorsArr = [
    { "range": "200000000+", "color": "#08306b" },
    { "range": "100000000+", "color": "#0a4a90" },
    { "range": "50000000+", "color": "#1864aa" },
    { "range": "20000000+", "color": "#2f7ebc" },
    { "range": "10000000+", "color": "#4b97c9" },
    { "range": "5000000+", "color": "#6daed5" },
    { "range": "2000000+", "color": "#93c3df" },
    { "range": "1000000+", "color": "#b5d4e9" },
    { "range": "500000+", "color": "#cfe1f2" },
    { "range": "<500000", "color": "#e3eef9" }
  ];


  $('input:radio[name=switch-two]').change(function () {
    radioTabsClickType($("input[name='switch-two']:checked").val());
  });

  function radioTabsClickType(clickType) {
    switch (clickType) {
      case 'usage':
      case 'usageMetrics':
        category = "usage";
        getUsageMetrics();
        break;
      case 'creation':
      case 'creationMetrics':
        category = "creation";
        getCreationMetrics();
        $('.top-states-table').hide();
        break;
      case 'course':
      case 'courseMetrics':
        category = "course";
        getCoursesMetrics();
        $('.top-states-table').hide();
        break;
    }
  }

  $("body").ready(function ($) {
    $(".download-overall").hide();
    $(".state-wise-value").hide();
    $(".minutes-of-usage").show();
    $(".state-ut-text").show();
    $(".download-overall").show();
    $(".download-statewise").hide();

    $(".download-overall").on('click', function () {
      download(dataset, 'India');
      window.logInteractEvent('home', 'download', '', 'public-dashboard', 'public-dashboard', 'DeviceType', window.getDeviceTypeValue(), 'ReportName', 'UsageMetrics.csv', '', '', '', '');
      return false;
    })

    $(".download-statewise").on('click', function () {
      download(stateRes, $(this).attr('data-state'));
      window.logInteractEvent('home', 'download', 'category/map', 'state-result', 'state-result', 'DeviceType', window.getDeviceTypeValue(), 'FromPage', 'public-dashboard', 'ReportName', $(this).attr('data-state') + '.csv', 'State', $(this).attr('data-state'));
      return false;
    })
  });

  function getUsageMetrics() {
    d3.selectAll('.svg-container svg').remove();
    d3.selectAll('#linegraph svg').remove();
    d3.selectAll('.map_tooltip').remove();
    d3.selectAll('.tooltip').remove();
    contentPlayData.clear();
    $.ajax({
      type: "GET",
      url: weeklyPlaysByState,
      success: function (e, t, n) {
        $.get(MapJSON.MAP_META.India.geoDataFile, function (topo) {
          tenantSlugs = [];
          tenantSlugs.push({
            dik_name: 'India',
            st_nm: 'India',
            slug: 'IN',
            stateJSON: 'India'
          });
          topo['objects']['india'].geometries.forEach(element => {
            tenantSlugs.push({
              dik_name: element.properties.dik_name,
              st_nm: element.properties.st_nm,
              slug: element.properties.slug,
              stateJSON: element.properties.stateJSON,
              scale: element.properties.scale
            });
          });
          e = typeof e == "string" ? JSON.parse(e) : e;
          const arr = e['data'];
          
          const result = arr.map((eachValue)=>{
            return {
              ...eachValue,
            'learning sessions' : parseInt(eachValue['Total Learning Session'])}
          });
          let dataset = [];
          result.forEach(element => {
              tenantSlugs.forEach(elem => {
                if (elem.st_nm === element.State) {
                  dataset.push({
                    name: element.State,
                    count: element['learning sessions'],
                    slug: elem.slug,
                    value: fnum(element['learning sessions'])
                  });
                }
              });
          });

          // dataset.splice(dataset.findIndex(item => item.name === "Daman & Diu"), 1)//remove daman and diu from dropdown
          dataset.sort((a, b) => a.slug.localeCompare(b.slug));
          let topElem = dataset.sort((a, b) => b.count - a.count).slice(0, 10);
          let remainingElem = dataset.sort((a, b) => b.count - a.count).slice(10, dataset.length);
          remainingElem = remainingElem.sort((a, b) => a.slug.localeCompare(b.slug));
          $('.dashboard-states').empty();

          $('.dashboard-states').append('<option value="India" selected>India</option>');
          $('.dashboard-states').append('<optgroup label="Top States">');
          let tabledata = '<table><tr><th></th><th>STATE / UT</th><th>Total Learning Sessions</th></tr>';
          topElem.forEach((element, index) => {
            $('.dashboard-states').append('<option value="' + element.name + '">' + element.name + '</option>');
            tabledata += '<tr><td>' + (index + 1) + '</td><td>' + element.name + '</td><td>' + element.value + '</td></tr>';
          });
          $('.dashboard-states').append(' </optgroup><optgroup label="All States / UTs">');
          tabledata += '</table>';
          $('.top-states-table').html(tabledata);
          remainingElem.forEach(element => {
            $('.dashboard-states').append('<option value="' + element.name + '">' + element.name + '</option>');
          });
          dataset.forEach(element => {
            contentPlayData.set(element.name, +element.count);
          });
          if (slugname != null && slugname != '' && typeof slugname !== 'undefined') {
            let stateObj = tenantSlugs.filter(item => item.slug === slugname);
            changeLayouts(stateObj[0].st_nm, 'load', 'usage', 'usage');
          } else {
            changeLayouts('India', 'load', 'usage', 'usage');
          }
        });
      },
      error: function (e, t, n) {
        console.log(n)
      },
      complete: function (resp) {

      }
    });
  }

  function getCreationMetrics() {
    d3.selectAll('.svg-container svg').remove();
    d3.selectAll('#linegraph svg').remove();
    d3.selectAll('.map_tooltip').remove();
    d3.selectAll('.tooltip').remove();
    contentPlayData.clear();
  }

  function getCoursesMetrics() {
    d3.selectAll('.svg-container svg').remove();
    d3.selectAll('#linegraph svg').remove();
    d3.selectAll('.map_tooltip').remove();
    d3.selectAll('.tooltip').remove();
    contentPlayData.clear();

    $.ajax({
      type: 'GET',
      url: stateWiseDataCount,
      success: function (e, t, n) {
        var modifiedDate = $.date(n.getResponseHeader('Last-Modified'));
        $(".updatedOn").text(modifiedDate);
        $.get(MapJSON.MAP_META.India.geoDataFile, function (topo) {
          tenantSlugs = [];
          tenantSlugs.push({
            dik_name: 'India',
            st_nm: 'India',
            slug: 'IN',
            stateJSON: 'India'
          });
          topo['objects']['india'].geometries.forEach(element => {
            tenantSlugs.push({
              dik_name: element.properties.dik_name,
              st_nm: element.properties.st_nm,
              slug: element.properties.slug,
              stateJSON: element.properties.stateJSON,
              scale: element.properties.scale
            });
          });
          e = typeof e == "string" ? JSON.parse(e) : e;
          const arr = e['data'];
          const result = [...arr.reduce((r, o) => {
            const key = o.State;

            const item = r.get(key) || Object.assign({}, o, {
              'Total Enrolments': 0
            });

            item['Total Enrolments'] += (parseInt(o[
              'Total Enrolments'],
              10));

            return r.set(key, item);
          }, new Map).values()];
          dataset = [];
          result.forEach(element => {
            if (element.State === 'Puducherry') {
              dataset.push({
                name: "Pondicherry",
                enrolments: Number(element['Total Enrolments']),
                enrolmentsValue: fnum(Number(element['Total Enrolments'])),
                completions: Number(element['Total Completions']),
                completionsValue: fnum(Number(element['Total Completions'])),
                certificates: Number(element['Total Certificates Issued']),
                certificatesValue: fnum(Number(element['Total Certificates Issued'])),
                slug: "PN",
              })
            } 
            // else if (element.State === 'Dadra and Nagar Haveli and Daman and Diu') {
            //   dataset.push({
            //     name: "Dadra and Nagar Haveli and Daman and Diu",
            //     enrolments: Number(element['Total Enrolments']),
            //     enrolmentsValue: fnum(Number(element['Total Enrolments'])),
            //     completions: Number(element['Total Completions']),
            //     completionsValue: fnum(Number(element['Total Completions'])),
            //     certificates: Number(element['Total Certificates Issued']),
            //     certificatesValue: fnum(Number(element['Total Certificates Issued'])),
            //     slug: 'D & NH & DD',
            //   })
            // }

            tenantSlugs.forEach(elem => {
              if (elem.st_nm === element.State) {
                dataset.push({
                  name: element.State,
                  enrolments: Number(element['Total Enrolments']),
                  enrolmentsValue: fnum(Number(element['Total Enrolments'])),
                  completions: Number(element['Total Completions']),
                  completionsValue: fnum(Number(element['Total Completions'])),
                  certificates: Number(element['Total Certificates Issued']),
                  certificatesValue: fnum(Number(element['Total Certificates Issued'])),
                  slug: elem.slug
                });
              }
            });
          });
         // dataset.splice(dataset.findIndex(item => item.name === "Daman & Diu"), 1)//remove daman and diu from dropdown
          dataset.sort((a, b) => a.slug.localeCompare(b.slug));
          let topElem = dataset.sort((a, b) => b.enrolments - a.enrolments).slice(0, 10);
          let remainingElem = dataset.sort((a, b) => b.enrolments - a.enrolments).slice(10, dataset.length);
          remainingElem = remainingElem.sort((a, b) => a.slug.localeCompare(b.slug));
          $('.dashboard-states').empty();

          $('.dashboard-states').append('<option value="India" selected>India</option>');
          $('.dashboard-states').append('<optgroup label="Top States">');
          topElem.forEach(element => {
            $('.dashboard-states').append('<option value="' + element.name + '">' + element.name + '</option>');
          });
          $('.dashboard-states').append(' </optgroup><optgroup label="All States / UTs">');
          remainingElem.forEach(element => {
            $('.dashboard-states').append('<option value="' + element.name + '">' + element.name + '</option>');
          });
          dataset.forEach(element => {
            contentPlayData.set(element.name, +element.enrolments);
          });
          if (slugname != null && slugname != '' && typeof slugname !== 'undefined') {
            let stateObj = tenantSlugs.filter(item => item.slug === slugname);
            changeLayouts(stateObj[0].st_nm, 'load', 'course', 'course');
          } else {
            changeLayouts('India', 'load', 'course', 'course');
          }
        })
      },
      error: function (request, textStatus, errorThrown) {
        console.log(errorThrown);
      }
    });
  }

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

  $(".dashboard-states").on("change", function (e) {
    var types = $(this).attr("type");
    let use = "usage"
    if(types){
      use = types;
    }
    changeLayouts($(this).children("option:selected").val(), 'dropdown', use, types);
  });

  function pathClick(d, type) {
    if (d.enrolments && category == 'course') {
      changeLayouts(d.properties.st_nm, 'map', 'course', 'course');
    } else {
      if (d.contentPlayTotal && category == 'usage') {
        changeLayouts(d.properties.st_nm, 'map', 'usage', 'usage');
      }
    }
  }

  function changeLayouts(name, type, use, callType) {
    if (name !== 'India') {
      $(".top-states-table").hide();
      $(".dashboard-states").val(name).attr("selected", "selected");
      const stateObj = tenantSlugs.filter(item => item.st_nm === name);
      d3.selectAll('.svg-container svg').remove();
      d3.selectAll('#linegraph svg').remove();
      d3.selectAll('.map_tooltip').remove();
      d3.selectAll('.tooltip').remove();
      $(".minutes-of-usage").hide();
      generateStateWiseTopoGraph(stateObj[0], callType);
      if (callType === 'usage' || type == 'usage') {
        generateStateWiseTrendLine(stateObj[0]);
      }
      if (use == 'usage' || use == 'course') {
        $(".state-ut-text").hide();
      }
      if (type == 'map' || type == 'load') {
        window.logInteractEvent('home', 'select-state', 'map', 'public-dashboard', 'public-dashboard', 'DeviceType', window.getDeviceTypeValue(), 'State', stateObj[0].st_nm, '', '', '', '');
      } else if (type == 'dropdown') {
        window.logInteractEvent('home', 'select-state', 'category', 'public-dashboard', 'public-dashboard', 'DeviceType', window.getDeviceTypeValue(), 'State', stateObj[0].st_nm, '', '', '', '');
      }
    } else {
      $(".top-states-table").show();
      $(".dashboard-states").val("India").attr("selected", "selected");
      d3.selectAll('.svg-container svg').remove();
      d3.selectAll('#linegraph svg').remove();
      d3.selectAll('.map_tooltip').remove();
      d3.selectAll('.tooltip').remove();
      $(".minutes-of-usage").show();
      switch (callType || type) {
        case 'usage': generateTopoGraphMap(use); $(".state-wise-value").hide(); $(".state-ut-text").show(); break;
        case 'course': $(".state-courses").show(); generateTopoGraphMap(use); $(".state-ut-text").show(); $('.top-states-table').hide(); getTotalEnrollments(); break;
        case 'default': generateTopoGraphMap(use); break;
      }
      if (use == 'usage' || use == 'course') {
        $(".state-ut-text").show();
      }

      window.logInteractEvent('home', 'select-india', '', 'public-dashboard', 'public-dashboard', 'DeviceType', window.getDeviceTypeValue(), '', '', '', '', '', '');
    }
  }

  function getTotalEnrollments() {
    $.ajax({
      type: 'GET',
      url: totalEnrollments,
      success: function (data, textStatus, request) {
        data = typeof data == "string" ? JSON.parse(data) : data;
        $("#totalEnrolments").text(parseInt(data.data[0]['Total Enrolments']).toLocaleString("en-IN"));
      },
      error: function (request, textStatus, errorThrown) {
        console.log(errorThrown);
      }
    });
  }

  function generateTopoGraphMap(use) {
    if (use == 'creation') {
      $(".state-ut-text").hide();
    }
    let slugs = ['CH', 'D & NH & DD', 'LD']
    let colorScale;
    if (use == 'creation') {
      colorScale = d3.scaleThreshold()
    .domain([500000, 1000000, 2000000, 5000000, 10000000, 20000000, 50000000, 100000000, 200000000])
    .range(["#e3eef9", "#cfe1f2", "#b5d4e9", "#93c3df", "#6daed5", "#4b97c9", "#2f7ebc", "#1864aa", "#0a4a90", "#08306b"]);
    } else {
      colorScale = d3.scaleThreshold()
      .domain([500000, 1000000, 2000000, 5000000, 10000000, 20000000, 50000000, 100000000, 200000000])
      .range(["#e3eef9", "#cfe1f2", "#b5d4e9", "#93c3df", "#6daed5", "#4b97c9", "#2f7ebc", "#1864aa", "#0a4a90", "#08306b"]);
    }
    $.get(MapJSON.MAP_META.India.geoDataFile, function (topo) {
      const width = 425;
      const height = 450;

      this.svg = d3.select('.svg-container').append('svg')
        .attr('viewBox', '0 0 ' + width + ' ' + height)
        .attr('preserveAspectRatio', 'xMinYMin')
        .attr('role', 'link')
        .attr('aria-label', 'country')
        .attr('class', 'svg-wrapper');


      const mapTooltip = d3.select('.svg-container').append('div')
        .attr('class', 'map_tooltip')
        .style('opacity', 0);

      const topology = topojson.feature(topo, topo['objects'][
        'india'
      ]);

      const projection = d3.geoMercator()
        .translate([width / 2.5, height / 2]);

      const path = d3.geoPath()
        .projection(projection);

      const bounds = d3.geoBounds(topology),
        center = d3.geoCentroid(topology);

      const distance = d3.geoDistance(bounds[0], bounds[1]), // Compute the distance between bound corners
        scale = 750; //(height / distance / Math.sqrt(2)); // height, distance, scale, (height / distance / Math.sqrt(2))

      projection.scale(scale).center(center); // Update the projection scale and centroid

      this.svg.selectAll('path')
        .data(topojson.feature(topo, topo['objects']['india'])
          .features)
        .enter()
        .append('path')
        .attr('d', path)
        .attr('fill', function (d) {
          if (use == 'usage' || use == 'creation') {
            d.contentPlayTotal = contentPlayData.get(d.properties.st_nm) || 0;
            d.state_name = d.properties.st_nm;
            return colorScale(d.contentPlayTotal);
          } else if (use == 'course') {
            let dt = dataset.filter(function (elemn) {
              return elemn.name == d.properties.st_nm;
            });
           if(dt.length>=1){
            d.state_name = d.properties.st_nm;
            d.enrolments = dt[0].enrolments||0;
            d.completions = dt[0].completions||0;
            d.certificates = dt[0].certificates||0;
            return colorScale(d.enrolments);
           }
          }
        })
        .style('stroke', '#4292C6')
        .style('stroke-width', function (d) {
          if (slugs.includes(d.properties.slug)) {
            return '2';
          } else {
            return '0.5';
          }
        })
        .attr('class', function (d) {
          return 'Country';
        })
        .attr('role', 'link')
        .attr('aria-label', 'state')
        .attr('tabindex', '0')
        .style('opacity', 1)
        .on('mouseover', function (d) {
          d3.selectAll('.Country')
            .transition()
            .duration(0)
            .style('opacity', 1);
          d3.select(this)
            .transition()
            .duration(0)
            .style('opacity', 1)
            .style('stroke', '#4292C6')
            .style('stroke-width', function (d) {
              if (slugs.includes(d.properties.slug)) {
                return '2';
              } else {
                return '0.5';
              }
            })
            .style('cursor', 'pointer');
          if (use == 'usage') {
            mapTooltip.transition().duration(200).style('opacity', 1);
            mapTooltip.html(d.state_name + '</b><br /> Total Learning Sessions: <b>' + d.contentPlayTotal.toLocaleString('en-IN') + '</b>')
              .style('left', (d3.event.offsetX) + 'px')
              .style('top', (d3.event.offsetY) + 'px');
          } else if (use == 'course') {
            mapTooltip.transition().duration(200).style('opacity', 1);
            mapTooltip.html(d.state_name + '</b><br /> Total Enrollments: <b>' + d.enrolments.toLocaleString('en-IN') + '</b>' + '</b><br /> Total Course Completions: <b>' + d.completions.toLocaleString('en-IN') + '</b>' + '</b>')
              .style('left', (d3.event.offsetX) + 'px')
              .style('top', (d3.event.offsetY) + 'px');
          }
        })
        .on('mouseleave', function (d) {
          d3.selectAll('.Country')
            .transition()
            .duration(0)
            .style('opacity', 1);
          d3.select(this)
            .transition()
            .duration(0)
            .style('opacity', 1)
            .style('stroke', '#4292C6')
            .style('stroke-width', function (d) {
              if (slugs.includes(d.properties.slug)) {
                return '2';
              } else {
                return '0.5';
              }
            })
          mapTooltip.transition()
            .duration(500)
            .style('opacity', 0);
        })
        .on('click', pathClick);

      const legend = this.svg
        .append('g')
        .attr('class', 'legends-svg')
        .attr('transform', 'translate(' + (10) + ',' + (10) + ')')
        .selectAll('g')
        .data(colorsArr)
        .enter()
        .append('g')
        .attr('aria-label', 'legends information')
        .attr('tabindex', '0');

      legend.append('rect')
        .attr('fill', (d, i) => d['color'])     //   const color = d3.scaleOrdinal(d3.schemeCategory10);
        .attr('height', 10)
        .attr('width', 10);

      legend.append('text')
        .attr('x', 14)
        .attr('y', 6)
        .attr('dy', '.15em')
        .text((d, i) => d['range'])
        .style('text-anchor', 'start')
        .style('font-size', 8);

      // Now space the groups out after they have been appended:
      const padding = 11;
      legend.attr('transform', function (d, i) {
        return 'translate(350,' + i * padding + ')';
      });
    });
  }

  function generateStateWiseTopoGraph(state, callType) {
    if (callType == 'course') {
      $(".state-courses").hide();
      $.ajax({
        type: 'GET',
        url: stateWiseDataCount,
        success: function (e, t, n) {
          var modifiedDate = $.date(n.getResponseHeader('Last-Modified'));
          $(".updatedOn").text(modifiedDate);
          e = typeof e == "string" ? JSON.parse(e) : e;
          const arr = e['data'];
          const result = [...arr.reduce((r, o) => {
            const key = o.State;

            const item = r.get(key) || Object.assign({}, o, {
              'Total Enrolments': 0
            });

            item['Total Enrolments'] += (parseInt(o[
              'Total Enrolments'],
              10));

            return r.set(key, item);
          }, new Map).values()];
          result.forEach(element => {
            if (element.State === 'Puducherry' && state.st_nm == 'Pondicherry') {
              var valInt = parseInt(element['Total Enrolments']).toLocaleString("en-IN");
              $(".total-enrolments").text(valInt);
              var valInt1 = parseInt(element['Total Completions']).toLocaleString("en-IN");
              $(".total-completions").text(valInt1);
            } else {
              if (element.State == state.st_nm) {
                var valInt = parseInt(element['Total Enrolments']).toLocaleString("en-IN");
                $(".total-enrolments").text(valInt);
                var valInt1 = parseInt(element['Total Completions']).toLocaleString("en-IN");
                $(".total-completions").text(valInt1);
              }
            }
          });
        },
        error: function (request, textStatus, errorThrown) {
          console.log(errorThrown);
        }
      });
    }
    $(".state-wise-value").show();
    const colorScale = d3.scaleThreshold()
    .domain([500000, 1000000, 2000000, 5000000, 10000000, 20000000, 50000000, 100000000, 200000000])
    .range(["#e3eef9", "#cfe1f2", "#b5d4e9", "#93c3df", "#6daed5", "#4b97c9", "#2f7ebc", "#1864aa", "#0a4a90", "#08306b"]);
        $.get(MapJSON.MAP_META[state.st_nm].geoDataFile, function (topo) {
          const width = 200;
          const height = 200;
    
          this.svg = d3.select('.svg-container').append('svg')
            .attr('viewBox', '0 0 ' + width + ' ' + height)
            .attr('preserveAspectRatio', 'xMinYMin')
            .attr('role', 'link')
            .attr('aria-label', 'state map in india')
            .attr('tabindex', '0')
            .attr('class', 'svg-wrapper');
    
          const mapTooltip = d3.select('.svg-container').append('div')
            .attr('class', 'map_tooltip')
            .style('opacity', 0);
          const topology = topojson.feature(topo, topo['objects'][state.stateJSON]);
    
          const projection = d3.geoMercator()
            .translate([width / 2, height / 2]);
    
          const path = d3.geoPath()
            .projection(projection);
    
          const bounds = d3.geoBounds(topology),
            center = d3.geoCentroid(topology);
    
          // Compute the angular distance between bound corners
          const distance = d3.geoDistance(bounds[0], bounds[1]),
            scale = state.scale || 1000; // height, distance, scale, (height / distance / Math.sqrt(2))
          // Update the projection scale and centroid
          projection.scale(scale).center(center);
    
          this.svg.selectAll('path')
            .data(topojson.feature(topo, topo['objects'][state.stateJSON]).features)
            .enter()
            .append('path')
            .attr('d', path)
            .attr('fill', function (d) {
              d.contentPlayTotal = contentPlayData.get(d.properties.st_nm) || 0;
              d.state_name = d.properties.st_nm;
              return colorScale(d.contentPlayTotal);
            })
            .style('stroke', '#023858')
            .style('stroke-width', 0.5)
            .attr('class', function (d) {
              return 'State';
            })
            .style('opacity', 1);
          const legend = this.svg
            .append('g')
            .attr('transform', 'translate(' + (-190) + ',' + (3) + ')')
            .selectAll('g')
            .data(colorsArr)
            .enter()
            .append('g')
            .attr('aria-label', 'state legends information')
            .attr('tabindex', '0');
    
          legend.append('rect')
            .attr('fill', (d, i) => d['color'])     //   const color = d3.scaleOrdinal(d3.schemeCategory10);
            .attr('height', 4)
            .attr('width', 4);
    
          legend.append('text')
            .attr('x', 6)
            .attr('y', 2.5)
            .attr('dy', '.15em')
            .text((d, i) => d['range'])
            .style('text-anchor', 'start')
            .style('font-size', 4);
    
          // Now space the groups out after they have been appended:
          const padding = 5;
          legend.attr('transform', function (d, i) {
            return 'translate(360,' + i * padding + ')';
          });
        });
     
     
  }

  let stateRes = [];
  function generateStateWiseTrendLine(slug) {
    if (category == 'usage') {
        $.get(`https://diksha.gov.in/data/reports/weekly_plays_by_state.json`, function (data) {
        const data_temp = [];
        let plays = 0;
        const temp = typeof data == "string" ? JSON.parse(data) : data;
        let d3data = d3.map(), as = [];
        d3data.clear();
        temp.data.forEach(element => {
          if (element.state == 'Puducherry' && slug.st_nm == 'Pondicherry') {
            data_temp.push({
              state: element.state,
              date: element.Date,
              plays: Number(element['learning sessions'])
            });
            plays += Number(element['learning sessions']);
          } else {
            if (element.state == slug.st_nm) {
              data_temp.push({
                state: element.state,
                date: element.Date,
                plays: Number(element['learning sessions'])
              });
              plays += Number(element['learning sessions']);
              d3data.set(element.Date, +Number(element['learning sessions']));
              as.push(Number(element['learning sessions']));
            }
          }
        });

        data_temp.sort((a, b) => a.dates - b.dates);
        stateRes = data_temp;
        this.stateLevelData = data_temp;
        var margin = { top: 10, right: 30, bottom: 90, left: 40 },
          width = 460 - margin.left - margin.right,
          height = 450 - margin.top - margin.bottom;

        // append the svg object to the body of the page
        var svg = d3.select("#linegraph")
          .append("svg")
          .attr("viewBox", "0 0 500 500")
          .attr("preserveAspectRatio", "xMidYMid meet")
          .append("g")
          .attr("transform",
            "translate(" + (margin.left + 60) + "," + (margin.top) + ") scale(1)")
          .attr('tabindex', '0')
          .attr("title", "Last 7 weeks data for Total learning sessions graph")
          .attr('aria-label', 'statistics of state');

        var tooltip = d3.select("#linegraph").append("div").attr("class", "toolTip");


        // X axis
        var x = d3.scaleBand()
          .range([0, width])
          .domain(data_temp.map(function (d) { return d.date; }))
          .padding(0.2);
        svg.append("g")
          .attr("transform", "translate(0," + (height) + ")")
          .call(d3.axisBottom(x))
          .selectAll("text")
          .attr("transform", "translate(-10,0)rotate(-45)")
          .attr("font-size", "18px")
          .style("text-anchor", "end");

        // Add Y axis
        var y = d3.scaleLinear()
          .domain([0, d3.max(as)])
          .range([height, 0]);
        svg.append("g")
          .call(d3.axisLeft(y))
          .selectAll("text")
          .attr("font-size", "18px");

        // Bars
        svg.selectAll(".mybar")
          .data(data_temp)
          .enter()
          .append("rect")
          .attr('class', 'rects')
          .attr("x", function (d) { return x(d.date); })
          .attr("width", x.bandwidth())
          .attr("fill", "#4292c6")
          .attr("height", function (d) { return height - y(0); }) // always equal to 0
          .attr("y", function (d) { return y(d.plays); })
          .on("mouseover", function (d) { tooltip.style("left", d3.event.offsetX - 50 + "px").style("top", d3.event.offsetY - 70 + "px").html("<span>" + (d.date) + " </span>" + ": <span><b>" + (d.plays) + "</b></span>"); return tooltip.style("visibility", "visible").style("display", "inline-block"); })
          .on("mousemove", function () { return tooltip.style("left", d3.event.offsetX - 50 + "px").style("top", d3.event.offsetY - 70 + "px").style("visibility", "visible").style("display", "inline-block"); })
          .on("mouseout", function () { return tooltip.style("visibility", "hidden").style("display", "none"); });
        // Animation
        svg.selectAll("rect")
          .transition()
          .duration(800)
          .attr("y", function (d) { return y(d.plays); })
          .attr("height", function (d) { return height - y(d.plays); })
          .delay(function (d, i) { return (i * 100) })
      });

    }
  }

  $(".datasets-navigation").on("click", function () {
    window.location.href = '/data/datasets/';
  });
  // $(".datasets-navigation-updated").on("click", function () {
  //   window.location.href = '/data/datasets-update/';
  // });
});

function convertToCSV(objArray) {
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

function exportCSVFile(headers, items, fileTitle) {
  if (headers) {
    items.unshift(headers);
  }

  // Convert Object to JSON
  var jsonObject = JSON.stringify(items);

  var csv = convertToCSV(jsonObject);

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

function download(arr, state) {
  var headers = {
  };

  var itemsNotFormatted = arr;

  var itemsFormatted = [];

  if (state == 'India') {
    headers = {
      'name': 'State',
      'learning_sessions': 'Learning Sessions'
    }
    itemsNotFormatted.forEach((item) => {
      itemsFormatted.push({
        state: item.name, // remove commas to avoid errors,
        learning_sessions: item.count
      });
    });

  } else {
    headers = {
      'name': 'State',
      'date': 'Date',
      'learning_sessions': 'Learning Sessions'
    }
    itemsNotFormatted.forEach((item) => {
      itemsFormatted.push({
        state: item.state, // remove commas to avoid errors,
        date: item.date,
        learning_sessions: item.plays
      });
    });
  }
  // format the data


  var fileTitle = state; // or 'my-unique-title'

  exportCSVFile(headers, itemsFormatted, fileTitle); // call the exportCSVFile() function to process the JSON and trigger the download
}

function fnum(x) {

  if (isNaN(x)) {
    return x;
  } else if (x >= 10000000){
    return Math.round((x / 10000000)) + ' Crores';
  } else if (x >=100000) {
    return Math.round(x / 100000) + ' Lakhs';
  } else {
    return x.toLocaleString('en-IN');
  } 

  if (x < 1000000) {
    return Math.round(x / 100000) + ' Lakhs';
  }

  //if (x > 1000001 || x < 10000000) {
  //  return (x / 1000000).toFixed(2) + ' Lakhs';
  //}

  // Check if the number is in the millions range
  if (x >= 1000000 && x < 1000000000) {
    return Math.round(x / 100000) + ' Lakhs';
  }

  if (x < 1000000000) {
    return Math.round((x / 1000000)) + ' Million';
  }

  if (x < 1000000000000) {
    return Math.round((x / 1000000000)) + ' Billion';
  }

  return ' 1Trillion+';
}
