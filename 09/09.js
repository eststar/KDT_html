document.addEventListener("DOMContentLoaded", ()=>{
    //1~100난수 생성
    let rdNum = Math.floor(Math.random()*100+1);
    console.log(rdNum);
    //노드 선택
    const imgNode = document.querySelector("#img1");
    const inNumNode = document.querySelector("#number1");
    const btNode = document.querySelector("#confirm1");

    let checklog = 'a';
    //난수 처음 맞추는지 판단후 이벤트에 따라 변경
    btNode.addEventListener("click", (e)=>{
        e.defaultPrevented();
        
        checklog="stopped event?";
        console.log(checklog);
        imgNode.setAttribute("src", "../img/good.png");
        // const inNum = inNumNode.value;
        // if(inNum != ''){
        //     if(inNum < rdNum){
        //         imgNode.setAttribute("src", "../img/up.png");
        //     } else if(inNum > rdNum){
        //         imgNode.setAttribute("src", "../img/down.png");
        //     } else{
        //         imgNode.setAttribute("src", "../img/good.png");

        //     }
        // }
    });
    console.log(checklog);
});