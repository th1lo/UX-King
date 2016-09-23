var images = {
  background: ["https://media.giphy.com/media/beyUZ1fJVWfyE/giphy.gif", "https://media.giphy.com/media/oxsfuzJuJzCjm/giphy.gif" , "https://media.giphy.com/media/MOCoGGiHjBsic/giphy.gif", "https://media.giphy.com/media/YrHOrXFvW4Nk4/giphy.gif", "http://i.imgur.com/o6yQo2r.gif","http://i.imgur.com/Yffu60C.gif","https://media.giphy.com/media/tvGOBZKNEX0ac/giphy.gif","http://pop.h-cdn.co/assets/16/35/1472752799-ezgifcom-optimize-2.gif"],
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
