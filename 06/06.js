//웹페이지가 로드된 후에 DOM 생성하므로
//웹페이지 로드도 확인해야함
//노드를 가져오려면 DOM 생성 필요
//이벤트 발생하고 있는지 계속 확인 addEventListener()
//"DOMContentLoaded" 웹페이지의 로드 확인
//그후 넣은 함수에 따라 작업
document.addEventListener('DOMContentLoaded', ()=>{
    //노드 가져오기
    //주사위 이미지 가져오기. #diceDiv 아래의 img 태그
    //querySelector로 한개 노드 가져오기
    const diceImg = document.querySelector('#diceDiv > img');

    //버튼 가져오기. #btDiv 아래의 button 태그
    const bt = document.querySelector("#btDiv > button");

    //버튼이 click 되는 이벤트 감지.
    //Math.floor 버림, Math.random() 0부터 1까지의 랜덤 숫자 생성
    bt.addEventListener('click', ()=>{
        let n = Math.floor(Math.random()*6 + 1); //1~6
        diceImg.setAttribute('src', `../img/${n}.png`); //선택한 노드의 속성 추가.
        diceImg.setAttribute('alt', `${n}`); //내부적으로 표시되는 텍스트
    });
});