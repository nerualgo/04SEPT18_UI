function navToggle() 
{
    alert("TEST");

}

function openNav() {
    document.getElementById("mySidenav").style.width = "375px";
    document.getElementById("nav").style.width = "420px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("nav").style.width = "50px";
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}