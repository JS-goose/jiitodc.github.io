var title = document.getElementById('head-text');

var typewriter = new Typewriter(title, {
    loop: true
});

typewriter.typeString('JODC')
    .pauseFor(2500)
    .deleteAll()
    .typeString('JIIT Open Dev Circle ')

    .start();
   
const closeButton = document.getElementById("close");
const topNav = document.querySelector('.topnav');

closeButton.addEventListener("mouseenter", function () {
    topNav.style.visibility = "visible";
});

closeButton.addEventListener("mouseleave", () => (topNav.style.visibility = "hidden"));