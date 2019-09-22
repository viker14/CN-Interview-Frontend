var menu = document.getElementById('menu-btn');
menu.addEventListener('click', toggleMenu);
window.addEventListener("resize", menuDisplay)


function toggleMenu() {
    var x = document.getElementById("filters");
    
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
      
    }
}

function menuDisplay(){
    var x = document.getElementById("filters");
    if(document.documentElement.clientWidth >= 768 ){
        if (x.style.display === "none") {
            x.style.display = "block";
          }
    }
    
}
  