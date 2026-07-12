/* =====================================================
   AssetFlow Dashboard
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    animateCards();

    animateNumbers();

    updateGreeting();

});

/* ===========================================
   Animate Cards
=========================================== */

function animateCards(){

    const cards=document.querySelectorAll(".card");

    cards.forEach((card,index)=>{

        card.style.opacity="0";

        card.style.transform="translateY(40px)";

        setTimeout(()=>{

            card.style.transition=".5s ease";

            card.style.opacity="1";

            card.style.transform="translateY(0)";

        },index*120);

    });

}

/* ===========================================
   Counter Animation
=========================================== */

function animateNumbers(){

    const counters=document.querySelectorAll("h2");

    counters.forEach(counter=>{

        const target=parseInt(counter.innerText);

        if(isNaN(target)) return;

        let count=0;

        const speed=target/50;

        const update=()=>{

            count+=speed;

            if(count<target){

                counter.innerText=Math.floor(count);

                requestAnimationFrame(update);

            }else{

                counter.innerText=target;

            }

        };

        update();

    });

}

/* ===========================================
   Greeting
=========================================== */

function updateGreeting(){

    const title=document.querySelector(".page-subtitle");

    if(!title) return;

    const hour=new Date().getHours();

    let greeting="Welcome";

    if(hour<12){

        greeting="Good Morning";

    }

    else if(hour<17){

        greeting="Good Afternoon";

    }

    else{

        greeting="Good Evening";

    }

    title.innerHTML=`${greeting}, John 👋`;

}

/* ===========================================
   Quick Buttons
=========================================== */

const quickBtns=document.querySelectorAll(".quick-btn");

quickBtns.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-8px) scale(1.03)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0)";

    });

});

/* ===========================================
   Table Hover
=========================================== */

const rows=document.querySelectorAll("tbody tr");

rows.forEach(row=>{

    row.addEventListener("mouseenter",()=>{

        row.style.background="#F4FAFF";

    });

    row.addEventListener("mouseleave",()=>{

        row.style.background="transparent";

    });

});