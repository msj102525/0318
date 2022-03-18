'use strict';


// 0~5까지만 콘솔에 출력
// -> 다시 0~4

let i=-1

// 함수선언식
// function autoGallery(){
//     i++;
//     console.log(`i -> ${i}`);
//     if(i>=4) i=-1;
// }


// 함수표현식
const autoGallery=function(){
    i++;
    console.log(`i -> ${i}`);
    if(i>=4) i=-1;
}


const lia=document.querySelectorAll('ul>li');



// 함수를 시간(1000 -> 1초) 후마다 실행
// setInterval(함수,시간);

setInterval(autoGallery,5000); 

// 즉시실행함수
(function(){
    autoGallery();
})();

// (()=>autoGallery())();