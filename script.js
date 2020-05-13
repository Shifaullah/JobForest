
		// pre loader
var loader = document.querySelector(".loader-container");
var x = setInterval(load,1000);
var z=0;
function load(){
	z++;
	if(z==5){
		document.querySelector(".loader-text").style.opacity = '0';
	}
	if(z==6){
		clearInterval(x);
		loader.style.opacity = "0";
		loader.style.marginTop= "-100vh";
	}
}


///////////////////////////   testimonial ///////////////////////////

var slider = document.querySelector(".testimonial");
var xx = 0;
function slide(){
		slider.style.marginLeft = `-${xx}px`;
	xx = xx + 325;
	if(xx == 325*8){
		xx = 0;
	}
}
setInterval(slide,2000);
// ------------------ jobs cards-----------------------//
 var cardUp = document.querySelectorAll('.upper');
 var cardDown = document.querySelectorAll('.down');
var width = window.innerWidth;
 document.body.onload = classes;
 document.body.onresize = classes;
function classes (){
	console.log('im ak khan');
	if(width < 450){
	for(var i = 0; i < cardUp.length;i++){
		cardUp[i].classList.remove("col-3");
		cardDown[i].classList.remove("col-9");
	}
		
} 
}
// ------------------ slider ----------
 var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });



 // 33333333333333
  AOS.init({
  	duration:1000
  });