const hintBtn = document.querySelector("#hintBtn");
const hintText = document.querySelector("#hintText");
const HIDDEN_CLASSNAME = "hidden";

function showHint(){
<<<<<<< HEAD
    hintText.classList.remove(HIDDEN_CLASSNAME);
=======
    if(hintText.classList.contains(HIDDEN_CLASSNAME))
        hintText.classList.remove(HIDDEN_CLASSNAME);
    else
        hintText.classList.add(HIDDEN_CLASSNAME);
>>>>>>> 3784881ae693863ab303265978838b2e5808a3cb
}

hintBtn.addEventListener("click", showHint);