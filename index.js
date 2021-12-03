var audio1=new Audio("music/jugnu.mp3");
var audio2=new Audio("music/grateful.mp3");
var audio3=new Audio("music/cold.mp3");
var audio4=new Audio("music/universe.mp3");
var audio5=new Audio("music/shiver.mp3");


for(var i=0;i<document.querySelectorAll(".play").length;i++){
  document.querySelectorAll(".play")[i].addEventListener("click",handleclick);
  document.querySelectorAll(".pause")[i].addEventListener("click",pausesong);


    function handleclick(){

      if (this.innerHTML==="play1"){

        audio1.play();
        audio2.pause();
        audio3.pause();
        audio4.pause();
        audio5.pause();



      }
      else if (this.innerHTML==="play2") {


        audio2.play();
        audio1.pause();
        audio3.pause();
        audio4.pause();
        audio5.pause();

      }
      else if (this.innerHTML==="play3") {


        audio1.pause();
        audio2.pause();
        audio4.pause();
        audio5.pause();
        audio3.play();
      }
      else if (this.innerHTML==="play4") {
        audio1.pause();
        audio2.pause();
        audio3.pause();
        audio5.pause();
        audio4.play();
      }
      else if (this.innerHTML==="play5") {
        audio1.pause();
        audio2.pause();
        audio3.pause();
        audio4.pause();
        audio5.play();
      }
    }
    function pausesong(){
      if (this.innerHTML==="pause1"){

        audio1.pause();



      }
      else if (this.innerHTML==="pause2") {


        audio2.pause();

      }
      else if (this.innerHTML==="pause3") {



        audio3.pause();
      }
      else if (this.innerHTML==="pause4") {

        audio4.pause();
      }
      else if (this.innerHTML==="pause5") {

        audio5.pause();
      }
    }
}
