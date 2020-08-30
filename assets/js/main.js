

// init Isotope
var $grid = $('.grid').isotope({
    // options
  });
  // filter items on button click
  $('.button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });




$(document).ready( function() {
    $("#blog1").on("click", function() {
        $("#tray").load("blog-post-1-cryptoearner.html");
    });


  });

$(document).ready( function() {
   $("#blog2").on("click", function() {
        $("#tray").load("blog-post-2-newsites.html");
    });





});

function validateemail()  
{  
var x=document.myform.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  return false;  
  } 
  

} 