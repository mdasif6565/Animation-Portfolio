const btn = document.getElementById('btn');
const menu = document.getElementById('menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

btn.addEventListener('click', () => {
  // Toggle the menu visibility
  menu.classList.toggle('hidden');

  // Toggle between menu and close icons
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
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
 ScrollReveal().reveal('.box-shadow-tilte, ', { origin: 'right' });

//  ./ ScrollReveal


