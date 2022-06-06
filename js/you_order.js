

$(".input__counter").on('input', function(e){
  this.value = this.value.replace(/[^0-9\.]/g, '');
});



// let promo = document.getElementById("prominp");
// let prBut = document.getElementById("prombutton");
// let promoContent = document.getElementById('promo__content');

// function viewDiv(){
//   promoContent.style.display = "block";
// };


// let prBut = document.getElementById("prombutton");
// let promo = document.getElementById("prominp");

// window.onclick = function(event){
// 	if (event.target == prBut) {
// 		prBut.style.display = "none";
// 		promo.style.display = "none";
// 	}
// 	else{
// 		prBut.style.display = "display";
// 		promo.style.display = "display";
// 	}
// }



function openbox(id){

	let img = document.getElementById('promoImg');
    display = document.getElementById(id).style.display;

    if(display=='none'){
       document.getElementById(id).style.display='block';
       img.style.transform = 'rotate(180deg)';
    }else{
       document.getElementById(id).style.display='none';
       img.style.transform = 'rotate(0deg)';
    }

}
















