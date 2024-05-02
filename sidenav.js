function openNav() {
    document.getElementById("mySidenav").style.width = "160px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

document.getElementById("openNavButton").addEventListener("click", openNav);
