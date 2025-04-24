function calculateBoxModel() {
  // 입력값을 숫자로 변환하여 가져옴. 값이 없으면 0으로 처리.
  const width = parseFloat(document.getElementById('width').value) || 0;
  const padding = parseFloat(document.getElementById('padding').value) || 0;
  const border = parseFloat(document.getElementById('border').value) || 0;
  const margin = parseFloat(document.getElementById('margin').value) || 0;

  // 총 요소 크기 계산 (콘텐츠 + 패딩*2 + 보더*2 + 마진*2)
  const total = width + padding * 2 + border * 2 + margin * 2;

  const maxSize = 300; // 시각화 영역의 최대 픽셀 크기
  const scale = total > 0 ? maxSize / total : 0; // 비율 계산 (총 크기를 시각화 영역에 맞추기 위한 비율)

  // 실제 시각화에 사용할 값 계산 (비율에 따라 크기 조정)
  const visualWidth = width * scale;
  const visualPadding = padding * scale;
  const visualBorder = border * scale;
  const visualMargin = margin * scale;

  // 결과 출력 (총 요소 크기 표시)
  document.getElementById('boxResult').innerText = `총 요소 크기: ${total}px`;

  // 시각화 레이어 요소 가져오기
  const marginEl = document.querySelector(".margin-layer");
  const borderEl = document.querySelector(".border-layer");
  const paddingEl = document.querySelector(".padding-layer");
  const contentEl = document.querySelector(".content-layer");

  // 각 레이어에 패딩 및 크기 적용 (시각화에 맞게 설정)
  marginEl.style.padding = `${visualMargin}px`;         // 마진은 가장 바깥쪽, 안쪽 요소에 패딩처럼 설정
  borderEl.style.padding = `${visualBorder}px`;         // 테두리 영역
  paddingEl.style.padding = `${visualPadding}px`;       // 패딩 영역
  contentEl.style.width = `${visualWidth}px`;           // 콘텐츠 영역 너비
  contentEl.style.height = `${visualWidth / 2}px`;      // 콘텐츠 영역 높이 (비율 2:1로 설정)
}

// 페이지 로드 시 기본값 설정 및 시각화 초기 실행
window.onload = () => {
  // 기본 입력값 설정
  document.getElementById('width').value = 100;
  document.getElementById('padding').value = 30;
  document.getElementById('border').value = 25;
  document.getElementById('margin').value = 40;

  calculateBoxModel(); // 초기 시각화 실행
};
