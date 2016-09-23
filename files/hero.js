var images = {
  background: ["https://www.ux-king.com/assets/gif/berlin.gif", "https://www.ux-king.com/assets/gif/trump.gif" , "https://www.ux-king.com/assets/gif/retention.gif", "https://www.ux-king.com/assets/gif/harambe.gif", "https://www.ux-king.com/assets/gif/improving.gif","https://www.ux-king.com/assets/gif/confused.gif","https://www.ux-king.com/assets/gif/testing.gif","https://www.ux-king.com/assets/gif/testing.gif"],
  text: ["UX & Webdesign Agentur aus Berlin","Make Your UX Great Again","We Can Fix Your Product Retention", "Better UX For Harambe", "We Help You Create Innovative Products","Never Stop Improving","Create Easy To Use Products","Testing Is Improtant"]
};

function newHero(){
  var random = Math.floor(Math.random() * images.background.length);
  $('#hero').fadeTo('slow', 0.9, function() {
    $(this).css('background-image', 'url(' + images.background[random] + ')');
  }).fadeTo('slow', 1);
  console.log('background');
  $('h1.memo').fadeOut(function() {
    $(this).html(images.text[random]+ '<span class="dot">.</span>').delay(1000).fadeIn();
  });
  console.log('intial text: '+ images.text[random]+' ('+images.text[random].length+')');
}

newHero();
window.setInterval(newHero, 7000);
