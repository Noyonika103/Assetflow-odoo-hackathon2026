/*=========================================================
    SIDEBAR CONTROLLER
=========================================================*/

const sidebar = document.getElementById("sidebar");

const menuLinks = document.querySelectorAll(".menu a");

const collapseBtn = document.getElementById("collapseBtn");

const mobileBtn = document.getElementById("mobileMenu");

const STORAGE_KEY = "assetflow-sidebar";

/*=========================================================
    ACTIVE PAGE
=========================================================*/

const currentPage = window.location.pathname.split("/").pop();

menuLinks.forEach(link => {

    const href = link.getAttribute("href");

    if (!href) return;

    if (href.includes(currentPage)) {

        link.classList.add("active");

    }

});

/*=========================================================
    COLLAPSE
=========================================================*/

function collapseSidebar(){

    sidebar.classList.toggle("collapsed");

    localStorage.setItem(

        STORAGE_KEY,

        sidebar.classList.contains("collapsed")

    );

}

/*=========================================================
    RESTORE
=========================================================*/

window.addEventListener("DOMContentLoaded",()=>{

    const collapsed =

        localStorage.getItem(STORAGE_KEY);

    if(collapsed==="true"){

        sidebar.classList.add("collapsed");

    }

});

/*=========================================================
    BUTTON
=========================================================*/

if(collapseBtn){

collapseBtn.addEventListener(

"click",

collapseSidebar

);

}

/*=========================================================
    MOBILE
=========================================================*/

if(mobileBtn){

mobileBtn.addEventListener(

"click",

()=>{

sidebar.classList.toggle("show");

}

);

}

/*=========================================================
    OUTSIDE CLICK
=========================================================*/

document.addEventListener("click",(e)=>{

if(

window.innerWidth<=1100 &&

!sidebar.contains(e.target) &&

mobileBtn &&

!mobileBtn.contains(e.target)

){

sidebar.classList.remove("show");

}

});

/*=========================================================
    ESC KEY
=========================================================*/

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

sidebar.classList.remove("show");

}

});

/*=========================================================
    RIPPLE EFFECT
=========================================================*/

menuLinks.forEach(link=>{

link.addEventListener("mouseenter",()=>{

link.style.transition=".25s";

});

});

/*=========================================================
    LOGOUT
=========================================================*/

const logoutBtn=document.querySelector(".logout");

if(logoutBtn){

logoutBtn.addEventListener("click",()=>{

const ok=confirm(

"Do you want to logout?"

);

if(ok){

localStorage.removeItem("token");

window.location.href="login.html";

}

});

}

/*=========================================================
    RESIZE
=========================================================*/

window.addEventListener("resize",()=>{

if(window.innerWidth>1100){

sidebar.classList.remove("show");

}

});

/*=========================================================
    PAGE TRANSITION
=========================================================*/

menuLinks.forEach(link=>{

link.addEventListener("click",()=>{

document.body.style.opacity=".7";

});

});

/*=========================================================
    END
=========================================================*/