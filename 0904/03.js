//기존 방식
// function Hello(n){
//     if(n == '1')
//         alert("안녕하세요!");
//     else
//         alert('반갑습니다.');

//     console.log('콘솔출력입니다.'); /* 디버깅시 사용 가능 */
// }

//const 상수
//화살표 함수 결과 값은 const에
//호출시 함수이름 필요 없이 상수변수 이름 바로 사용

const Hello = (n) => {
    // ==, === 비교. ===는 값, 타입 모두 비교
    if (n === '1')
        alert("안녕하세요!");
    else
        alert('반갑습니다.');

    console.log('콘솔출력입니다.');
}

//자바 스크립트의 변수는 기본 자동으로 값에 따라 데이터 타입 적용.
const CheckVar = () => {
    // x = 10; //미리 선언 안해도 아래쪽에서 끌어와서 적용. 호이스팅

    // var x; //var은 사용 안함
    let x; //let은 호이스팅 되고 있지만 TDZ에 들어가서 선언전에는 참조 불가
    x = `test`;

    const y = `20`; //상수. 초기화 필요
    // y = 40;
    // console.log('x =' + x);
    console.log(`x = ${typeof(x)}, y = ${typeof(y)}`); //`` 사용시 내부에 ${변수} 형태로 문자열 내에서 바로 변수 출력 가능
    console.log(`문자열 ${x}은 문자인가요? ${isNaN(x) ? `예` : `아니오`}`);
    console.log(`문자열 ${y}은 숫자인가요? ${isNaN(y) ? `예` : `아니오`}`);

}