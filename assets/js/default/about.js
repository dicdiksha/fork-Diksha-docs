const allElems = document.querySelectorAll(".resources-click");
allElems.forEach(function (elem) {
  elem.addEventListener('click', function (e) {
    e.preventDefault();
    let link = this.getAttribute('data-link'), name = this.getAttribute('data-name');
    window.logInteractEvent('home', 'select-resources', 'open', 'static-about', 'static-about', 'DeviceType', window.getDeviceTypeValue(), 'Resource', name, '', '', '', '');
    window.open(link);
    return false;
  });
});