/**
 * MOBILE NAV ADD AND REMOVE CLASS RESPONSIVE
 */
 let iconNavOpen = document.getElementById("icon-nav-open");
 let iconNavClose = document.getElementById("icon-nav-close");
 let navResponsive = document.getElementById("myTopnav");
 
 iconNavOpen.addEventListener("click", editNavOpen);
 iconNavClose.addEventListener("click", editNavClose);
 
 /**
  * OPEN
  */
 function editNavOpen() {
   if (navResponsive.className === "topnav") {
     navResponsive.className = "topnav responsive";
     iconNavOpen.style.display = "none";
     iconNavClose.style.display = "block";
   }
 };
 /**
  * CLOSE
  */
 function editNavClose() {
   if (navResponsive.className === "topnav responsive") {
     navResponsive.className = "topnav";
     iconNavOpen.style.display = "block";
     iconNavClose.style.display = "none";
   }
 };