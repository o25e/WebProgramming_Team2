// 진행도 업데이트 함수 전체
let completedLevel1 = 0;
let completedLevel2 = 0;
let completedLevel3 = 0;

function updateProgress(pageLevel = 1) {
    const progressBar = document.getElementById('progress-bar');
    const levelupPercent = document.getElementById('levelup-percent');

    completedLevel1 = 0;
    completedLevel2 = 0;
    completedLevel3 = 0;

    // Level 1 예제 완료 체크 및 표시
    for (let i = 1; i <= 10; i++) {
        if (localStorage.getItem(`quizCompleted${i}`) === 'true') {
            completedLevel1++;
        }
    }

    // Level 2 예제 완료 체크 및 표시
    for (let i = 1; i <= 10; i++) {
        if (localStorage.getItem(`cquizCompleted${i}`) === 'true') {
            completedLevel2++;
        }
    }

    // Level 3 예제 완료 체크 및 표시
    if (localStorage.getItem(`level3Completed`) === 'true') {
        completedLevel3++;
    }

    // 전체 퍼센트는 항상 21개 기준
    const completedStudies = completedLevel1 + completedLevel2 + completedLevel3;
    const totalPercent = Math.round((completedStudies / 21) * 10000) / 100;
    levelupPercent.innerText = `${totalPercent}%`;

    // 현재 진행도 기준 currentLevel 계산
    let currentLevel = 1;
    if (completedLevel1 < 10) {
        currentLevel = 1;
    } else if (completedLevel2 < 10) {
        currentLevel = 2;
    } else {
        currentLevel = 3;
    }

    document.getElementById("current-level").innerText = currentLevel;
    const levelInfo = [
        { level: 1, title: "🐣 웹 새싹" },
        { level: 2, title: "🛠️ 웹 도전자" },
        { level: 3, title: "👑 웹 마스터" },
    ];
    document.getElementById("level-title").innerText = levelInfo[currentLevel - 1].title;

    let pageProgress = 0;
    let pageTotal = 10;

    if (pageLevel === 1) {
        pageProgress = completedLevel1;
        pageTotal = 10;
    } else if (pageLevel === 2) {
        pageProgress = completedLevel2;
        pageTotal = 10;
    } else if (pageLevel === 3) {
        pageProgress = completedLevel3;
        pageTotal = 1;
    }

    // 남은 예제 수는 현재 진행 기준
    let remainingExamples = 0;
    if (currentLevel === 1) {
        remainingExamples = 10 - completedLevel1;
    } else if (currentLevel === 2) {
        remainingExamples = 10 - completedLevel2;
    } else if (currentLevel === 3) {
        remainingExamples = 1 - completedLevel3;
    }
    document.getElementById("remaining-examples").innerText = remainingExamples;

    // 진행률 바는 현재 페이지 기준
    const progressPercentage = Math.round((pageProgress / pageTotal) * 100);
    progressBar.style.setProperty('--target-width', `${progressPercentage}%`);

    // 🔒 잠금 상태 표시 처리
    for (let i = 1; i <= pageTotal; i++) {
        const boxId = pageLevel === 1 ? `box${i}` :
                      pageLevel === 2 ? `box${i + 10}` :
                      `box31`;
        const box = document.getElementById(boxId);
        if (!box) continue;

        const isCompleted =
            (pageLevel === 1 && localStorage.getItem(`quizCompleted${i}`) === 'true') ||
            (pageLevel === 2 && localStorage.getItem(`cquizCompleted${i}`) === 'true') ||
            (pageLevel === 3 && localStorage.getItem(`level3Completed`) === 'true');

        box.classList.remove('completed', 'locked');

        if (isCompleted) {
            box.classList.add('completed');
        } else if (pageLevel > currentLevel) {
            box.classList.add('locked');
        }
    }
}


// 문서 로드 시 진행도 업데이트 실행
document.addEventListener("DOMContentLoaded", function () {
    updateProgress();
});