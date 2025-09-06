const Test1 = () => {
    console.log(`Test1`);
}

let arr = [`a`,`b`,`c`,`d`,`e`];
let text1 = 'test1text2';

console.log(arr);
console.log(text1);

let splitText = text1.split('').reverse().join("");

console.log(splitText + `${arr[0]}`);

for(let c of arr){
    console.log(c);
}

for(let i in arr){
    console.log(i);
}

arr.push("push");

console.log(arr);
console.log(arr.length);
arr.pop();
console.log(arr);

let arr1 = arr.map((el)=>{
    return el+3;
});

console.log(arr1);