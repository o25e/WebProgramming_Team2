// 학습 페이지 열기 함수
function openStudy(id) {
    const currentPage = decodeURIComponent(window.location.pathname.toLowerCase());

    if (currentPage.includes("level 2") && completedLevel1 < 10) {
        alert("레벨 1을 모두 완료해야 레벨 2를 시작할 수 있어요!");
        return;
    }
    if (currentPage.includes("level 3") && (completedLevel1 < 10 || completedLevel2 < 10)) {
        alert("레벨 1과 2를 모두 완료해야 레벨 3을 시작할 수 있어요!");
        return;
    }

    if (currentPage.includes("level 1")) {
        window.open(`./Example/html_example${id}.html`, '_self');
    } else if (currentPage.includes("level 2")) {
        window.open(`./Example/css_example${id}.html`, '_self');
    } else if (currentPage.includes("level 3")) {
        window.open(`./Test/web_test${id}.html`, '_self');
    }
    

}