const viewWorkText = document.querySelector(".about-trail");
const fadeInAnims = [
    "animate__fadeInUp",
    "animate__delay-1s"
];
const fadeOutAnims = [
    "animate__fadeOutUp"
];

let isShowing = false;
setTimeout(() => isShowing = true, 2000);

window.addEventListener("scroll", () => {
    if (!isShowing) return;
    isShowing = false;

    fadeInAnims.forEach(anim => {
        viewWorkText.classList.remove(anim);
    });
    viewWorkText.classList.add(fadeOutAnims);
    console.log(viewWorkText)
});
