function isMobile() {
	var index = navigator.appVersion.indexOf("Mobile");
	return (index > -1);
}

if (isMobile()) {
	// Mobile
  var images = {
    background: [
      "https://www.ux-king.com/assets/gif/berlin.jpg",
      "https://www.ux-king.com/assets/gif/trump.jpg",
      "https://www.ux-king.com/assets/gif/retention.jpg",
      "https://www.ux-king.com/assets/gif/harambe.jpg",
      "https://www.ux-king.com/assets/gif/innovative.jpg",
      "https://www.ux-king.com/assets/gif/improving.jpg",
      "https://www.ux-king.com/assets/gif/confused.jpg",
      "https://www.ux-king.com/assets/gif/testing.jpg"],
    text: [
      "UX & Webdesign Agentur aus Berlin",
      "Make Your UX Great Again",
      "We Can Fix Your Product Retention",
      "Better UX For Harambe",
      "We Help You Create Innovative Products",
      "Never Stop Improving",
      "Create Easy To Use Products",
      "Testing Is Improtant"]
  };
}
else {
	// Desktop
  var images = {
    background: [
      "https://www.ux-king.com/assets/gif/berlin.gif",
      "https://www.ux-king.com/assets/gif/trump.gif",
      "https://www.ux-king.com/assets/gif/retention.gif",
      "https://www.ux-king.com/assets/gif/harambe.gif",
      "https://www.ux-king.com/assets/gif/innovative.gif",
      "https://www.ux-king.com/assets/gif/improving.gif",
      "https://www.ux-king.com/assets/gif/confused.gif",
      "https://www.ux-king.com/assets/gif/testing.gif"],
    text: [
      "UX & Webdesign Agentur aus Berlin",
      "Make Your UX Great Again",
      "We Can Fix Your Product Retention",
      "Better UX For Harambe",
      "We Help You Create Innovative Products",
      "Never Stop Improving",
      "Create Easy To Use Products",
      "Testing Is Improtant"]
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
  console.log(rand);
  $('#hero').fadeTo('slow', 0.9, function() {
    $(this).css('background-image', 'url(' + images.background[rand] + ')');
  }).fadeTo('slow', 1);
  $('h1.memo').fadeOut(function() {
    $(this).html(images.text[rand]+ '<span class="dot">.</span>').delay(1000).fadeIn();
  });
}

newHero();
window.setInterval(newHero, 7000);
