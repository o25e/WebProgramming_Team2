function calculateBoxModel() {
    const width = parseFloat(document.getElementById('width').value) || 0;
    const padding = parseFloat(document.getElementById('padding').value) || 0;
    const border = parseFloat(document.getElementById('border').value) || 0;
    const margin = parseFloat(document.getElementById('margin').value) || 0;
  
    const total = width + padding * 2 + border * 2 + margin * 2;
    const maxSize = 300; // 시각화 영역의 최대 크기(px)
    const scale = total > 0 ? maxSize / total : 0;
  
    const visualWidth = width * scale;
    const visualPadding = padding * scale;
    const visualBorder = border * scale;
    const visualMargin = margin * scale;
  
    document.getElementById('boxResult').innerText = `총 요소 크기: ${total}px`;
  
    const marginEl = document.querySelector(".margin-layer");
    const borderEl = document.querySelector(".border-layer");
    const paddingEl = document.querySelector(".padding-layer");
    const contentEl = document.querySelector(".content-layer");
  
    marginEl.style.padding = `${visualMargin}px`;
    borderEl.style.padding = `${visualBorder}px`;
    paddingEl.style.padding = `${visualPadding}px`;
    contentEl.style.width = `${visualWidth}px`;
    contentEl.style.height = `${visualWidth / 2}px`;
  }
  
  // 기본값 설정 + 초기 시각화 실행
  window.onload = () => {
    document.getElementById('width').value = 100;
    document.getElementById('padding').value = 30;
    document.getElementById('border').value = 25;
    document.getElementById('margin').value = 40;
  
    calculateBoxModel(); // 초기 실행
  };
  