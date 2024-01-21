const s2 = document.querySelector(".s2");
const navList = document.querySelector(".menue");

s2.addEventListener("click", function() {
	navList.classList.toggle("active");
	s2.classList.toggle("click");
})

	window.onscroll = function() 
{scrollFunction()};
        
function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
	
	document.getElementById("menue").style.background = "skyblue";
  } 
  else {
	document.getElementById("menue").style.padding = "30px 10px";
   
  }
}
   