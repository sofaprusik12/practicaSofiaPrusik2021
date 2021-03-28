$(function(){
 $('.menu-mobile').on('click', function(){
   $('.header_menu>ul').slideToggle();
   console.log('test');
   });
 $('.dropdown').on('click',function(){
 	$(this).children('.dropdown-content').slideToggle();
 	console.log('test');
 });
 const loader = new Loader({
  apiKey: "YOUR_API_KEY",
  version: "weekly",
  ...additionalOptions,
});
loader.load().then(() => {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
});

// iframe and button
$('iframe#lab').on('click',function() {
  $('iframe#' + current).removeClass('current');
  $('iframe#lab').addClass('current');
  var current = '#lab';
});

});