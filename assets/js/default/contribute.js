document.querySelector(".participate-contribute").addEventListener('click', function (e) {
  e.preventDefault();
  window.logInteractEvent('home', 'select-participate', '', 'static-contribute', 'static-contribute', 'DeviceType', window.getDeviceTypeValue(), '', '', '', '', '', '');
  window.open('https://vdn.diksha.gov.in/');
  return false;
});