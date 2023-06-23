
document.querySelector(".getapp-googleplay").addEventListener('click', function (e) {
  e.preventDefault();
  window.logInteractEvent('home', 'select-mobileapp', '', 'static-getapp', 'static-getapp', 'DeviceType', getDeviceTypeValue(), '', '', '', '', '', '');
  window.open('https://play.google.com/store/apps/details?id=in.gov.diksha.app&referrer=utm_source=missionsite&utm_medium=explore');
  return false;
});

document.querySelector(".visit-diksha-portal").addEventListener('click', function (e) {
  e.preventDefault();
  window.logInteractEvent('home', 'select-portal', '', 'static-getapp', 'static-getapp', 'DeviceType', getDeviceTypeValue(), '', '', '', '', '', '');
  window.open('/explore');
  return false;
});