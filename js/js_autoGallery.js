'use strict';

const gallery=document.querySelector('.gallery');
const galleryLi=document.querySelectorAll('.gallery>ul>li');
const arrBg=[];

// galleryLi 각각 for,배열을 이용해서 배경이미지를 설정

for(let i=0;i<galleryLi.length;i++){
    // arrBg.push(`url(img/sec${i}.jpg) no-repeat 50%/cover`);
    arrBg[i]=`url(img/sec${i}.jpg) no-repeat 50%/cover`; 
    galleryLi[i].style.background=arrBg[i];
}
console.log(arrBg);

let i=-1;
function autoGallery(){
    i++;
    // 이동 기준 거리(하나의 li이 너비);
    const gap=galleryLi[1].offsetLeft-galleryLi[0].offsetLeft;
    // gallery가 이동
    const goto=(i*-gap)+'px';
    
    // console.log(`autoGallery -> i ${i}, gap ${gap}, goto ${goto}`);

    gallery.style.left=goto;
    gallery.style.transition='all 0.5s ease-in-out';


    // li의 마지막 번지를 보이고 다시 처음으로 돌아가서
    // 반복실행 조건문 설정

    if(i>=galleryLi.length-1) i=-1;
}
// 3초마다 실행
setInterval(autoGallery,2000);

// 즉시실행함수
(()=>{
    autoGallery();
})();