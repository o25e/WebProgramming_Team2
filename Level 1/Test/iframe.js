function updateOutput() {
    let html = document.getElementById("htmlCode").value;
    let css = document.getElementById("cssCode").value;
    let iframe = document.getElementById("outputFrame").contentWindow.document;

    iframe.open();
    iframe.write(`<style>${css}</style> ${html}`);
    iframe.close();
}

<<<<<<< HEAD
window.onload = updateOutput;
=======
window.onload = updateOutput; //이벤트 리스너
>>>>>>> 3784881ae693863ab303265978838b2e5808a3cb
