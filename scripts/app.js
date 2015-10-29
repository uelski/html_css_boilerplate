// hey there pal


window.onload = function() {
  //alert('hey there buddy');
  statusReport("hey there buddy");

  var furniture = prompt("What is your favorite piece of furniture");
  var passion = prompt("What was your passion as child?");
  var middleName = prompt("What is your middle name?");
  var hometown = prompt("What is the name of your hometown?");



  var contentContainer = document.getElementById('content');

  contentContainer.innerHTML = "Mr. " + furniture + " is going to the " + passion + " factory to see " + middleName + " " + hometown + ".";
  var changingImg = document.getElementById("y").src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSYoXyq4YXD8ProG4ch0nDjzC2T9_xiSY68E5C0PL-8Yij8dvxkHw"


}

function statusReport(message) {
  console.log(message);
  return message;
}
