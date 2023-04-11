// Animation du de Home
const txtAnim = document.querySelector('.typeWriter');

new Typewriter(txtAnim, {
  loop: true,
  deleteSpeed: 40
})
.changeDelay(80)
.typeString('<span class="typeWrited" style="color: #EFD81D;">Javascript</span>')
.pauseFor(1000)
.deleteChars(10)
.typeString('<span class="typeWrited" style="color: #4CDAF7;">React</span>')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span class="typeWrited" style="color: #509941;">Node.js</span>')
.pauseFor(1000)
.deleteChars(8)
.typeString('<span style="font-weight: bold;">FullStack</span>')
.pauseFor(7000)
.changeDeleteSpeed(20)
.deleteChars(9)
.start()

// Changer le menu au scroll
function cleanClasses() {
  const navActive = document.querySelector('.nav-active');
  navActive.classList.add('nav-inactive');
  navActive.classList.remove('nav-active');
}

const navHome = document.getElementById('buttonHome');
const navAbout = document.getElementById('buttonAbout');
const navSkills = document.getElementById('buttonSkills');
const navProjects = document.getElementById('buttonProjects');
const navContact = document.getElementById('buttonContact');

window.addEventListener('scroll', () => {
  if (window.scrollY < 979) {
    cleanClasses();
    navHome.classList.remove('nav-inactive');
    navHome.classList.add('nav-active');
  } else if (window.scrollY >= 3916) {
    cleanClasses();
    navContact.classList.remove('nav-inactive');
    navContact.classList.add('nav-active');
  } else if (window.scrollY >= 2937) {
    cleanClasses();
    navProjects.classList.remove('nav-inactive');
    navProjects.classList.add('nav-active');
  } else if (window.scrollY >= 1958) {
    cleanClasses();
    navSkills.classList.remove('nav-inactive');
    navSkills.classList.add('nav-active');
  } else if (window.scrollY >= 979) {
    cleanClasses();
    navAbout.classList.remove('nav-inactive');
    navAbout.classList.add('nav-active');
  }});