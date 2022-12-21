$(document).ready(function(){

/* START: highlight cover letter icon on page load when it doesn't show in url */
  $('[href]').each(function() {
    if ((this.href == window.location.href) && !$('#cover-pg').hasClass('curent-page')) {
      $('#cover-pg').removeClass('current-page');
      $(this).addClass('current-page');  
    } 
  });
/* END: highlight cover leter icon on page load when it doesn't show in url */

/* START: eye icons that drop down to hidden content */
$("#box-01").hide();
$("#box-02").hide();
$("#box-03").hide();
$("#box-04").hide();
$("#box-05").hide();
// $("#box-06").hide();
var open  = '<i class="far fa-eye"></i>';
var close = '<i class="far fa-eye-slash"></i>';

$(".click-box-01").click(function(){
  $("#box-01").slideToggle(300);

  if ($.trim($("#button-box-01").html()) === open) {
    $("#button-box-01").html(close);
      } else {
   $("#button-box-01").html(open);
      }
  });

$(".click-box-02").click(function(){
  $("#box-02").slideToggle(300);

  if ($.trim($("#button-box-02").html()) === open) {
    $("#button-box-02").html(close);
      } else {
   $("#button-box-02").html(open);
      }
  });

$(".click-box-03").click(function(){
  $("#box-03").slideToggle(300);

  if ($.trim($("#button-box-03").html()) === open) {
    $("#button-box-03").html(close);
      } else {
   $("#button-box-03").html(open);
      }
  });

$(".click-box-04").click(function(){
  $("#box-04").slideToggle(300);

  if ($.trim($("#button-box-04").html()) === open) {
    $("#button-box-04").html(close);
      } else {
   $("#button-box-04").html(open);
      }
  });

$(".click-box-05").click(function(){
  $("#box-05").slideToggle(300);

  if ($.trim($("#button-box-05").html()) === open) {
    $("#button-box-05").html(close);
      } else {
   $("#button-box-05").html(open);
      }
  });

$(".click-box-06").click(function(){
  $("#box-06").slideToggle(300);

  if ($.trim($("#button-box-06").html()) === open) {
    $("#button-box-06").html(close);
      } else {
   $("#button-box-06").html(open);
      }
  });
/* END: eye icons that drop down to hidden content */

}); // document.ready close

$(window).scroll(function(e){ 
/* monitor navigation on window resize and assign position accordingly */
  var $magicNav       = $('#navigation-wrapper'); 

  if ($(this).scrollTop() > 160){ 
    $magicNav.removeClass('nav-absolute');
    $magicNav.addClass('nav-fixed'); 
  }
  if ($(this).scrollTop() < 160){
    $magicNav.removeClass('nav-fixed');
    $magicNav.addClass('nav-absolute'); 
  } 
});


/* this works'ish */
/*
$(document).ready(function () {
    setTimeout(function(){
        $('#bobs-message-first-visit').animate({'height':'360px', 'margin-top': '0px'},900);
    }, 1000);

});
*/
 
/* see about putting these in document.ready funcation after they work */
/*
function hideInitialBobsMessage() {
  var open  = '<i class="fas fa-chevron-circle-down"></i>';
  var close = '<i class="fas fa-chevron-circle-up"></i>';

  if($('#bobs-message-first-visit').css('margin-top') == '0px') {
    $('#bobs-message-first-visit').animate({'height':'360px', 'margin-top': '-300px'},500);
    $("#open-close").html(close);
    // $('.inside-message-fist').animate({'height':'300px', 'margin-top': '0px'},500);
  } else {

    $('#bobs-message-first-visit').animate({'height':'360px', 'margin-top': '0px'},500);
    $("#open-close").html(open);
    // $('.inside-message-fist').animate({'height':'300px', 'margin-top': '-300px'},500);   
  }
}
*/

function toggleBobsMessage() {
  var open  = '<i class="fas fa-chevron-circle-down"></i>';
  var close = '<i class="fas fa-chevron-circle-up"></i>';

  if($('#bobs-message').css('height') == '30px') {
    $('#bobs-message').animate({'height':'330px', 'margin-top': '0px'},500);
    $('.inside-message').animate({'height':'300px', 'margin-top': '0px'},500);
    $("#open-close").html(close);
    } else {

      $('#bobs-message').animate({'height':'30px', 'margin-top': '0px'},500);
      $('.inside-message').animate({'height':'300px', 'margin-top': '-300px'},500);
      $("#open-close").html(open);   
  }
}


/* start click anywhere to close #bobs-message */
var dontCloseBobsMessage  = document.getElementById('button-box-06');

// body.addEventListener("click", function (event)
document.addEventListener('click', function(event) {
var open    = '<i class="fas fa-chevron-circle-down"></i>';

if ($('#bobs-message').css('height') == '330px') {
    $('#bobs-message').animate({'height':'30px', 'margin-top': '0px'},500);
    $('.inside-message').animate({'height':'300px', 'margin-top': '-300px'},500);
    $("#open-close").html(open);
  }
    // alert("wrapper");
}, false); 

dontCloseBobsMessage.addEventListener("click", function (ev) {
    ev.stopPropagation();
}, false);
/* end click anywhere to close #bobs-message */

// footer ajax contact
$(document).ready(function() {
  $('#emailBob').click(function() {
    //event.preventDefault();
    $.ajax({
      dataType: "JSON",
      url: "_includes/contact-ajax-process.php",
      type: "POST",
      data: $('#contactForm').serialize(),
      beforeSend: function(xhr) {
        $('#msg').html('<span>Sending - one moment...</span>');
      },
      success: function(response) {
        // console.log(response);
        if(response) {
          console.log(response);
          if(response['signal'] == 'ok') {
            $('#contactForm').html('<span>Your message was sent successfully. I will see it soon and respond accordingly.</span>');
          } else {
            $('#msg').html('<div class="alert alert-warning">' + response['msg'] + '</div>');
          }
        } 
      },
      error: function() {
        $('#msg').html('<div class="alert alert-warning">There was an error between your IP and the server. Please try again later.</div>');
      }, 
      complete: function() {
        // $('#contact').html('<span>Your message was sent successfully.</span>');
        // $('#send-success').html('<input name="clozer" id="clozer" class="clozer" value="Close">');
      }
    })
  });
});
