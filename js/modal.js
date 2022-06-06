
$(document).ready(function() {
    $("#phone").mask("+38 (099) 999-99-99");
});


$(document).ready(function(){   
    $("#contactsForm").inputmask("email")
});



let modal = document.getElementById('myModal');
let myBtn = document.getElementsByClassName('myBtn');
let close = document.getElementsByClassName('close')[0];


for (let i = 0; i < myBtn.length; i++) {
  myBtn[i].addEventListener('click', function() {
    openModalWindow();
  })
}

close.addEventListener('click', function() {
  closeModalWindow();
})


function openModalWindow() {
  modal.style.display = "block";
  document.body.style.overflow = 'hidden';
}


function closeModalWindow() {
  modal.style.display = "none";
  document.body.style.overflow = 'auto';
}

window.onclick = function(event){
	if (event.target == modal) {
		modal.style.display = "none";
		document.body.style.overflow = 'auto';
	}
}







