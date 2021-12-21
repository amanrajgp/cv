$(document).ready(function(){
    $(window).scroll(function(){
      if(this.scrollY>20){
        $(".navbar").addClass("sticky");
      }else{
        $(".navbar").removeClass("sticky");
      }
      if(this.scrollY > 500){
        $(".scroll-up-btn").addClass("show");
      }
      else{
        $(".scroll-up-btn").removeClass("show");
      }
    });
    //slide-up script
    $(".scroll-up-btn").click(function(){
      $("html").animate({scrollTop: 0});
    });
    // toggle menu/navbar script
    $(".menu-btn").click(function(){
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    })
})
  // typing animation script
  var typed=new Typed(".typing",{
    strings:["Web Developer","Programmer","Designer","Freelancer","blogger"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
  })
  var typed=new Typed(".typing2",{
    strings:["Web Developer","Programmer","Designer","Freelancer","blogger"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
  })

// 48931e1a2000deaae07067b55aea9ba9-us20
 // cf4ea0fc48.
