const hintBtn = document.querySelector("#hintBtn");
// const hintText = document.querySelector("#hintText");
const HIDDEN_CLASSNAME = "hidden";

// 힌트 보여주는 함수
 function showHint(){
    window.open('web_example1.html');
    localStorage.setItem(`level3Completed`, 'true');

    // if(hintText.classList.contains(HIDDEN_CLASSNAME))
    //     hintText.classList.remove(HIDDEN_CLASSNAME);
    // else
    //     hintText.classList.add(HIDDEN_CLASSNAME);
}
// 힌트 버튼 클릭하면 힌트 보여줌
hintBtn.addEventListener("click", showHint);