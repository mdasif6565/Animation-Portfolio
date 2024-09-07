let mobile_icon= document.getElementById("btn");
let mobile_menu= document.getElementById("menu");


mobile_icon.addEventListener("click",function(){
    mobile_menu.classList.toggle("hidden");
});


// selecting all a element on the page
const links = document.querySelectorAll('a');

// adding a click event on all elements 
links.forEach((link) => {
  link.addEventListener('click', (e) => {
    // if we click first thing is deleting the active class from all link
    links.forEach((link) => {
      link.classList.remove('active')
    })
    // then in the end add the active class only in the correct one
    e.target.classList.add('active')
  })
});

document.addEventListener('scroll', function() {

  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link-desktop');

  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute('id');
    }
  });

   navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    
    if (href && href.includes(currentSection)) {      
      link.classList.add('active', );
    }
  });

});


let typed= new Typed(".text", {
  strings:["Frontend Developer", "Frontend Developer","Frontend Developer"],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 200,
  loop: true
});

let typed1= new Typed(".text2", {
  strings:["Frontend Developer", "Frontend Developer","Frontend Developer"],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 200,
  loop: true
});


//  ScrollReveal

ScrollReveal({ 
  reset: true,
  distance:'80px',
  duration: 2000,
  delay: 200,
 });

 ScrollReveal().reveal('.home-title, .section-title, .experience-title1, .section-heading', { origin: 'top' });
 ScrollReveal().reveal('.img-title, .about-title,  .portfolio-title, .experience-title2, .testomonial-title, .contact-form', { origin: 'bottom' });
 ScrollReveal().reveal('.nickname, .about-img-title, .mitter', { origin: 'left' });
 ScrollReveal().reveal('.box-shadow-tilte,', { origin: 'right' });

//  ./ ScrollReveal