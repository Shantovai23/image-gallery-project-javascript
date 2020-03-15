const current =document.querySelector("#current");
const imgs=document.querySelector(".imgs");
const img=document.querySelectorAll(".imgs img");

const opacity=0.4;

img[0].style.opacity=opacity;

imgs.addEventListener("click",imgclick);

function imgclick(x){
    img.forEach(img=>img.style.opacity=1);
    current.src=x.target.src;

    x.target.style.opacity=opacity;
}