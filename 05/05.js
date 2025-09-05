//배열 표기법
let arr1 = [1, 2, 3]; // 리터럴 생성 대괄호로 묶어서

//array 생성자를 이용
let arr2 = new Array(1, 2, 3);

//배열크기
console.log(arr1);
console.log(`${arr1}`);
console.log(`${arr1.length}`);

//배열 요소 제거
console.log(arr2);
// arr2 = [];
arr2.length = 0;
console.log(arr2);

//배열 요소 추가
console.log(arr1);
arr1.push('가'); //배열의 마지막에 요소 추가
console.log(arr1);
let arr1pop = arr1.pop(); //배열의 마지막 요소 반환 및 삭제
console.log(arr1, typeof (arr1));
console.log(arr1pop, typeof (arr1pop));

//배열의 순회
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

// for(변수 in 배열) 변수가 배열의 index 순회함
for (let i in arr1) {
    console.log(arr1[i]);
}

//for(변수 of 배열) 변수가 배열 value들 순회
for (let item of arr1) {
    console.log(item);
}

//foreach 메소드 인수로 함수. 인자로 값, 인덱스 또는 값 만 
arr1.forEach((item, i) => {
    console.log(item, i);
});

//배열 map 메소드. 배열을 반환함
//배열만 map() 메소드 사용가능
// 배열.map(콜백 함수) 콜백함수에 배열의 각 요소들 받아서 함수처리하고 
// 반환해서 모인 값들로 기존 배열과 같은 크기의 새로운 배열 생성
// (인자) => {return 반환문;} 콜백함수
// 화살표 함수에서 인자가 하나면 ()괄호 생략 가능.
//{}중괄호 내 명령문이 return문 하나면 {} 중괄호 및 return 자체도 생략 가능
// 인자 => 반환문 //인자가 하나 내용도 return문 하나일때만
const arr3 = arr1.map((item) => {
    return item * 2;
});
console.log(arr3);

//위와 동일한 기능
const arr4 = arr1.map(item => item * 2);
console.log(arr4);

//콜백함수의 파라미터 2개이면 인덱스도 가져옴
const arr5 = arr1.map((item, i) => {
    return item * i;
});
console.log(arr5);

//filter()
//콜백함수의 처리에 맞는 요소들만 모아서 새 배열
const arr6 = arr1.filter((item) => {
    return item % 2 == 0;
});
console.log(arr6);

const arr7 = arr1.filter(item => item % 2 == 0);
console.log(arr7);

//map 함수
let arr8 = [];
for (let c of arr1) {
    arr8.push(c * 2);
}
console.log(arr8);

//filter 함수
let arr9 = [];
for (let c of arr1) {
    if (c % 2 == 0)
        arr9.push(c * 2);
}
console.log(arr9);