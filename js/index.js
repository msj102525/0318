'use strict';

const gallery=document.querySelector('.gallery');
const galleryLi=document.querySelectorAll('.gallery>ul>li');
const arrBg=[];

let i=-1

function autoGallery(){
    i++;

    const gap=galleryLi[1].offsetLeft-galleryLi[0].offsetLeft;
    const goto=(i*-gap)+'px';
    console.log(`gap -> ${gap}, goto -> ${goto}`);

    gallery.style.left=goto;

    if(i>=galleryLi.length-1) i=-1;
}
setInterval(autoGallery,2000);
// (function(){
//     autoGallery();
// })();
(()=>{
    autoGallery();
})();


for(let i=0;i<galleryLi.length;i++){
    arrBg.push(`url(img/sec${i}.jpg) no-repeat 50%/cover`);
    galleryLi[i].style.background=arrBg[i];
}
