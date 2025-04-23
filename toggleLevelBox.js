// 프로필 접기/펼치기 기능
function toggleLevelBox() {
    const box = document.getElementById("levelStatusBox");
    const button = document.getElementById("toggleBtn");

    box.classList.toggle("collapsed");

    if (box.classList.contains("collapsed")) {
        button.textContent = "펼치기 ⬇";
    } else {
        button.textContent = "접기 ⬆";
    }
}