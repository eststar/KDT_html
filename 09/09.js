document.addEventListener("DOMContentLoaded", () => {
    //DOM 로드 이후 수행

    //노드 가져오기
    const imgNode = document.querySelector("#img1");
    const inNumNode = document.querySelector("#number1");
    const btNode = document.querySelector("#confirm1");

    //숫자 입력창에 입력 바로 하도록 커서가 기본적으로 위치하도록 설정
    inNumNode.focus();

    //1~100난수 생성
    let rdNum; 
    let flag = false;
    
    //공통함수
    const initUI = (flagV, disV, btV, imgV) => {
        flag = flagV;
        inNumNode.style.display = disV;
        inNumNode.value = '';
        btNode.textContent = btV;
        imgNode.setAttribute("src", `../img/${imgV}.png`);
    };
    
    //난수 처음 맞추는지 판단후 이벤트에 따라 변경
    btNode.addEventListener("click", (e) => {
        //button 요소는 이벤트 발생후 다른 액션 설정이 없으면 form태그에 자체와 동기화? 자기 자신에 동기화?
        //form태그의 action에 아무 설정 없으면 내부의 버튼에 의해 정보가 보내져도 현재 페이지의 html 기본 상태로
        //돌아옴? 09.html을 다시 로드? 새로고침이랑 동일? 
        //위의 효과 막기 위해 event => event.defaultPrevented()로 button태그의 submit을 막음? 
        // button 클릭후 다른 추가적인 작업(위의 form태그 새로 고침) 막기 위해 이용
        e.preventDefault();

        //난수는 게임 도중에 맞추기 전까지는 생성후 값 유지해야함. flag 이용해서 유지 여부 결정
        if (!flag) {
            rdNum = Math.floor(Math.random() * 100 + 1);
            console.log(rdNum);
            
            //입력초기화 
            initUI(true, 'block', "확인", "what");  
        }

        //입력한 값 없으면 아무것도 안하기. 조건에 따라 입력한 값을 비교해서 작동
        if (inNumNode.value != '') {
            const inNum = parseInt(inNumNode.value);
            if (inNum < rdNum) {
                imgNode.setAttribute("src", `../img/up.png`);
            } else if (inNum > rdNum) {
                imgNode.setAttribute("src", `../img/down.png`);
            } else if (inNum === rdNum) {
                //숫자 맞추면 입력창 숨기고, 버튼만 남기기
                //width를 따로 설정하지 않았기 때문에 입력요소 숨기면 버튼이 빈자리 최대로 채움?
                initUI(false, 'none', "숫자를 다시 생성하세요", "good");
            }
        }
        //커서 다시 입력창에
        inNumNode.focus();
    });
});