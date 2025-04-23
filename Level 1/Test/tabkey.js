// tabs.js에 htmlCode, cssCode변수 선언함
// 코드창에서 탭 키 먹히게 하는 함수
function tabInTextarea(event) {
    if (event.keyCode === 9) {
        event.preventDefault();

        let v = this.value;
        let s = this.selectionStart;
        let e = this.selectionEnd;
        this.value = v.substring(0, s) + '\t' + v.substring(e);
        this.selectionStart = this.selectionEnd = s + 1;
    }
}
// 이벤트 리스너 추가
htmlCode.addEventListener("keydown", tabInTextarea);
cssCode.addEventListener("keydown", tabInTextarea);