$(document).ready(function () {
  let origin = "";
  window.origin == "https://diksha.gov.in" ||
  window.origin == "https://staging.ntp.net.in"
    ? (origin = window.origin)
    : (origin = "https://preprod.ntp.net.in");

  let weeklyPlaysByState = `https://diksha.gov.in/data/reports/weekly_plays_by_state.json`,
    stateWiseDataCount = `https://diksha.gov.in/data/reports/state_wise_course_data_public.json`, //`https://ntpproductionall.blob.core.windows.net/reports/hawk-eye/state_wise_course_data_public.json`,
    // let weeklyPlaysByState = `https://obj.diksha.gov.in/odev-dev-diksha-publicreports/public/weekly_plays_by_state.json`,
    //     stateWiseDataCount = `https://obj.diksha.gov.in/odev-dev-diksha-publicreports/public/state_wise_course_data_public.json`,//`https://ntpproductionall.blob.core.windows.net/reports/hawk-eye/state_wise_course_data_public.json`,
    mapsJson = `/assets/json/maps.json`,
    contentPlayData = d3.map(),
    tenantSlugs = [],
    dataset = [],
    doubleCheck = [
      "Andaman & Nicobar Islands",
      "Andaman and Nicobar",
      "Uttar Pradesh",
      "Uttar pradesh",
      "Delhi",
      "National Capital Territory of Delhi",
      "Union Territory of Puducherry",
      "Puducherry",
      "unknown",
      "Jammu and Kashmir",
      "Jammu And Kashmir",
    ],
    category = "",
    MapJSON,
    pathname = window.location.pathname,
    queryString = window.location.search;
  let a = new URLSearchParams(queryString);
  let slugname = a.get("id");
  let clickType = a.get("type");
  let d_id = a.get("datasetId");
  const colorsArr = [
    { range: "100000000+", color: "#08306b" },
    { range: "50000000+", color: "#0a4a90" },
    { range: "20000000+", color: "#1864aa" },
    { range: "10000000+", color: "#2f7ebc" },
    { range: "5000000+", color: "#4b97c9" },
    { range: "2000000+", color: "#6daed5" },
    { range: "1000000+", color: "#93c3df" },
    { range: "500000+", color: "#b5d4e9" },
    { range: "200000+", color: "#cfe1f2" },
    { range: "<200000", color: "#e3eef9" },
  ];

  $('[data-toggle="tooltip"]').tooltip();

  $.getJSON(mapsJson, function (data) {
    MapJSON = data;
  });

  clickType ? radioTabsClickType(clickType) : radioTabsClickType("usage");
  $("input:radio[name=switch-two]").change(function () {
    radioTabsClickType($("input[name='switch-two']:checked").val());
  });

  $.date = function (orginaldate) {
    var monthArr = [
      "Jan",
      "Feb",
      "March",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
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

  function radioTabsClickType(clickType) {
    switch (clickType) {
      case "usage":
      case "usageMetrics":
        category = "usage";
        getUsageMetrics();
        break;
      case "creation":
      case "creationMetrics":
        category = "creation";
        getCreationMetrics();
        break;
      case "course":
      case "courseMetrics":
        category = "course";
        getCoursesMetrics();
        break;
    }
  }

  function getUsageMetrics() {
    d3.selectAll(".svg-container svg").remove();
    d3.selectAll("#linegraph svg").remove();
    d3.selectAll(".map_tooltip").remove();
    d3.selectAll(".tooltip").remove();
    contentPlayData.clear();
    setTimeout(() => {
      $.ajax({
        type: "GET",
        url: weeklyPlaysByState,
        success: function (e, t, n) {
          $.get(MapJSON.MAP_META.India.geoDataFile, function (topo) {
            tenantSlugs = [];
            tenantSlugs.push({
              dik_name: "India",
              st_nm: "India",
              slug: "IN",
              stateJSON: "India",
            });
            topo["objects"]["india"].geometries.forEach((element) => {
              tenantSlugs.push({
                dik_name: element.properties.dik_name,
                st_nm: element.properties.st_nm,
                slug: element.properties.slug,
                stateJSON: element.properties.stateJSON,
                scale: element.properties.scale,
              });
            });
            e = typeof e == "string" ? JSON.parse(e) : e;
            const arr = e["data"],
              result = [
                ...arr
                  .reduce((r, o) => {
                    const key = o.state;

                    const item =
                      r.get(key) ||
                      Object.assign({}, o, {
                        "learning sessions": 0,
                      });

                    item["learning sessions"] += parseInt(
                      o["learning sessions"],
                      0
                    );

                    return r.set(key, item);
                  }, new Map())
                  .values(),
              ];

            let andaman = 0,
              puducherry = 0,
              delhi = 0,
              up = 0,
              jk = 0,
              dnhdd = 0;
            dataset = [];
            result.forEach((element) => {
              if (
                element.state === "Andaman & Nicobar Islands" ||
                element.state === "Andaman and Nicobar"
              )
                andaman += Number(element["learning sessions"]);
              if (
                element.state === "Uttar Pradesh" ||
                element.state === "Uttar pradesh"
              )
                up += Number(element["learning sessions"]);
              if (
                element.state === "Delhi" ||
                element.state === "National Capital Territory of Delhi"
              )
                delhi += Number(element["learning sessions"]);
              if (
                element.state === "Union Territory of Puducherry" ||
                element.state === "Puducherry"
              )
                puducherry += Number(element["learning sessions"]);
              if (
                element.state === "Jammu and Kashmir" ||
                element.state === "Jammu And Kashmir"
              )
                jk += Number(element["learning sessions"]);
              if (element.state === "Dadra and Nagar Haveli and Daman and Diu")
                dnhdd += Number(element["learning sessions"]);
              if (!doubleCheck.includes(element.state)) {
                tenantSlugs.forEach((elem) => {
                  if (elem.st_nm === element.state) {
                    dataset.push({
                      name: element.state,
                      count: Number(element["learning sessions"]),
                      slug: elem.slug,
                      value: fnum(Number(element["learning sessions"])),
                    });
                  }
                });
              }
            });

            dataset.push(
              {
                name: "Andaman & Nicobar Islands",
                count: Number(andaman),
                slug: "AN",
                value: fnum(Number(andaman)),
              },
              {
                name: "Uttar Pradesh",
                count: Number(up),
                slug: "UP",
                value: fnum(Number(up)),
              },
              {
                name: "Delhi",
                count: Number(delhi),
                slug: "DL",
                value: fnum(Number(delhi)),
              },
              {
                name: "Pondicherry",
                count: Number(puducherry),
                slug: "PN",
                value: fnum(Number(puducherry)),
              },
              {
                name: "Jammu And Kashmir",
                count: Number(jk),
                slug: "JK",
                value: fnum(Number(jk)),
              },
              {
                name: "Dadra and Nagar Haveli and Daman and Diu",
                count: Number(dnhdd),
                slug: "D & NH & DD",
                value: fnum(Number(dnhdd)),
              }
            );
            dataset.splice(
              dataset.findIndex((item) => item.name === "Daman & Diu"),
              1
            ); //remove daman and diu from dropdown
            dataset.sort((a, b) => a.slug.localeCompare(b.slug));
            $(".dashboard-states").empty();
            console.log("call home js");
            $(".dashboard-states").append(
              '<option value="India" selected>India</option>'
            );
            dataset.forEach((element) => {
              contentPlayData.set(element.name, +element.count);
              $(".dashboard-states").append(
                '<option value="' +
                  element.name +
                  '">' +
                  element.name +
                  "</option>"
              );
            });
            changeLayouts("India", "load", "usage", "usage");
          });
        },
        error: function (e, t, n) {
          console.log(n);
        },
        complete: function (resp) {},
      });
    }, 10);
  }

  function getCreationMetrics() {
    d3.selectAll(".svg-container svg").remove();
    d3.selectAll("#linegraph svg").remove();
    d3.selectAll(".map_tooltip").remove();
    d3.selectAll(".tooltip").remove();
    contentPlayData.clear();
  }

  function getCoursesMetrics() {
    d3.selectAll(".svg-container svg").remove();
    d3.selectAll("#linegraph svg").remove();
    d3.selectAll(".map_tooltip").remove();
    d3.selectAll(".tooltip").remove();
    contentPlayData.clear();

    $.ajax({
      type: "GET",
      url: stateWiseDataCount,
      success: function (e, t, n) {
        var modifiedDate = $.date(n.getResponseHeader("Last-Modified"));
        $(".updatedOn").text(modifiedDate);
        $.get(MapJSON.MAP_META.India.geoDataFile, function (topo) {
          tenantSlugs = [];
          tenantSlugs.push({
            dik_name: "India",
            st_nm: "India",
            slug: "IN",
            stateJSON: "India",
          });
          topo["objects"]["india"].geometries.forEach((element) => {
            tenantSlugs.push({
              dik_name: element.properties.dik_name,
              st_nm: element.properties.st_nm,
              slug: element.properties.slug,
              stateJSON: element.properties.stateJSON,
              scale: element.properties.scale,
            });
          });

          e = typeof e == "string" ? JSON.parse(e) : e;
          const arr = e["data"];
          const result = [
            ...arr
              .reduce((r, o) => {
                const key = o.State;

                const item =
                  r.get(key) ||
                  Object.assign({}, o, {
                    "Total Enrolments": 0,
                  });

                item["Total Enrolments"] += parseInt(o["Total Enrolments"], 10);

                return r.set(key, item);
              }, new Map())
              .values(),
          ];
          dataset = [];

          result.forEach((element) => {
            if (element.State === "Puducherry") {
              dataset.push({
                name: "Pondicherry",
                enrolments: Number(element["Total Enrolments"]),
                enrolmentsValue: fnum(Number(element["Total Enrolments"])),
                completions: Number(element["Total Completions"]),
                completionsValue: fnum(Number(element["Total Completions"])),
                certificates: Number(element["Total Certificates Issued"]),
                certificatesValue: fnum(
                  Number(element["Total Certificates Issued"])
                ),
                slug: "PN",
              });
            }
            // else if (element.State === 'Dadra and Nagar Haveli and Daman and Diu') {
            //     dataset.push({
            //         name: "Dadra and Nagar Haveli and Daman and Diu",
            //         enrolments: Number(element['Total Enrolments']),
            //         enrolmentsValue: fnum(Number(element['Total Enrolments'])),
            //         completions: Number(element['Total Completions']),
            //         completionsValue: fnum(Number(element['Total Completions'])),
            //         certificates: Number(element['Total Certificates Issued']),
            //         certificatesValue: fnum(Number(element['Total Certificates Issued'])),
            //         slug: "D & NH & DD"
            //     })
            // }
            tenantSlugs.forEach((elem) => {
              if (elem.st_nm === element.State) {
                dataset.push({
                  name: element.State,
                  enrolments: Number(element["Total Enrolments"]),
                  enrolmentsValue: fnum(Number(element["Total Enrolments"])),
                  completions: Number(element["Total Completions"]),
                  completionsValue: fnum(Number(element["Total Completions"])),
                  certificates: Number(element["Total Certificates Issued"]),
                  certificatesValue: fnum(
                    Number(element["Total Certificates Issued"])
                  ),
                  slug: elem.slug,
                });
              }
            });
          });

          dataset.sort((a, b) => a.slug.localeCompare(b.slug));
          $(".dashboard-states").empty();

          $(".dashboard-states").append(
            '<option value="India" selected>India</option>'
          );
          dataset.forEach((element) => {
            contentPlayData.set(element.name, +element.enrolments);
            $(".dashboard-states").append(
              '<option value="' +
                element.name +
                '">' +
                element.name +
                "</option>"
            );
          });
          if (
            slugname != null &&
            slugname != "" &&
            typeof slugname !== "undefined"
          ) {
            let stateObj = tenantSlugs.filter((item) => item.slug === slugname);
            changeLayouts(stateObj[0].st_nm, "load", "course", "course");
          } else {
            changeLayouts("India", "load", "course", "course");
          }
        });
      },
      error: function (request, textStatus, errorThrown) {
        console.log(errorThrown);
      },
    });
  }

  function changeLayouts(name, type, use, callType) {
    $(".dashboard-states").val("India").attr("selected", "selected");
    d3.selectAll(".svg-container svg").remove();
    d3.selectAll("#linegraph svg").remove();
    d3.selectAll(".map_tooltip").remove();
    d3.selectAll(".tooltip").remove();
    $(".minutes-of-usage").show();
    switch (callType || type) {
      case "usage":
        generateTopoGraphMap(use);
        generateTrendlineChart();
        $(".state-wise-value").hide();
        $(".state-ut-text").show();
        break;
      case "course":
        $(".state-courses").show();
        generateTopoGraphMap(use);
        $(".state-ut-text").show();
        break;
      case "default":
        generateTopoGraphMap(use);
        break;
    }
    if (use == "usage" || use == "course") {
      $(".state-ut-text").show();
    }

    // window.logInteractEvent('home', 'select-india', '', 'public-dashboard', 'public-dashboard', 'DeviceType', window.getDeviceTypeValue(), '', '', '', '', '', '');
  }

  function generateTopoGraphMap(use) {
    if (use == "creation") {
      $(".state-ut-text").hide();
    }
    let slugs = ["CH", "D & NH & DD", "LD"];
    let colorScale;
    if (use == "creation") {
      colorScale = d3
        .scaleThreshold()
        .domain([
          200000, 200001, 500001, 1000001, 2000001, 5000001, 10000001, 20000001,
          50000001, 100000001,
        ])
        .range([
          "#e3eef9",
          "#cfe1f2",
          "#b5d4e9",
          "#93c3df",
          "#6daed5",
          "#4b97c9",
          "#2f7ebc",
          "#1864aa",
          "#0a4a90",
          "#08306b",
        ]);
    } else {
      colorScale = d3
        .scaleThreshold()
        .domain([
          200000, 200001, 500001, 1000001, 2000001, 5000001, 10000001, 20000001,
          50000001, 100000001,
        ])
        .range([
          "#e3eef9",
          "#cfe1f2",
          "#b5d4e9",
          "#93c3df",
          "#6daed5",
          "#4b97c9",
          "#2f7ebc",
          "#1864aa",
          "#0a4a90",
          "#08306b",
        ]);
    }

    var colors = d3
      .scaleThreshold()
      .domain([
        "100000000+",
        "50000000+",
        "20000000+",
        "10000000+",
        "5000000+",
        "2000000+",
        "1000000+",
        "500000+",
        "200000+",
        "<200000",
      ])
      .range([
        "#08306b",
        "#0a4a90",
        "#1864aa",
        "#2f7ebc",
        "#4b97c9",
        "#6daed5",
        "#93c3df",
        "#b5d4e9",
        "#cfe1f2",
        "#e3eef9",
      ]);
    const keys = [
      "100000000+",
      "50000000+",
      "20000000+",
      "10000000+",
      "5000000+",
      "2000000+",
      "1000000+",
      "500000+",
      "200000+",
      "<200000",
    ];
    const colrs = {
      "100000000+": "#08306b",
      "50000000+": "#0a4a90",
      "20000000+": "#1864aa",
      "10000000+": "#2f7ebc",
      "5000000+": "#4b97c9",
      "2000000+": "#6daed5",
      "1000000+": "#93c3df",
      "500000+": "#b5d4e9",
      "200000+": "#cfe1f2",
      "<200000": "#e3eef9",
    };

    $.get(MapJSON.MAP_META.India.geoDataFile, function (topo) {
      const width = 425;
      const height = 450;

      this.svg = d3
        .select(".svg-container")
        .append("svg")
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("preserveAspectRatio", "xMinYMin")
        .attr("role", "link")
        .attr("aria-label", "Map of India")
        .attr("class", "svg-wrapper")
        .attr("tabindex", "0");

      const mapTooltip = d3
        .select(".svg-container")
        .append("div")
        .attr("class", "map_tooltip")
        .attr("id", (d, i) => `tooltip-${i}`)
        .style("opacity", 0);

      const topology = topojson.feature(topo, topo["objects"]["india"]);

      const projection = d3.geoMercator().translate([width / 2.5, height / 2]);

      const path = d3.geoPath().projection(projection);

      const bounds = d3.geoBounds(topology),
        center = d3.geoCentroid(topology);

      const distance = d3.geoDistance(bounds[0], bounds[1]), // Compute the distance between bound corners
        scale = 750; //(height / distance / Math.sqrt(2)); // height, distance, scale, (height / distance / Math.sqrt(2))

      projection.scale(scale).center(center); // Update the projection scale and centroid

      this.svg
        .selectAll("path")
        .data(topojson.feature(topo, topo["objects"]["india"]).features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("fill", function (d) {
          if (use == "usage" || use == "creation") {
            d.contentPlayTotal = contentPlayData.get(d.properties.st_nm) || 0;
            d.state_name = d.properties.st_nm;
            return colorScale(d.contentPlayTotal);
          } else if (use == "course") {
            let dt = dataset.filter(function (elemn) {
              return elemn.name == d.properties.st_nm;
            });
            if (dt.length >= 1) {
              d.state_name = d.properties.st_nm;
              d.enrolments = dt[0].enrolments || 0;
              d.completions = dt[0].completions || 0;
              d.certificates = dt[0].certificates || 0;
              return colorScale(d.enrolments);
            }
          }
        })
        .style("stroke", "#4292C6")
        .style("stroke-width", function (d) {
          if (slugs.includes(d.properties.slug)) {
            return "2";
          } else {
            return "0.5";
          }
        })
        .attr("class", function (d) {
          return "Country";
        })
        .attr("role", "link")
        .attr("tabindex", "0")
        .attr("aria-live", "polite")
        .attr("aria-describedby", (d, i) => `tooltip-${i}`)
        .style("opacity", 1)
        .on("mouseover", function (d, i) {
          d3.select(`#tooltip-${i}`);
          d3.selectAll(".Country").transition().duration(0).style("opacity", 1);
          d3.select(this)
            .transition()
            .duration(0)
            .style("opacity", 1)
            .style("stroke", "#4292C6")
            .style("stroke-width", function (d) {
              if (slugs.includes(d.properties.slug)) {
                return "2";
              } else {
                return "0.5";
              }
            })
            .style("cursor", "pointer");
          if (use == "usage") {
            mapTooltip.transition().duration(200).style("opacity", 1);
            mapTooltip
              .html(
                d.state_name +
                  "</b><br /> Total Learning Sessions: <b>" +
                  d.contentPlayTotal.toLocaleString("en-IN") +
                  "</b>"
              )
              .style("left", d3.event.offsetX + "px")
              .style("top", d3.event.offsetY + "px");
          } else if (use == "course") {
            mapTooltip.transition().duration(200).style("opacity", 1);
            mapTooltip
              .html(
                d.state_name +
                  "</b><br /> Total Enrollments: <b>" +
                  d.enrolments.toLocaleString("en-IN") +
                  "</b>" +
                  "</b><br /> Total Course Completions: <b>" +
                  d.completions.toLocaleString("en-IN") +
                  "</b>" +
                  "</b>"
              )
              .style("left", d3.event.offsetX + "px")
              .style("top", d3.event.offsetY + "px");
          }
        })
        .on("mouseleave", function (d, i) {
          d3.selectAll(".Country").transition().duration(0).style("opacity", 1);
          d3.select(this)
            .transition()
            .duration(0)
            .style("opacity", 1)
            .style("stroke", "#4292C6")
            .style("stroke-width", function (d) {
              if (slugs.includes(d.properties.slug)) {
                return "2";
              } else {
                return "0.5";
              }
            });
          mapTooltip.transition().duration(500).style("opacity", 0);
          d3.select(`#tooltip-${i} text`).remove();
        })
        .on("blur", function (d, i) {
          d3.select(this).attr("stroke", null);
          d3.select(`#tooltip-${i} text`).remove();
        })

        .on("focus", function (d, i) {
          d3.selectAll(".Country").transition().duration(0).style("opacity", 1);
          d3.select(this)
            .transition()
            .duration(0)
            .style("opacity", 1)
            .style("stroke", "#4292C6")
            .style("stroke-width", function (d) {
              if (slugs.includes(d.properties.slug)) {
                return "2";
              } else {
                return "0.5";
              }
            });
          mapTooltip.transition().duration(200).style("opacity", 1);
          mapTooltip
            .html(
              d.state_name +
                "</b><br /> Total Learning Sessions: <b>" +
                d.contentPlayTotal.toLocaleString("en-IN") +
                "</b>"
            )
            .style("left", d3.event.offsetX + "px")
            .style("top", d3.event.offsetY + "px");
        })
        .on("click", pathClick);

      const legend = this.svg
        .append("g")
        .attr("class", "legends-svg")
        .attr("transform", "translate(" + 10 + "," + 10 + ")")
        .selectAll("g")
        .data(colorsArr)
        .enter()
        .append("g")
        .attr("aria-label", "legends information")
        .attr("tabindex", "0");

      legend
        .append("rect")
        .attr("fill", (d, i) => d["color"]) //   const color = d3.scaleOrdinal(d3.schemeCategory10);
        .attr("height", 10)
        .attr("width", 10);

      legend
        .append("text")
        .attr("x", 14)
        .attr("y", 6)
        .attr("dy", ".15em")
        .text((d, i) => d["range"])
        .style("text-anchor", "start")
        .style("font-size", 8);

      // Now space the groups out after they have been appended:
      const padding = 11;
      legend.attr("transform", function (d, i) {
        return "translate(350," + i * padding + ")";
      });
    });

    let a = ``;
    for (const item in colrs) {
      console.log(item, colrs[item]);
      a += `<div class="legend-flex"><span class="legend-box" style="background-color:${colrs[item]};"></span><span class="legend_text">${item}</span></div>`;
    }
    $(".map_legends").html(a);
  }

  function generateTrendlineChart() {
    const margin = {
        top: 20,
        right: 20,
        bottom: 30,
        left: 40,
      },
      width = 560 - margin.left - margin.right,
      height = 430 - margin.top - margin.bottom;

    const svg = d3
      .select("#linegraph")
      .append("svg")
      .attr("viewBox", "0 0 600 385");

    const g = svg
      .append("g")
      .attr(
        "transform",
        "translate(" + (margin.left + 20) + "," + margin.top + ")"
      );
    const scale = d3
      .scaleLinear()
      .domain([d3.min(dataset), d3.max(dataset)])
      .range([height / 2, 0]);
    // tslint:disable-next-line: one-variable-per-declaration
    const x = d3
        .scaleBand()
        .domain([d3.min(dataset), d3.max(dataset)])
        .range([0, width]),
      y = d3
        .scaleLinear()
        .domain([d3.min(dataset), d3.max(dataset)])
        .range([height / 1.25, 0]);

    const line = d3
      .line()
      .x(function (d) {
        return x(d["slug"]);
      })
      .y(function (d) {
        return y(d["count"]);
      });

    // tslint:disable-next-line: only-arrow-functions
    x.domain(
      dataset.map(function (d) {
        return d.slug;
      })
    );
    y.domain([
      0,
      d3.max(dataset, function (d) {
        return d.count;
      }),
    ]);

    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y);

    const div = d3
      .select("#linegraph")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

    g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + (Number(height) - 70) + ")")
      .call(xAxis)
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "0.15em")
      .attr("font-size", "12px")
      .attr("transform", "rotate(-90)")
      .attr("y", 2);

    g.append("g")
      .attr("class", "axis axis--y")
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 10)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Range");

    g.append("path").datum(dataset).attr("class", "line").attr("d", line);

    g.selectAll("circle")
      .data(dataset)
      .enter()
      .append("circle")
      .attr("class", "circle")
      .attr("cursor", "pointer")
      .attr("cx", function (d) {
        return x(d.slug);
      })
      .attr("cy", function (d) {
        return y(d.count);
      })
      .attr("r", 4)
      .on("mouseover", function (d) {
        div.transition().duration(200).style("opacity", 0.9);
        // tslint:disable-next-line: max-line-length
        div
          .html(
            d.name +
              "<br/> Learning Sessions: " +
              d.value +
              "<br/> Accurate value: " +
              d.count.toLocaleString("en-IN")
          )
          .style("left", d3.event.offsetX - 50 + "px")
          .style("top", d3.event.offsetY + 111 + "px");
      })
      .on("mouseout", function (d) {
        div.transition().duration(500).style("opacity", 0);
      });

    $(".download-overall").show();
    $(".download-statewise").hide();
  }

  function pathClick(d, type) {
    if (d.enrolments && category == "course") {
      if (pathname == "/") {
        window.location.href =
          "/data/?id=" + d.properties.slug + "&type=course";
      } else {
        changeLayouts(d.properties.st_nm, "map", "course", "course");
      }
    } else {
      if (d.contentPlayTotal && category == "usage") {
        if (pathname == "/") {
          window.location.href =
            "/data/?id=" + d.properties.slug + "&type=usage";
        } else {
          changeLayouts(d.properties.st_nm, "map", "usage", "usage");
        }
      }
    }
  }

  function fnum(x) {
    if (isNaN(x)) {
      return x;
    }

    if (x < 99999) {
      return x.toLocaleString("en-IN");
    }

    if (x < 1000000) {
      return Math.round(x / 100000) + " Lakhs";
    }

    if (x < 10000000) {
      return (x / 1000000).toFixed(2) + " Million";
    }

    if (x < 1000000000) {
      return Math.round(x / 1000000) + " Million";
    }

    if (x < 1000000000000) {
      return Math.round(x / 1000000000) + " Billion";
    }

    return " 1Trillion+";
  }

  function convertToCSV(objArray) {
    var array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
    var str = "";

    for (var i = 0; i < array.length; i++) {
      var line = "";
      for (var index in array[i]) {
        if (line != "") line += ",";

        line += array[i][index];
      }

      str += line + "\r\n";
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

    var exportedFilenmae = fileTitle + ".csv" || "export.csv";

    var blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    if (navigator.msSaveBlob) {
      // IE 10+
      navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
      var link = document.createElement("a");
      if (link.download !== undefined) {
        // feature detection
        // Browsers that support HTML5 download attribute
        var url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", exportedFilenmae);
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  }

  function download(arr, state) {
    var headers = {};

    var itemsNotFormatted = arr;

    var itemsFormatted = [];

    if (state == "India") {
      headers = {
        name: "State",
        learning_sessions: "Learning Sessions",
      };
      itemsNotFormatted.forEach((item) => {
        itemsFormatted.push({
          state: item.name, // remove commas to avoid errors,
          learning_sessions: item.count,
        });
      });
    } else {
      headers = {
        name: "State",
        date: "Date",
        learning_sessions: "Learning Sessions",
      };
      itemsNotFormatted.forEach((item) => {
        itemsFormatted.push({
          state: item.state, // remove commas to avoid errors,
          date: item.date,
          learning_sessions: item.plays,
        });
      });
    }
    // format the data

    var fileTitle = state; // or 'my-unique-title'

    exportCSVFile(headers, itemsFormatted, fileTitle); // call the exportCSVFile() function to process the JSON and trigger the download
  }

  $("body").ready(function ($) {
    $(".view-dashboard-redirect").click(function (e) {
      e.preventDefault($(this).attr("category"));
      var type = $(this).attr("category");
      window.logInteractEvent(
        "homepage",
        "select-dashboardData",
        "",
        "static-homepage",
        "static-homepage",
        "DeviceType",
        window.getDeviceTypeValue(),
        "",
        "",
        "",
        "",
        "",
        ""
      );
      window.location.href = "/data-dashboard/?type=" + type;
      return false;
    });

    $(".view-dashboard").click(function (e) {
      e.preventDefault();
      var type = $(this).attr("category");
      window.logInteractEvent(
        "home",
        "select-dashboard",
        "",
        "static-home",
        "static-home",
        "DeviceType",
        window.getDeviceTypeValue(),
        "",
        "",
        "",
        "",
        "",
        ""
      );
      window.location.href = "/data/?type=" + type;
      return false;
    });

    $(".download-overall").on("click", function () {
      download(dataset, "India");
      window.logInteractEvent(
        "home",
        "download",
        "",
        "public-dashboard",
        "public-dashboard",
        "DeviceType",
        window.getDeviceTypeValue(),
        "ReportName",
        "India.csv",
        "",
        "",
        "",
        ""
      );
      return false;
    });
    // $(".download-overall-updated").on('click', function () {
    //     download(dataset, 'India');
    //     window.logInteractEvent('home', 'download', '', 'public-dashboard', 'public-dashboard', 'DeviceType', window.getDeviceTypeValue(), 'ReportName', 'India.csv', '', '', '', '');
    //     return false;
    // })

    $("#ppc-modal").on("hidden.bs.modal", function (e) {
      $("#ppc-modal video").attr("src", $("#ppc-modal video").attr("src"));
    });

    $("#ppc-modal").on("shown.bs.modal", function () {
      $("#ppc-modal video")[0].play();
    });
  });
});

// Focus Area Section Carousel
let items = document.querySelectorAll(".focus-area-carousel .carousel-item");
items.forEach((el) => {
  const minPerSlide = 3;
  let next = el.nextElementSibling;
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});

$(document).ready(function () {
  $("#recipeCarousel .carousel-item").each(function () {
    // alert("Hello");
    var minPerSlide = 3;
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }
    next.children(":first-child").clone().appendTo($(this));

    for (var i = 0; i < minPerSlide; i++) {
      next = next.next();
      if (!next.length) {
        next = $(this).siblings(":first");
      }
      next.children(":first-child").clone().appendTo($(this));
    }
  });
});

// Nistha Testimonial Carousel
let reviewitems = document.querySelectorAll(
  ".diksha-teachers-carousel .carousel-item"
);
reviewitems.forEach((el) => {
  const reviewMinPerSlide = 3;
  let next = el.nextElementSibling;
  for (var review = 1; review < reviewMinPerSlide; review++) {
    if (!next) {
      // wrap carousel by using first child
      next = reviewitems[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});

// What Parent say about DIKSHA Carousel
let parentsayitems = document.querySelectorAll(
  ".parent-say-carousel .carousel-item"
);
parentsayitems.forEach((el) => {
  const parentsayMinPerSlide = 3;
  let parentsaynext = el.nextElementSibling;
  for (var parentsay = 1; parentsay < parentsayMinPerSlide; parentsay++) {
    if (!parentsaynext) {
      // wrap carousel by using first child
      parentsaynext = parentsayitems[0];
    }
    let cloneChild = parentsaynext.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    parentsaynext = parentsaynext.nextElementSibling;
  }
});



// Diksha for parents Carousel
let parentstudyitems = document.querySelectorAll(
  ".parent-study-carousel .carousel-item"
);
parentstudyitems.forEach((el) => {
  const studyMinPerSlide = 3;
  let studynext = el.nextElementSibling;
  for (var parentstudy = 1; parentstudy < studyMinPerSlide; parentstudy++) {
    if (!studynext) {
      // wrap carousel by using first child
      studynext = parentstudyitems[0];
    }
    let cloneChild = studynext.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    studynext = studynext.nextElementSibling;
  }
});

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

  let winText1 = window.location.href;
  let remainingText1 = "";
  remainingText1= winText1.split('dikshafor')[1].split('/')[0];
  if(remainingText1){
      let suffixText =  toTitleCase(remainingText1);
      document.getElementById('title').textContent = document.getElementById('title').textContent + " " +suffixText;
  }
// Diksha for Others Carousel
let othersitems = document.querySelectorAll(
  ".others-testimonial-carousel .carousel-item"
);
othersitems.forEach((el) => {
  const othersMinPerSlide = 3;
  let othersnext = el.nextElementSibling;
  for (var otherstest = 1; otherstest < othersMinPerSlide; otherstest++) {
    if (!othersnext) {
      // wrap carousel by using first child
      othersnext = othersitems[0];
    }
    let cloneChild = othersnext.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    othersnext = othersnext.nextElementSibling;
  }
});

