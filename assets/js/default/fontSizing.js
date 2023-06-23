/* font resizer */
var min = 12;
var base = 16;
var max = 20;

var el = document.querySelector("html");
var fontSizeEle = window
  .getComputedStyle(el, null)
  .getPropertyValue("font-size");
//---- Get font from local, if undefined or null use style font
var localFontSize = getFromLocal();
var currentFontSize = localFontSize ? localFontSize : fontSizeEle;
var fontSize = parseFloat(currentFontSize);
storeToLocal(fontSize);
//--------------------------------

function EnDisableFontSizeBtns() {
  document.querySelector("#ResetFontSize").disabled =
    fontSize == base ? true : false;
  document.querySelector("#DecreaseFontSize").disabled =
    fontSize == min ? true : false;
  document.querySelector("#IncreaseFontSize").disabled =
    fontSize == max ? true : false;
}

function changeFontSize(limit, direction) {
  fontSize = fontSize + direction;
}

function IncreaseFontSize() {
  fontSize = fontSize + 2;
  IncreaseSize = fontSize <= max ? storeToLocal(fontSize) : '';
}

function ResetFontSize() {
  fontSize = base;
  storeToLocal(fontSize);
}

function DecreaseFontSize() {
  fontSize = fontSize - 2;
  DecreaseSize = fontSize >= min ? storeToLocal(fontSize) : '';
}

/*Store and get from local storage*/
function storeToLocal(fontSize) {
  //change font and store.
  el.style.fontSize = fontSize + "px";
  document.getElementById("currentFont").innerHTML = fontSize;
  EnDisableFontSizeBtns();
  localStorage.setItem("fontSize", fontSize);
}

function getFromLocal() {
  var value = localStorage.getItem("fontSize");
  return value;
}


// skip to maincontent
function scrollMainContent() {
  document.querySelector('#scrollMainContent').scrollIntoView({
    behavior: 'smooth'
  });
}

// check for saved 'darkMode' in localStorage
  //dark mode and default theme
  const darkModeToggle = document.querySelector('#dark-mode-toggle');
  const elhtml = document.querySelector('html');
      const disableDarkMode = () => {
          // 1. Remove the class from the body
          elhtml.classList.remove('darkmode');
          // 2. Update darkMode in localStorage 
          localStorage.setItem('data-theme', "Default");
        }
        const enableDarkMode = () => {
          // 1. Add the class to the body
          elhtml.classList.add('darkmode');
          // 2. Update darkMode in localStorage
          localStorage.setItem('data-theme', 'Darkmode');
        }
      const getTheme = localStorage.getItem('data-theme');
      if(getTheme==null){
        localStorage.setItem('data-theme',"Default");
      }else{
        if (getTheme === 'Darkmode') {
          enableDarkMode();
        } else if(getTheme=="Default"){
          disableDarkMode();
        }
      }
  // When someone clicks the button
  darkModeToggle && darkModeToggle.addEventListener('click', () => {
    // get their darkMode setting
    var theme = localStorage.getItem('data-theme');
    // if it not current enabled, enable it
    if (theme !== 'Darkmode') {
      enableDarkMode();
      // if it has been enabled, turn it off  
    } else {
      disableDarkMode();
    }
  });