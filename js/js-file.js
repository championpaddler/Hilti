
window.onload = function() {
  var btn = document.getElementById("burger");
   var menu = document.getElementById("mobile_menu");
  x = 0;
   btn.addEventListener("click", function (){
      menu.style.display = "block";
      console.log(x);

      if (x = 0) {
        alert(x);
          x-=1;
      } else {
        alert(x);
          x+=1;
      }
  }, false);
};
