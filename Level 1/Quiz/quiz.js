const options = document.querySelectorAll('.option');
const alertOverlay = document.getElementById('alertOverlay');
const alertContent = document.getElementById('alertContent');

let correctAnswers = new Set(); // 맞춘 문제의 인덱스를 저장할 Set

options.forEach(option => {
    option.addEventListener('click', function () {
        // 현재 선택된 옵션이 속한 문제의 부모 div를 찾음
        const parentBox = this.closest('.quiz-container');
        // 그 문제의 인덱스를 찾아냄 (전체 문제 목록에서 위치 파악)
        const questionIndex = Array.from(document.querySelectorAll('.quiz-container')).indexOf(parentBox);

        // 선택한 옵션이 정답인지 확인
        const isCorrect = this.dataset.correct === "true";

        // 정답 여부에 따라 피드백 표시
        showFeedback(isCorrect);

        // 클릭한 이후 스타일을 변경하여 클릭 불가 처리
        this.style.pointerEvents = 'none';
        this.style.opacity = '0.7';

        // 정답일 경우, 맞춘 문제의 인덱스를 Set에 추가
        if (isCorrect) {
            correctAnswers.add(questionIndex);
        }

        // 문제 개수
        const totalQuestions = document.querySelectorAll('.quiz-container').length;
        // 모든 문제를 맞췄다면 해당 챕터 퀴즈 완료 표시함
        if (correctAnswers.size === totalQuestions) {
            // 현재 문서의 파일 이름을 가져옴
            const fileName = window.location.pathname.split('/').pop(); // 예: "html_quiz3.html"

            // 숫자 부분만 추출
            const match = fileName.match(/\d+/); // 정규표현식으로 숫자 찾기
            const quizNumber = match ? match[0] : null;
            
            // 로컬 스토리지에 '퀴즈 완료' 표시
            if (quizNumber) 
                localStorage.setItem(`quizCompleted${quizNumber}`, 'true');
        }
    });
});


function showFeedback(isCorrect) {
    alertOverlay.style.display = 'flex';
    alertContent.innerHTML = isCorrect
        ? '<div class="correct">✓ 정답입니다!</div>'
        : '<div class="wrong">× 오답입니다!</div>';

    setTimeout(() => {
        alertOverlay.style.display = 'none';
    }, 2000);
}

alertOverlay.addEventListener('click', (e) => {
    if (e.target === alertOverlay) {
        alertOverlay.style.display = 'none';
    }
});