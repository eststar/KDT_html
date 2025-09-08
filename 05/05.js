//로또 번호 생성
const lotto = () => {
    //0. 숫자 저장 배열
    let nums = [];
    //1. 숫자 7개 중복되지 않게 랜덤으로 생성

    while (nums.length < 7) {
        let n = Math.floor(Math.random() * 45) + 1;
        //기존 숫자 배열에 있는지 확인
        if(!nums.includes(n))
            nums.push(n);
    }

    // console.log(nums);   
    
    //보너스 배열
    const bonus = nums.pop();
    //배열을 오름차순으로 정렬
    nums.sort((a, b)=>a-b);

    // console.log(nums);   
    // console.log(bonus);   

    //2. 태그 생성
    //+도 태그 생성
    let tags = [];

    for(let el of nums){
        //각 배열 요소에 저장된 숫자 별로 innerHTML에 넣을 문자열 생성
        tags.push(`<span class="sp${Math.floor(el/10)}">${el}</span>`);
    }
    tags.push(`<span class="spplus">+</span>`);
    tags.push(`<span class="sp${Math.floor(bonus/10)}">${bonus}</span>`);

    // console.log(tags);
    

    //3. 화면에 보이도록
    //getElementById() 의 매개변수인 Id 는 id 그대로. 앞에 #, . 필요 없음
    //innerHTML 은 문자열 형식으로 내용 받음
    document.getElementById("spDiv").innerHTML = tags.join('');
    // document.getElementById("btDiv").innerHTML = `<input type="button" value="로또번호 생성" onclick="lotto()">`;
}