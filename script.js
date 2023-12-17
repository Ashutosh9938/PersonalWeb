function toggleMenu() {
    let menu = document.querySelector(".menu-links");
    let icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  function scrollToExprience() {
    let experienceSection = document.querySelector('#experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  function scrollToProjects() {
    let projectsSection = document.querySelector('#contact');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }