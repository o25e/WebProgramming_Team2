// 학습 페이지 열기 함수
function openStudy(id) {
    const currentPage = decodeURIComponent(window.location.pathname.toLowerCase());

    if (currentPage.includes("level 1")) {
        window.open(`./Example/html_example${id}.html`, '_self');
    } else if (currentPage.includes("level 2")) {
        window.open(`./Example/css_example${id}.html`, '_self');
    } else if (currentPage.includes("level 3")) {
        window.open(`./Test/web_test${id}.html`, '_self');
    }
}