google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
  // 상단 5개 (카테고리)
  const dataTop = google.visualization.arrayToDataTable([
    ['항목', '본인진단', '본인(부서/팀장)진단평균', { role: 'annotation' }],
    ['성과 관리력', 4.41, 3.67, '3.67'],
    ['신뢰관계 구축', 2.51, 3.61, '3.61'],
    ['윤리경영 정착', 4.69, 3.89, '3.89'],
    ['팀원 육성', 3.32, 3.94, '3.94'],
    ['조직연계 강화', 3.62, 3.61, '3.61']
  ]);

  // 하단 10개 (세부 항목)
  const dataBottom = google.visualization.arrayToDataTable([
    ['항목', '본인진단', '본인(부서/팀장)진단평균', { role: 'annotation' }],
    ['도전적 성과 목표 설정', 4.47, 3.63, '3.63'],
    ['팀 실행력 강화', 4.36, 3.71, '3.71'],
    ['팀에 대한 책임감', 2.53, 3.58, '3.58'],
    ['자기관리 실천', 2.5, 3.64, '3.64'],
    ['규정·절차 준수 강조', 4.7, 3.83, '3.83'],
    ['투명한 의사결정', 4.69, 3.94, '3.94'],
    ['업무몰입 지원', 3.22, 4.01, '4.01'],
    ['성장 동기 부여', 3.43, 3.87, '3.87'],
    ['협력적 관계 구축', 3.49, 3.49, '3.49'],
    ['이해관계 설득 및 조율', 3.74, 3.72, '3.72']
  ]);

  const baseOptions = {
    chartArea: { width: '100%', height: '65%' },
    seriesType: 'bars',
    series: {
      0: { color: '#1A4C80', dataOpacity: 0.9 },
      1: { type: 'line', color: '#f2c94c', lineWidth: 3, pointSize: 6 }
    },
    vAxis: {
      viewWindow: { min: 0, max: 5 },
      gridlines: { color: '#e5e5e5' },
      ticks: [0, 1, 2, 3, 4, 5]
    },
    annotations: { alwaysOutside: true, textStyle: { fontSize: 12, color: '#333' } }
  };

  const chartTop = new google.visualization.ComboChart(document.getElementById('chart_top'));
  const chartBottom = new google.visualization.ComboChart(document.getElementById('chart_bottom'));

  // 상단: 라벨 표시, 범례 숨김
  const topOptions = {
    ...baseOptions,
    hAxis: { textStyle: { fontSize: 11, color: '#333' } },
    legend: { position: 'none' }
  };

  // 하단: 라벨 표시, 범례 표시
  const bottomOptions = {
    ...baseOptions,
    hAxis: { textStyle: { fontSize: 10, color: '#333' } },
    legend: { position: 'bottom' }
  };

  chartTop.draw(dataTop, topOptions);
  chartBottom.draw(dataBottom, bottomOptions);
}