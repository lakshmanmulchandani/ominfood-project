const menu = document.querySelector(".menu");
const head = document.querySelector("header");


menu.onclick = function() {
  if( head.style.height === "0vh"){
     head.style.height = "100vh";
  }
  
else {
   head.style.height = "0vh";
  }
}