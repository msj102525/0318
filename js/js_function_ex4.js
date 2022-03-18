'use strict';


// 함수 선언식 -> 호이스팅

f1(200,400);

function f1(num1,num2){
    console.log(`num1 -> ${num1}, num2 -> ${num2}`);
    return num1+num2;
}
const f1ReturnVal=f1(100,300);


// 함수 표현식 -> 호이스팅X

// f2(200,400); // X

const f2=function(num1,num2){
    console.log(`num1 -> ${num1}, num2 -> ${num2}`);
    return num1+num2;
}
const f2ReturnVal=f2(200,400); // O


// arrow function

const f3=()=>console.log('f3함수 호출');
f3();

const f4=num=>console.log('f4함수 호출');
f4(1000);

const f5=(num1,num2)=>num1+num2;
const f5ReturnVal=f5(200,300);
console.log(f5ReturnVal);

console.clear();

const words = ['spray','limit','elite','exuberrant','destruction','present']

const result=words.filter(word => word.length > 8);
console.log(result);

const rs1=words.filter((el,idx,arr)=>{
    console.log(idx,el);
    if(idx>3){
        console.log(`idx -> ${idx}`,el);
        return el; // 배열에서 조건에 맞는 요소들을 필터링
    }
});
// words.forEach(function(element,index,array){
//     console.log(element,index,array);
// });
// words.forEach(function(element,index){
//     console.log(element,index);
// });
// words.forEach(function(element){
//     console.log(element);
// });


// 모두 true일 때만 true
// const isBellowThreshold=(currentValue) => currentValue < 40;

const array1=[1,30,39,29,10,13];
console.log(array1.every(function(el){
    return el<40;
}));

console.log(array1.every(el=>el<30)); // 조건이 하나라도 false면 false를 반환


// 하나이상 true면 true를 반환

const array = [1,1,3,1,5];
const even=(element)=>element %2 === 0;

// 함수선언식1
function even1(element){
        element%2===0;
    }

// 함수표현식2    
const even2=function(element){
        element%2===0;
    }

console.log(array.some(even));
console.log(array.some(even1));
console.log(array.some(even2));

// 요소가 없다면 undefinded
const array11=[5,12,8,130,44];
const found1=array11.find(element=>element>1000);
console.log(found1);

// 만족하는 요소가 없으면 -1 반환
const array12=[5,12,8,130,44];
const isLargenumber=(element)=>element>213;
console.log(array12.findIndex(isLargenumber));