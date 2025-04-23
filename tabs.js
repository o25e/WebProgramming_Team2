const ACTIVE_CLASSNAME = "active"; // hidden은 hint에 정의
// 탭 버튼, 코드창, 제목 가져오기 
const htmlTab = document.querySelector(".tabs > button:first-child");
const cssTab = document.querySelector(".tabs > button:last-child");
const htmlCode = document.getElementById("htmlCode");
const cssCode = document.getElementById("cssCode");
const htmlTitle = document.querySelector("#editor > h3:first-of-type");
const cssTitle = document.querySelector("#editor > h3:last-of-type");

// htmlTab 클릭 시 창 제목과 코드창 바꿔주는 함수
function htmlTabClick(event){
    if(!htmlTab.classList.contains(ACTIVE_CLASSNAME))
    {
        htmlTab.classList.add(ACTIVE_CLASSNAME);
        htmlCode.classList.remove(HIDDEN_CLASSNAME);
        htmlTitle.classList.remove(HIDDEN_CLASSNAME);
        cssTab.classList.remove(ACTIVE_CLASSNAME);
        cssCode.classList.add(HIDDEN_CLASSNAME);
        cssTitle.classList.add(HIDDEN_CLASSNAME);
    }
}
// cssTab 클릭 시 창 제목과 코드창 바꿔주는 함수
function cssTabClick(event){
    if(!cssTab.classList.contains(ACTIVE_CLASSNAME))
    {
        cssTab.classList.add(ACTIVE_CLASSNAME);
        cssCode.classList.remove(HIDDEN_CLASSNAME);
        cssTitle.classList.remove(HIDDEN_CLASSNAME);
        htmlTab.classList.remove(ACTIVE_CLASSNAME);
        htmlCode.classList.add(HIDDEN_CLASSNAME);
        htmlTitle.classList.add(HIDDEN_CLASSNAME);
    }
}
htmlTab.addEventListener("click", htmlTabClick);
cssTab.addEventListener("click", cssTabClick);