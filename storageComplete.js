// 진행도 리셋 함수
function completeProgress() {
    for (let i = 1; i <= 10; i++) {
        localStorage.setItem(`quizCompleted${i}`,'true');
    }
    for (let i = 1; i <= 10; i++) {
        localStorage.setItem(`cquizCompleted${i}`,'true');
    }
    localStorage.setItem('level3Completed', 'true');
    alert("웹마스터가 되었습니다!");
    location.reload();
}