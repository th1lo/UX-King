function isMobile() {
	var index = navigator.appVersion.indexOf("Mobile");
	return (index > -1);
}

if (isMobile()) {
  var images = {
    background: [
      "./assets/gif/berlin.jpg",
      "./assets/gif/grow.jpg",
      "./assets/gif/retention.jpg",
      "./assets/gif/challenges.jpg",
      "./assets/gif/innovative.jpg",
      "./assets/gif/improving.jpg",
      "./assets/gif/confused.jpg",
      "./assets/gif/testing.jpg"],
    text: [
      "UX & Webdesign Agentur aus Berlin",
      "Together We Can Grow Your Business",
      "We Can Fix Your Product Retention",
      "We Love New Challenges",
      "We Help You Create Innovative Products",
      "Never Stop Improving",
      "Create Easy To Use Products",
      "Testing Is Important"]
  };
}
else {
  var images = {
    background: [
      "./assets/gif/berlin.gif",
      "./assets/gif/grow.gif",
      "./assets/gif/retention.gif",
      "./assets/gif/challenges.gif",
      "./assets/gif/innovative.gif",
      "./assets/gif/improving.gif",
      "./assets/gif/confused.gif",
      "./assets/gif/testing.gif"],
    text: [
			"UX & Webdesign Agentur aus Berlin",
      "Together We Can Grow Your Business",
      "We Can Fix Your Product Retention",
      "We Love New Challenges",
      "We Help You Create Innovative Products",
      "Never Stop Improving",
      "Create Easy To Use Products",
      "Testing Is Important"]
  };
}

var uniqueRandoms = [];
var numRandoms = images.background.length;
function makeUniqueRandom() {
    if (!uniqueRandoms.length) {
        for (var i = 0; i < numRandoms; i++) {
            uniqueRandoms.push(i);
        }
    }
    var index = Math.floor(Math.random() * uniqueRandoms.length);
    var val = uniqueRandoms[index];
    uniqueRandoms.splice(index, 1);
    return val;
}

function newHero(){
  var rand = makeUniqueRandom();
  console.log('Active Hero: '+images.text[rand]);
  $('#hero').fadeTo('slow', 0.9, function() {
    $(this).css('background-image', 'url(' + images.background[rand] + ')');
  }).fadeTo('slow', 1);
  $('h1.memo').fadeOut(function() {
    $(this).html(images.text[rand]+ '<span class="dot">.</span>').delay(1000).fadeIn();
  });
}

var intervalId = setInterval(newHero, 7000);
console.log('New Interval (Id:'+intervalId+')');
newHero();

$(document).keydown(function(e){
  if (e.keyCode === 27) {
    console.log('Stopped Interval (Id:'+intervalId+')');
    clearInterval(intervalId);
    newHero();
  }
});

var outOfView = false;

$(window).scroll(function() {
  if ($(window).scrollTop() >= 700 && !outOfView) {
    console.log('Stopped Interval (Id:'+intervalId+')');
    clearInterval(intervalId);
    outOfView = true;
  } if ($(window).scrollTop() <= 500 && outOfView) {
    intervalId = setInterval(newHero, 7000);
    console.log('New Interval (Id:'+intervalId+')');
    newHero();
    outOfView = false;
  }
});
