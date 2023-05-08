var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

document.querySelectorAll(".select").forEach((el)=> {
	el.addEventListener("click", function (e){
	  if (e.target && e.target.matches(".option")) {
		this.querySelector(".shown").innerHTML = e.target.innerHTML;
	  }
	  this.classList.toggle("collapsed");
	});
  }); 

