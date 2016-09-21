var images = {
  background: ["https://media.giphy.com/media/beyUZ1fJVWfyE/giphy.gif", "https://media.giphy.com/media/oxsfuzJuJzCjm/giphy.gif" , "https://media.giphy.com/media/12pWOEeKbbfdio/giphy.gif", "https://media.giphy.com/media/YrHOrXFvW4Nk4/giphy.gif", "http://i.imgur.com/o6yQo2r.gif","http://i.imgur.com/Yffu60C.gif"],
  text: ["UX & Webdesign Agentur aus Berlin","Make UX Great Again","We Can Fix Your Product Retention", "Better UX For Harambe", "We Help You Create Innovative Products","Never Stop Improving"]
};
window.setInterval(function(){
  var random = Math.floor(Math.random() * images.background.length);
  $('#hero').css({'background-image': 'url(' + images.background[random] + ')'});
  $('.memo').html(images.text[random]+ '<span>.</span>');
}, 5000);

var random = Math.floor(Math.random() * images.background.length);
$('#hero').css({'background-image': 'url(' + images.background[random] + ')'});
$('.memo').html(images.text[random]+ '<span>.</span>');
