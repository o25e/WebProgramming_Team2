//tabs.js에 htmlCode, cssCode변수 선언함
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
htmlCode.addEventListener("keydown", tabInTextarea);
cssCode.addEventListener("keydown", tabInTextarea);