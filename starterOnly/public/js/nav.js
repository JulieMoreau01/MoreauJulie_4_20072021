/**
 * MOBILE NAV ADD AND REMOVE CLASS RESPONSIVE
 */
 const iconNavOpen = document.getElementById("icon-nav-open");
 const iconNavClose = document.getElementById("icon-nav-close");
 const navResponsive = document.getElementById("myTopnav");
 
 iconNavOpen.addEventListener("click", editNavOpen);
 iconNavClose.addEventListener("click", editNavClose);
 
 function editNavOpen() {
   if (navResponsive.className === "topnav") {
     navResponsive.className = "topnav responsive";
     iconNavOpen.style.display = "none";
     iconNavClose.style.display = "block";
   }
 };
 
 function editNavClose() {
   if (navResponsive.className === "topnav responsive") {
     navResponsive.className = "topnav";
     iconNavOpen.style.display = "block";
     iconNavClose.style.display = "none";
   }
 };
 
 
 