// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('nav ul');

mobileMenu.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// OPTIONAL: If you want the active link to update as you scroll:
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
  
  sections.forEach(section => {
    if (
      scrollPos >= section.offsetTop - section.offsetHeight * 0.2 &&
      scrollPos < section.offsetTop + section.offsetHeight - section.offsetHeight * 0.2
    ) {
      const currentId = section.getAttribute('id');
      document.querySelectorAll('.nav-list li a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentId)) {
          link.classList.add('active');
        }
      });
    }
  });
});

