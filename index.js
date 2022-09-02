

/* ===========================================
Responsive Navbar
======================================= */

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener('click',()=>{
  headerElem.classList.toggle('active');
})

// creating a portfolio tabed components


const heroSection = document.querySelector(".section-hero");


const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click",(e)=>{
   const p_btn_clicked = e.target;
   console.log(p_btn_clicked);

   if (!p_btn_clicked.classList.contains("p-btn")) return;

   p_btn.forEach((curElem)=>curElem.classList.remove("p-btn-active"));

   p_btn_clicked.classList.add("p-btn-active");

   // to find the number in data atribute
   const btn_num = p_btn_clicked.dataset.btnNum;
   console.log(btn_num);

   const img_active = document.querySelectorAll ( `.p-btn--${btn_num}`)
   p_img_elem.forEach((curElem)=>curElem.classList.add("p-image-not-active"));

   img_active.forEach((curElem)=>curElem.classList.remove("p-image-not-active"));
});


/* ===========================================
Swiper/Testimonial JS Code Section
======================================= */
   const swiper = new Swiper(".mySwiper", {
   slidesPerView: 2,
   spaceBetween: 30,
   autoplay:{
     delay:2500,
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
 });
 const myJsMedia = (widthSize)=>{
     if (widthSize.matches){
      new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        
      });
     } else{
        new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
       
      });
     }
 }
 const widthSize = window.matchMedia(" (max-width:780px)");
 // Call Listener Function At Run Time
 myJsMedia(widthSize);
 // Attach listener function on state change
 widthSize.addEventListener('change' ,myJsMedia); 


     /* ===========================================
Creating Responsive Nav Bar
======================================= */

// const mobile_nav = document.querySelector(".mobile-navbar-btn");
// const headerElem = document.querySelector(".header");

// mobile_nav.addEventListener('click',()=>{
//   headerElem.classList.toggle('active');
// })

    /* ===========================================
Scroll To Top Code Section
======================================= */

 const footerElement = document.querySelector(".section-footer");

 const scrollElement = document.createElement("div");
 scrollElement.classList.add("scrollTop-Style");

 scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

 footerElement.after(scrollElement);

 const scrollTop =() =>{
     heroSection.scrollIntoView({behavior:"smooth"});
 }
 scrollElement.addEventListener("click", scrollTop);


 /* ===========================================
Sticky Nav Bar Code Section
======================================= */

const observor = new IntersectionObserver (
  (entries)=>{
  const ent = entries[0];
  console.log(ent);
  !ent.isIntersecting
  ? document.body.classList.add("sticky")
  : document.body.classList.remove("sticky");

},
{
  root: null,
  threshold:0
}
);

observor.observe(heroSection);

 


const workSection = document.querySelector(".section-work-data");

const workObservor = new IntersectionObserver (
  (entries , observor)=>{
  const [entry] = entries;
  console.log(entry);
  if(!entry.isIntersecting) return;

  /* ===========================================
Animate Number Counter Code Section
======================================= */ 

 const counterNum = document.querySelectorAll(".counter-numbers");

 const speed = 200;

 counterNum.forEach((curElem)=>{
  const updateNumber = ()=>{
    const targetNumber = parseInt(curElem.dataset.number);
    const initialNumber = parseInt(curElem.innerText);
    console.log(initialNumber);

    const incrementNumber = Math.trunc(targetNumber/speed);
    console.log(incrementNumber);

    if (initialNumber <targetNumber){
      curElem.innerText = `${initialNumber + incrementNumber}+`;

      setTimeout(updateNumber, 10);
    }
  } 
  updateNumber();
 });

 observor.unobserve(workSection);
  
},{
  root:null,
  threshold:0,
});
workObservor.observe(workSection);