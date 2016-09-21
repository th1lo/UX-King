$( document ).ready(function() {
  var images = {
    background: ["./assets/img/herobg.jpg", "https://media.giphy.com/media/oxsfuzJuJzCjm/giphy.gif" , "https://media.giphy.com/media/12pWOEeKbbfdio/giphy.gif", "https://media.giphy.com/media/YrHOrXFvW4Nk4/giphy.gif"],
    text: ["UX & Webdesign Agentur aus Berlin","Make UX Great Again","We Can Fix Your Product Retention", "Better UX For Harambe"]
  };
  var random = Math.floor(Math.random() * images.background.length);
  console.log(images.text[random]);
  $('#hero').css({'background-image': 'url(' + images.background[random] + ')'});
  $('.memo').html(images.text[random]+ '<span>.</span>');
});
