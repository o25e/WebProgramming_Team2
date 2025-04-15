const hintBtn = document.querySelector("#hintBtn");
const hintText = document.querySelector("#hintText");
const HIDDEN_CLASSNAME = "hidden";

function showHint(){
    hintText.classList.remove(HIDDEN_CLASSNAME);
}

hintBtn.addEventListener("click", showHint);