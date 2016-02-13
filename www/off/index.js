function doConnectFunction() {
  alert("Connected");
}
function doNotConnectFunction() {
  alert("Not Connected");
  location.href = 'https://www.google.ch/webhp?hl=en';
}

var i = new Image();
i.onload = doConnectFunction;
i.onerror = doNotConnectFunction;
i.src = 'https://www.google.co.in/images/nav_logo242.png' + escape(Date());
