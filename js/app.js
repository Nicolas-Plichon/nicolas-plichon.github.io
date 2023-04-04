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