const hintBtn = document.querySelector("#hintBtn");
const hintText = document.querySelector("#hintText");
const HIDDEN_CLASSNAME = "hidden";

function showHint(){
    if(hintText.classList.contains(HIDDEN_CLASSNAME))
        hintText.classList.remove(HIDDEN_CLASSNAME);
    else
        hintText.classList.add(HIDDEN_CLASSNAME);
}

hintBtn.addEventListener("click", showHint);