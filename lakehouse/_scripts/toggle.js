// JavaScript Document

function toggle_captions() {
 var ele = document.getElementById("captions");
 var text = document.getElementById("displayText");
 if(ele.style.display == "block") {
      ele.style.display = "none";
  text.innerHTML = "Show Captions";
   }
 else {
  ele.style.display = "block";
  text.innerHTML = "Hide Captions";
 }
}


function toggle_size() {
 var ele2 = document.getElementById("size");
 var text2 = document.getElementById("displayTextSize");
 if(ele2.style.width == "100%") {
      ele2.style.width = "2164px";
	  ele2.style.height = "1069px";
	  document.getElementById("captions_pic").style.width = "2164px";
	  document.getElementById("captions_pic").style.height = "1069px";
	  
	  document.getElementById("picture_pic").style.width = "2164px";
	  document.getElementById("picture_pic").style.height = "1069px";	  
  text2.innerHTML = "Fit screen";
   }
 else {
  ele2.style.width = "100%";
  ele2.style.height = "100%";

	  document.getElementById("captions_pic").style.width = "100%";
	  document.getElementById("captions_pic").style.height = "100%";

	  
	  document.getElementById("picture_pic").style.width = "100%";
	  document.getElementById("picture_pic").style.height = "100%";
  
  text2.innerHTML = "View full-size";
 }
}