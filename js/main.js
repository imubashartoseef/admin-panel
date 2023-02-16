//  Sidebar Menu toggle Event
let sideBar = document.querySelector(".sidebar");
let brandImg = document.querySelector(".brand-img");
let sideBtn = document.querySelector("#toggle");
sideBtn.onclick = ()=>{
    // sideBar.classList.toggle("bx-chevron-left");
    if (sideBtn.getAttribute("class") == "bx bx-chevron-left"){
        sideBtn.setAttribute("class", "bx bx-chevron-right");
    }else {
        sideBtn.setAttribute("class", "bx bx-chevron-left");
    }

    if (brandImg.getAttribute("src") == "media/branding-close.png"){
        brandImg.setAttribute("src", "media/branding-open.png");
    }else {
        brandImg.setAttribute("src", "media/branding-close.png");
    }
    
    sideBar.classList.toggle("close");
}

// Side_bar Menu Click Events
document.querySelectorAll(".sideMenu a").forEach((trt)=>{trt.addEventListener("click",(e)=>{
    e.preventDefault();
    window.open(trt.getAttribute("href"),"_self");
})},this);

// Sidebar have-sub-menu
document.querySelectorAll(".sideMenu .have-sub a").forEach((trt)=>{trt.addEventListener("click",(e)=>{
    e.preventDefault();
    window.open(trt.getAttribute("href"),"_self");
})},this);
