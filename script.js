function formData() {
    var inputEmail3 = document.forms["userform"]["Email"];
    var name = document.forms["userform"]["Name"];
    if (inputEmail3.value == "") {
      window.alert("Please Enter your email");
      return false;
    }
    if (name.value == "") {
      window.alert("Please Enter your name");
      return false;
    }
    return true;
  }
$(document).ready(function(){
  $("#btn-1").click(function(){
    $("p").hide();
  });
});
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:100,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      },
  }
})
