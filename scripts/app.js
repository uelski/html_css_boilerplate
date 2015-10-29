// hey there pal


window.onload = function() {
  //alert('hey there buddy');
  statusReport("hey there buddy");

  var username = prompt("What is your name?");
  var mission = prompt("What is your mission?");

  var contentContainer = document.getElementById('content');

  contentContainer.innerHTML = username + ' is on a mission to ' + mission;
}

function statusReport(message) {
  console.log(message);
  return message;
}
