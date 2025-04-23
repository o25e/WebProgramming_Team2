// 코드창의 코드를 불러와 결과창에 출력하는 함수, 이벤트 핸들러
function updateOutput() {
    let html = document.getElementById("htmlCode").value;
    let css = document.getElementById("cssCode").value;
    let iframe = document.getElementById("outputFrame").contentWindow.document;

    iframe.open();
    iframe.write(`<style>${css}</style> ${html}`);
    iframe.close();
}

window.onload = updateOutput; // 윈도우 로드되면 함수 실행