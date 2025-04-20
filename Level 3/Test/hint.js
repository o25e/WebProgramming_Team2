const hintBtn = document.querySelector("#hintBtn");
// const hintText = document.querySelector("#hintText");
const HIDDEN_CLASSNAME = "hidden";

function showHint(){
    // 힌트 클릭 시 실습창 예제로 연결
    window.open("../Test/web_example1.html", "_blank");
    // if(hintText.classList.contains(HIDDEN_CLASSNAME))
    //     hintText.classList.remove(HIDDEN_CLASSNAME);
    // else
    //     hintText.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(`level3Completed`, 'true');  // 힌트보면 레벨3 완료
}

hintBtn.addEventListener("click", showHint);