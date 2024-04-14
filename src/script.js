console.log("let's do some JavaScript");

let burger = document.querySelector("#burger");
let cross = document.getElementById("cross");
let slide = document.getElementById("slide");
let bool = true;


burger.addEventListener("click", () => {

    slide.style.display = "block";
    slide.style.transform = "translateX(0)";
    bool = false;
})


cross.addEventListener("click", () => {

    slide.style.display = "none";
    slide.style.transform = "translateX(-100%)";
    bool = true;

});

window.addEventListener("scroll", () => {
if (!bool) {

    console.log(bool + 'is working');
    
    cross.click();
}
});









const initialTranslateLTR = -48 * 4;
const initialTranslateRTL = 36 * 4;

function setupIntersectionObserver(element, isLTR, speed) {
    const intersectionCallback = (entries) => {


        const isIntersecting = entries[0].isIntersecting;

        if (isIntersecting) {
            document.addEventListener('scroll', scrollHandler)
        } else {
            document.removeEventListener('scroll', scrollHandler)
        }


    }
    const intersectionObserver = new IntersectionObserver(intersectionCallback)



    intersectionObserver.observe(element);

    function scrollHandler() {


        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;

        let totalTranslate = 0;
        if (isLTR) {
            totalTranslate = initialTranslateLTR + translateX;
        } else {
            totalTranslate = -(initialTranslateRTL + translateX);
        }

        element.style.transform = `translateX(${totalTranslate}px)`;
    }
}

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const line4 = document.getElementById("line-4");

setupIntersectionObserver(line1, true, .15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);
setupIntersectionObserver(line4, false, 0.8);







let flow = document.querySelector('#flow');
let title = document.querySelector('#change');
let index = 0; // Declare index outside the setInterval function
let step3 = document.querySelector('#step3');
let rocket = document.querySelector('#rocket');







console.log(title.innerHTML);



let startFlow = () => {
    let i = 0;
    // flow.style.width = i;

    let interval = setInterval(() => {
        if (i <= 100) {
            flow.style.width = `${i}%`; // Fix the placement of %
            if (i >= 0) {
                title.innerHTML = `Download version 1.12.110`;
            }
            if (i > 40) {
                title.innerHTML = `extracting App...`;
            }
            if (i > 70) {
                title.innerHTML = `Installing application...`;
            }
            i++;
        }
        else {
            console.log("interval is cleared...");
            title.innerHTML = `Installed!`;

            clearInterval(interval);
        }
    }, 50);
};

const newCallback =  (enteries)=>{
    const isIntersecting = enteries[0].isIntersecting;

    if (isIntersecting) {
        console.log("intersecting");


        startFlow();
        rocket.classList.add("rocket");
    } else {
        
        rocket.classList.remove("rocket");
        console.log('not intersecting');

    }
};

const observer = new IntersectionObserver(newCallback);

observer.observe(step3);



let hero = document.querySelector("#hero-container");
let arrow = document.querySelector("#arrow");
let icon = document.querySelector("#Tshow");

const arrCallback = (entries) => {
  const isIntersecting = entries[0].isIntersecting;

  if (isIntersecting) {
    arrow.style.transform = "translateX(4rem)";
  } else {
    arrow.style.transform = "translateX(-2rem)";
  }
};

const observer2 = new IntersectionObserver(arrCallback);
observer2.observe(hero);
