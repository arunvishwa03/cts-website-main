window.onkeyup= function(e) {
if (e.keyCode === 34) {
    window.scrollBy(0,100)      
}
if(e.keyCode === 33){
    window.scrollBy(0,-100)
}
}

function onVisible(element, callback) {
new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
if(entry.intersectionRatio > 0) {
callback(element);
observer.disconnect();
}
});
}).observe(element);
if(!callback) return new Promise(r => callback=r);
}
document.addEventListener("scroll",
function(){
onVisible(document.querySelector(".section-one"), () => 
{
document.querySelector(".section-one>div").classList.add("section-one-para")
document.querySelector(".section-one>img").classList.add("section-one-img")
}
);
onVisible(document.querySelector(".section-two"), () => 
{
document.querySelector(".section-two>div").classList.add("section-two-para")
document.querySelector(".section-two>img").classList.add("section-two-img")
}
);
onVisible(document.querySelector(".section-three"), () => 
{
document.querySelector(".section-three>div").classList.add("section-three-para")
document.querySelector(".section-three>img").classList.add("section-three-img")
}
);


})


 