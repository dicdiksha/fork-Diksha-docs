   
   /*===================== Start onload popup==============*/
  //  $("#banner-modal-popup").modal('show');
  window.onload = function () {
    OpenBootstrapPopup();
  };
  function OpenBootstrapPopup() {
      $("#banner-modal-popup").modal('show');
  }
  /*===================== End onload popup==============*/
$(document).ready(function () {
  let origin = '';
  if (window.origin == 'https://diksha.gov.in' || window.origin == 'https://staging.ntp.net.in') {
    origin = window.origin;
  } else {
    origin = 'https://preprod.ntp.net.in'
  }

  let pdataId = "", windowUrl = "";
  if (window.location.origin.indexOf('diksha.gov.in') >= 0) {
    pdataId = 'prod.diksha.portal';
    windowUrl = 'https://diksha.gov.in';
  } else if (window.location.origin.indexOf('staging.ntp.net.in') >= 0) {
    pdataId = 'staging.diksha.portal';
    windowUrl = 'https://staging.ntp.net.in';
  } else {
    pdataId = 'preprod.diksha.portal';
    windowUrl = 'https://preprod.ntp.net.in';
  }
  window['__landing_page_config'] = {
    "hostURL": windowUrl || window.location.origin,
    "telemetry": {
      "pdata": {
        "id": pdataId,
        "ver": "5.1.0",
        "pid": "sunbird-portal"
      }
    }
  }
  var tenantId, tenantInfo, orgInfo, type = 'laptop';
  var hostURL = window['__landing_page_config'].hostURL || null;
  var md = new MobileDetect(window.navigator.userAgent),
    rules = window['MobileDetect']._impl.mobileDetectRules,
    outcome = [];
  outcome.push({ key: 'phone()', val: md.phone() });
  outcome.push({ key: 'tablet()', val: md.tablet() });
  outcome.push({ key: 'mobile()', val: md.mobile() });
  outcome.push({ key: 'os()', val: md.os() });
  outcome.push({ key: 'userAgent()', val: md.userAgent() });
  outcome.push({ key: 'mobileGrade()', val: md.mobileGrade() });
  outcome.push({ key: 'smaller side', val: window['MobileDetect']._impl.getDeviceSmallerSide() });
  outcome.push({ key: '_version', val: window['MobileDetect'].version || '(<1.3.3)' });

  ['tablets', 'phones', 'oss', 'uas', 'utils'].forEach(function (section) {
    Object.keys(rules[section]).filter(function (key) {
      return md.is(key);
    }).forEach(function (key) {
      outcome.push({ key: 'is("' + key + '")', val: true });
    });
  });

  Object.keys(rules.props).forEach(function (propKey) {
    var version;
    version = md.versionStr(propKey);
    if (version) {
      outcome.push({ key: 'versionStr("' + propKey + '")', val: '"' + version + '"' });
    }
    version = md.version(propKey);
    if (version) {
      outcome.push({ key: 'version("' + propKey + '")', val: version });
    }
  });

  if (md.phone() != null) {
    type = 'mobile';
  } else if (md.tablet() != null) {
    type = 'tab';
  } else {
    type = 'laptop';
  }

  //quiz telemetry end
  function OnLoad() {
    tenantId = sessionStorage.getItem("tenantSlug") || 'ntp';
    getOrgInfo(tenantId).done(function () {   
      initTelemetryService();
      let path = window.location.pathname, ftUser = "true";
      if (localStorage && localStorage.getItem("fpDetails_v2")) ftUser = "false";
      if (path == '/') {
        logImpressionEvent('init', 'home', 'page-loaded', '', 'static-home', 'static-home', 'DeviceType', window.getDeviceTypeValue(), 'FirstTimeUser', ftUser, '', '');
      } else if (path == '/data/') {
        logImpressionEvent('init', 'home', 'page-loaded', '', 'public-dashboard', 'public-dashboard', 'DeviceType', window.getDeviceTypeValue(), 'FirstTimeUser', ftUser, '', '');
      } else if (path == '/about/') {
        logImpressionEvent('init', 'home', 'page-loaded', '', 'static-about', 'static-about', 'DeviceType', window.getDeviceTypeValue(), 'FirstTimeUser', ftUser, '', '');
      } else if (path == '/getapp/') {
        logImpressionEvent('init', 'home', 'page-loaded', '', 'static-getapp', 'static-getapp', 'DeviceType', window.getDeviceTypeValue(), 'FirstTimeUser', ftUser, '', '');
      } else if (path == '/contribute/') {
        logImpressionEvent('init', 'home', 'page-loaded', '', 'static-contribute', 'static-contribute', 'DeviceType', window.getDeviceTypeValue(), 'FirstTimeUser', ftUser, '', '');
      }
    });
  }

  OnLoad();
  
  function getChannelId(id){
    return new Promise((resolve, reject) => { 
      $.ajax({
        method: "POST",
        url: hostURL + "/api/org/v1/search",
        data: JSON.stringify({
          request: {
            filters: {
              isRootOrg: true,
              slug: id || 'ntp'
            }
          }
        }),
        contentType: "application/json"
      }).done(function (response) {
        if (response && response.responseCode === "OK") {
          resolve(response.result.response.content[0]);
        }
      })
    });
  }
  function getOrgInfo(id) {
    return $.ajax({
      method: "POST",
      url: hostURL + "/api/org/v1/search",
      data: JSON.stringify({
        request: {
          filters: {
            isRootOrg: true,
            slug: id || 'ntp'
          }
        }
      }),
      contentType: "application/json"
    }).done(function (response) {
      if (response && response.responseCode === "OK") {
        orgInfo = response.result.response.content[0];
      }
    })
  };

  function getAnonymousUserConfig() {
    var endpoint = "/data/v1/telemetry"
    return {
      pdata: window['__landing_page_config'].telemetry.pdata,
      endpoint: endpoint,
      apislug: "/content",
      host: hostURL,
      uid: 'anonymous',
      sid: window.uuidv1(),
      channel: orgInfo.hashTagId,
      env: 'public'
    }
  }

  function initTelemetryService() {
    var config = getAnonymousUserConfig();
    window['EkTelemetry'].initialize(config);
  }

  function logImpressionEvent(impressionType, env, edata_type, edata_subtype, edata_id, page_id, c0_type, c0_id, c1_type, c1_value, c2_type, c2_value) {
    window['EkTelemetry'].config.batchsize = 1;
    let temp = [];
    if (c0_type != '') temp.push({ type: c0_type, id: c0_id })
    if (c1_type != '') temp.push({ type: c1_type, id: c1_value })
    if (c2_type != '') temp.push({ type: c2_type, id: c2_value })
    var options = {
      context: {
        env: env,
        channel: orgInfo.hashTagId,
        uid: 'anonymous',
        cdata: temp,
        rollup: getRollupData([orgInfo.hashTagId])
      },
      object: {},
      tags: [orgInfo.hashTagId]
    };
    var edata = {
      type: edata_type,
      pageid: page_id,
      subtype: impressionType || edata_subtype,
      uri: encodeURI(window.location.href),
      visits: []
    };
    window['EkTelemetry'].impression(edata, options);
  }

  window.logInteractEvent = function (env, edata_type, edata_subtype, edata_id, page_id, c0_type, c0_id, c1_type, c1_value, c2_type, c2_value, c3_type, c3_value) {
    let temp = [];
    if (c0_type != '') temp.push({ type: c0_type, id: c0_id })
    if (c1_type != '') temp.push({ type: c1_type, id: c1_value })
    if (c2_type != '') temp.push({ type: c2_type, id: c2_value })
    if (c3_type != '') temp.push({ type: c3_type, id: c3_value })
    var options = {
      context: {
        env: env,
        channel: orgInfo.hashTagId,
        uid: 'anonymous',
        cdata: temp,
        rollup: getRollupData([orgInfo.hashTagId])
      },
      object: {},
      tags: [orgInfo.hashTagId]
    };
    var edata = {
      id: edata_id,
      type: edata_type,
      pageid: page_id
    };
    window['EkTelemetry'].interact(edata, options);
  }

  function getRollupData(orgIds) {
    var rollup = {};
    orgIds.forEach(function (el, index) {
      rollup['l' + (index + 1)] = el;
    })
    return rollup;
  }

  window.getDeviceTypeValue = function () {
    var isMobile = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      }
    }
    if (isMobile.Android()) {
      return "Mobile"
    } else if (isMobile.iOS()) {
      return "Tab"
    } else {
      return "Desktop"
    }
  }

  const states = [{
    label: "Andaman & Nicobar Islands",
    value: "an",
  },
  {
    label: "Arunachal Pradesh", 
    value: "ar",
  },
  {
    label: "Andhra Pradesh",
    value: "apekx",
  },
  {
    label: "Assam",
    value: "as",
  },
  {
    label: "Bihar",
    value: "br",
  },
  {
    label: "Chhattisgarh",
    value: "cg",
  },
  {
    label: "Chandigarh",
    value: "ch",
    
  },
  {
    label: "Delhi",
    value: "dl",
  },
  {
    label: "Dadra And Nagar Haveli And Daman And Diu",
    value: "DD",
  },
  {
    label: "Goa",
    value: "ga",
  },
  {
    label: "Gujarat",
    value: "gj",
  },
  {
    label: "Himachal Pradesh",
    value: "hp",
  },
  {
    label: "Haryana",
    value: "hr",
  },
  {
    label: "Jharkhand",
    value: "jh",
  },
  {
    label: "Jammu And Kashmir",
    value: "jk",
  },
  {
    label: "Karnataka",
    value: "ka",
  },
  {
    label: "Kerala",
    value: "kl",
  },
  {
    label: "Ladakh",
    value: "ld",
  },
  {
    label: "Lakshadweep",
    value: "lk",
  },
  {
    label: "Maharashtra",
    value: "mitra",
  },
  {
    label: "Meghalaya",
    value: "ml",
  },
  {
    label: "Manipur",
    value: "mn",
  },
  {
    label: "Madhya Pradesh",
    value: "mp",
  },
  {
    label: "Mizoram",
    value: "mz",
  },
  {
    label: "Nagaland",
    value: "nl",
  },
  {
    label: "Odisha",
    value: "od",
  },
  {
    label: "Punjab",
    value: "pb",
  },
  {
    label: "Pondicherry",
    value: "py",
  },
  {
    label: "Rajasthan",
    value: "rj",
  },
  {
    label: "Sikkim",
    value: "sk",
  },
  {
    label: "Tamil Nadu",
    value: "tn",
  },
  {
    label: "Tripura",
    value: "tp",
  },
  {
    label: "Telangana",
    value: "ts",
  },
  {
    label: "Uttarakhand",
    value: "uk",
  },
  {
    label: "Uttar Pradesh",
    value: "up",
  }];

  states.forEach(element => {
    $('.state-boards').append('<option value="' + element.value + '">' + element.label + '</option>');
  });

  $(".state-boards").on("change", function () {
    if ($(this).children("option:selected").val() != "Select State") {
      $(".state-explore").attr("data-slug", $(this).children("option:selected").val()).attr("data-name", $(this).children("option:selected").text());
    } else {
      $(".state-explore").attr("data-slug", '#').attr("data-name", '#');
    }
  });

  var sessionItem = sessionStorage.getItem("rootTenantLogo");
  if (sessionItem) {
    sessionStorage.removeItem("rootTenantLogo");
  }
  var sessionItem = sessionStorage.getItem("tenantSlug");
  if (sessionItem) {
    sessionStorage.removeItem("tenantSlug");
  }

  // $("body").ready(function ($) {
  $(".sb-btn-explore-diksha").click(function (e) {
    e.preventDefault();
    window.logInteractEvent('home', 'select-explore', '', 'static-home', 'static-home', 'DeviceType', window.getDeviceTypeValue(), '', '', '', '', '', '');
    window.open('/explore', "_self");
    return false;
  });

  

  $(".state-explore").click(function (e) {
    e.preventDefault();
    let slug = $(this).attr('data-slug'), name = $(this).attr('data-name');
    let validationMessage = document.getElementById("error-msg");
    if(slug) {
      window.logInteractEvent('home', 'select-explore-' + slug.toLowerCase(), '', 'static-home', 'static-home', 'DeviceType', window.getDeviceTypeValue(), 'State', name, '', '', '', '');
      window.open('/' + slug + '/explore' , "_self");
      validationMessage.style.display = "none";
    } else {
      validationMessage.style.display = "block";
    }
    return false;
  });

  // $("#btnClosePopup").click(function () {
  //   $("#myModal1").modal('hide');
  // });

  $(".nonstate-explore").click(async(e) =>{
    e.preventDefault();
    let slug =e.currentTarget.getAttribute('data-slug');
    let  name = e.currentTarget.getAttribute('data-name');
    window.logInteractEvent('home', 'select-explore-' + slug.toLowerCase(), '', 'static-home', 'static-home', 'DeviceType', window.getDeviceTypeValue(), 'State', name, '', '', '', '');
    // if(name === "NCERT"){
    //   window.open('/' + slug + '/exploren/1?selectedTab=home', "_self");
    // } else{
      window.open('/' + slug + '/explore' ,"_self");
    // }
    return false;
  });

  $(".nav-header-menu").click(function (e) {
    e.preventDefault();
    let etype = $(this).attr('data-etype'), eid = $(this).attr('data-eid');
    window.logInteractEvent('home', etype, '', eid, eid, 'DeviceType', window.getDeviceTypeValue(), 'State', name, '', '', '', '');
    window.location.href = $(this).attr('href');
    return false;
  });

  $(".get-it-on-googleplay").click(function (e) {
    e.preventDefault();
    window.logInteractEvent('home', 'select-mobileapp', '', 'static-home', 'static-home', 'DeviceType', window.getDeviceTypeValue(), '', '', '', '', '', '');
    window.open('https://play.google.com/store/apps/details?id=in.gov.diksha.app&referrer=utm_source=missionsite&utm_medium=explore');
    return false;
  });

  $(".terms-policies").click(function (e) {
    e.preventDefault();
    window.logInteractEvent('home', 'select-terms', '', 'static-home', 'static-home', 'DeviceType', window.getDeviceTypeValue(), '', '', '', '', '', '');
    window.open('/term-of-use.html',"_self");
    return false;
  });
  /*===================== Start login button==============*/
  $(".login-home-btn").click(function (e) {
    e.preventDefault();
    window.logInteractEvent('home', 'select-explore', '', 'static-home', 'static-home', 'DeviceType', window.getDeviceTypeValue(), '', '', '', '', '', '');
    window.open('/resources', "_self");
    return false;
  });
    /*===================== End login button==============*/
  // });
 
  // View all nistha course button js
    $(".view-nistha-courses-btn").click(function (e) {
      e.preventDefault();
      window.logInteractEvent('diksha-for-teachers', 'select-viewall', '', 'static-home', 'static-home', 'DeviceType', window.getDeviceTypeValue(), '', '', '', '', '', '');
      window.open('/explore/1?key=nistha', "_self");
      return false;
    });
    // Explore Nistha button js
    $(".explore-nistha-btn").click(function (e) {
      e.preventDefault();
      window.logInteractEvent('home', 'select-explore', '', 'static-home', 'static-home', 'DeviceType', window.getDeviceTypeValue(), '', '', '', '', '', '');
      window.open('/explore', "_self");
      return false;
    });

    // Explore as DIKSHA For student page explore study material courses js
    $(".view-study-courses-btn").click(function (e) {
      e.preventDefault();
      window.logInteractEvent('diksha-for-student', 'select-viewall', '', 'static-home', 'static-home', 'DeviceType', window.getDeviceTypeValue(), '', '', '', '', '', '');
      window.open('/explore/', "_self");
      return false;
    });
});


/******************************************************************* */
var x = window.matchMedia("(max-width: 992px)");
function ResizeAdpativeContent() {
  if (x.matches) { // If media query matches
    $("#webView").remove();
  } else {
    $("#mobileView").remove();
  }
}

$(document).ready(function () {
  // $('[data-toggle="tooltip"]').tooltip();
  ResizeAdpativeContent();

  // tab index enter key event


  //parallax scroll
  $(window).on("load scroll", function () {
    var parallaxElement = $(".parallax_scroll"),
      parallaxQuantity = parallaxElement.length;
    window.requestAnimationFrame(function () {
      for (var i = 0; i < parallaxQuantity; i++) {
        var currentElement = parallaxElement.eq(i),
          windowTop = $(window).scrollTop(),
          elementTop = currentElement.offset().top,
          //elementBottom = $(window).height() - elementTop - currentElement.height();
          elementHeight = currentElement.height(),
          viewPortHeight = window.innerHeight * 1 - elementHeight * 1,
          scrolled = windowTop - elementTop - viewPortHeight;
        currentElement.css({
          transform: "translate3d(-40%," + scrolled * 0.25 + "px, 0)"
        });
      }
    });
  });
  $('.dk-nav-tabs li:first-child').addClass('active');
  $('.tab-content').hide();
  $('.tab-content:first-child').show();

  // Click function
  $('.dk-nav-tabs li').click(function () {
    $('.dk-nav-tabs li').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();

    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
  });
  $('.mdk-nav-tabs .dk-nav-tabs li:first-child').addClass('active');
  $('.mdk-nav-tabs .tab-content').hide();
  $('.mdk-nav-tabs .tab-content:first').show();

  // Click function
  $('.mdk-nav-tabs .dk-nav-tabs li').click(function () {
    $('.mdk-nav-tabs .dk-nav-tabs li').removeClass('active');
    $(this).addClass('active');
    $('.mdk-nav-tabs .tab-content').hide();

    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
  });
});

$(window).resize(function () {
  if (/iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(navigator.userAgent)) {
    // alert('mobile browser')
  } else {
    if (x.matches) {
      location.reload();   
    }
  }
});
 

// $('#recipeCarousel').carousel({ 
//   interval: 2000
// })
// $(document).ready(function(){  
//   $('#recipeCarousel .carousel-item').each(function () {   
//     // alert("Hello");
//     var minPerSlide = 3;
//     var next = $(this).next();
//     if (!next.length) {
//     next = $(this).siblings(':first');
//     }
//     next.children(':first-child').clone().appendTo($(this));
    
//     for (var i = 0; i < minPerSlide; i++) { next=next.next(); if (!next.length) { next=$(this).siblings(':first'); } next.children(':first-child').clone().appendTo($(this)); } });
// });
/*=====================End diksha dashbord===============*/
      
                                                               