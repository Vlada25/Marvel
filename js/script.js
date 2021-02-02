var checkbox = document.querySelector('.theme-switch_checkbox');
checkbox.addEventListener('change', function(){
  transition();
  if (this.checked) {
    document.documentElement.style.setProperty('--r', 0);
	document.documentElement.style.setProperty('--g', 0);
	document.documentElement.style.setProperty('--b', 0);
	document.documentElement.style.setProperty('--bg-color', "black");
	document.documentElement.style.setProperty('--shadow', "white");
	document.documentElement.style.setProperty('--text-color', "white");
	document.documentElement.style.setProperty('--text-color-films', "black");
  } else {
    document.documentElement.style.setProperty('--r', 255);
	document.documentElement.style.setProperty('--g', 255);
	document.documentElement.style.setProperty('--b', 255);
	document.documentElement.style.setProperty('--bg-color', "white");
	document.documentElement.style.setProperty('--shadow', "black");
	document.documentElement.style.setProperty('--text-color', "black");
	document.documentElement.style.setProperty('--text-color-films', "white");
  }
})
function transition() {
  document.documentElement.classList.add('transition');
  setTimeout(function() {
    document.documentElement.classList.remove('transition');
  }, 250)
}

