function toggleMenu() {
   
    let menuList = document.getElementById("menuList");
    if (menuList.style.maxHeight === "0px" || menuList.style.maxHeight === "") {
        menuList.style.maxHeight = "500px";  // Show menu
    } else {
        menuList.style.maxHeight = "0px";  // Hide menu
    }
}
