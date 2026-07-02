/* ============================================
   HOOMIE'S ABOUT PAGE
   PART 5
   Premium Animations
============================================= */

/* ============================================
        Scroll Reveal Animation
============================================= */

const revealElements = document.querySelectorAll(
    ".reveal, .story-text, .story-image, .impact-content, .impact-image, .vision-box, .founder-image, .founder-content"
);

const revealObserver = new IntersectionObserver(

    (entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("active");

            }

        });

    },

    {

        threshold:0.2

    }

);

revealElements.forEach(el=>{

    revealObserver.observe(el);

});


/* ============================================
        Counter Animation
============================================= */

const counters=document.querySelectorAll(".counter h3");

const counterObserver=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let current=0;

const increment=Math.ceil(target/150);

const update=()=>{

current+=increment;

if(current>=target){

counter.innerText=target.toLocaleString()+"+";

}
else{

counter.innerText=current.toLocaleString();

requestAnimationFrame(update);

}

};

update();

counterObserver.unobserve(counter);

}

});

},

{

threshold:.5

}

);

counters.forEach(counter=>{

counterObserver.observe(counter);

});


/* ============================================
      Hero Parallax
============================================= */

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

const offset=window.pageYOffset;

hero.style.backgroundPositionY=offset*0.45+"px";

});


/* ============================================
      Smooth Scroll
============================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});


/* ============================================
      Navbar Active Link
      (Works only if navbar exists)
============================================= */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


/* ============================================
      Floating Nature Card
============================================= */

const nature=document.querySelector(".nature-card");

if(nature){

window.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.pageX)/40;

const y=(window.innerHeight/2-e.pageY)/40;

nature.style.transform=

`rotateY(${x}deg) rotateX(${y}deg)`;

});

}


/* ============================================
      Founder Image Tilt
============================================= */

const founder=document.querySelector(".founder-image");

if(founder){

founder.addEventListener("mousemove",(e)=>{

const rect=founder.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/25;

const rotateX=(rect.height/2-y)/25;

founder.style.transform=

`perspective(1000px)
 rotateX(${rotateX}deg)
 rotateY(${rotateY}deg)`;

});

founder.addEventListener("mouseleave",()=>{

founder.style.transform=

"perspective(1000px) rotateX(0deg) rotateY(0deg)";

});

}


/* ============================================
      Footer Button Ripple
============================================= */

const buttons=document.querySelectorAll(".shop-btn,.hero-btn");

buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transition=".35s";

});

});


/* ============================================
      Current Year
============================================= */

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}


/* ============================================
      Loading Animation
============================================= */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});


/* ============================================
      Console Signature 🙂
============================================= */

console.log(
"%cWelcome to HOOMIE'S 🌿",
"color:#355E3B;font-size:20px;font-weight:bold;"
);