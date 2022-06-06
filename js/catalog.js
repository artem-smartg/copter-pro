function increase(){
    let input = document.getElementById('inp');
    let p = document.getElementById('one');
    p.innerHTML=input.value + ' ₴';
}

function uncheck(){
	let uncheck=document.getElementsByTagName('input');
	let form = document.querySelector('form');
	let paragraph = document.getElementById('one')

	for(let i=0;i<uncheck.length;i++){

		if(uncheck[i].type=='checkbox'){
			document.getElementById("myForm").reset();
		 	uncheck[i].checked=false;
		 	paragraph.innerHTML = "0 ₴";

		}
	}
} 








let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("acTive");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}