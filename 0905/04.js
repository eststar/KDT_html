//회문
const check1 = () => {
    //0. 버튼의 submit 기능을 없앰
    // e.preventDefault();
    //1. 사용자가 입력한 내용을 가져오기

    //input 요소는 value로 가져오고 내보내야함
    const inputV = document.getElementById(`txt1`).value; 
    //getElementById id로 선택해서 가져옴

    //2. 사용자가 입력한 문자열을 뒤집기
    // console.log(typeof(inputV));
    // console.log(inputV.length);
    // console.log(inputV[0]);

    let inputVT = inputV.replaceAll(' ', ''); //특정 문자열 바꾸는 메서드, 공백 제거
    let resultV = '';
    // for(let i = inputVT.length-1; i >= 0; i--){
    //     // console.log(inputVT[i]);
    //     // resultV = resultV + inputVT[i];
    //     resultV += inputVT[i];
    // }

    resultV = inputVT.split('').reverse().join(''); //문자열을 쪼개서 배열처럼 만들고 뒤집고 다시 합쳐서 문자열 생성
    // console.log(resultV);

    //3. 사용자가 입력한 문자열과 뒤집은 문자열이 같은지 비교
    //3-1. 결과를 input 요소에 출력
    //.value는 요소의 값만 사용
    if (inputVT == resultV)
        document.getElementById('txt2').value = `"${inputVT}"는 회문입니다.`;
    else
        document.getElementById('txt2').value = `"${inputVT}"는 회문이 아닙니다.`;


    // document.getElementById('txt2').value = resultV;

    //결과를 div 요소에 출력
    //일반적 tag요소인 div에 출력하는것이기 때문에 value가 아니라 innerHTML로 가져옴
    //.innerHTML 이용하면 html을 포함해서 가져오거나 JS에서 html tag 작성 및 속성변경까지 가능
    document.getElementById('msg').innerHTML = `"<span>${inputVT}</span>"는 
        ${(inputVT == resultV) ? "회문입니다" : "회문이 아닙니다."}`;
}

//숫자합계
const check2 = () => {
    //사용자의 입력 문자열 가져오기
    const inputStr = document.getElementById('txt1').value;

    //문자열 내의 숫자 인식해서 쪼개서 각각 더하기
    let sum = 0;

    // for(let i = 0 ; i < inputStr.length; i++) {
    //     if(!isNaN(inputStr[i]))
    //         sum += parseInt(inputStr[i]);
    // }

    // for( 변수 of 배열, 문자열 등 대부분의 iterable 객체)
    for (let c of inputStr) {
        if (!isNaN(c)) //isNaN() 문자열이면 true 아니면 false
            sum += parseInt(c); // parseInt() 문자열을 Int로
    }

    //합계후 출력

    document.getElementById('txt2').value = `합계 = ${sum}`
    document.getElementById('msg').innerHTML = `합계 =&nbsp;<span>${sum}</span>`;
    //span 때문에 앞의 공백 안먹히면 &nbsp; 로 공백 한칸

}

//취소처리
const check3 = () => {
    document.getElementById('txt1').value = '';
    document.getElementById('txt2').value = '';
    document.getElementById('msg').innerHTML = '';

    document.getElementById('txt1').focus();
}