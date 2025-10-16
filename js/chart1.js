const ctx = document.getElementById('myRadarChart');

new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ['성과 관리력', '신뢰관계 구축', '윤리경영 정착', '팀원 육성', '조직연계 강화'],
    datasets: [
      {
        label: '본인진단',
        data: [4.8, 3.0, 4.5, 3.2, 3.8],
        borderColor: '#3b7ddd',
        backgroundColor: 'rgba(59, 125, 221, 0.2)',
        borderWidth: 2,
        pointBackgroundColor: '#3b7ddd'
      },
      {
        label: '본인(부서/팀장)진단평균',
        data: [4.5, 3.8, 4.2, 3.5, 3.9],
        borderColor: '#f2c94c',
        backgroundColor: 'rgba(242, 201, 76, 0.2)',
        borderWidth: 2,
        pointBackgroundColor: '#f2c94c'
      },
      {
        label: '구성원진단',
        data: [4.7, 3.5, 3.9, 4.8, 4.0],
        borderColor: '#6fcf97',
        backgroundColor: 'rgba(111, 207, 151, 0.2)',
        borderWidth: 2,
        pointBackgroundColor: '#6fcf97'
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      r: {
        beginAtZero: true,
        min: 0,
        max: 5,
        ticks: { stepSize: 1 },
        grid: { color: '#ccc' },
        angleLines: { color: '#ddd' },
        pointLabels: { font: { size: 14 } }
      }
    },
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  }
});