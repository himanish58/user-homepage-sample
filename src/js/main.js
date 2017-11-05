// Materialize Initialization
$(document).ready(function () {
  $('.button-collapse').sideNav();
});

// Radar Chart
let radarChart = document.querySelector('#radarChart').getContext('2d');
let radarData = {
  labels: ['Eat', 'Drink', 'Sleep', 'Work', 'Code', 'Cycle', 'Run'],
  datasets: [{
    backgroundColor: 'rgba(0, 0, 255, 0.2)',
    data: [78, 89, 52, 20, 10, 73],
  },
  {
    backgroundColor: 'rgba(255, 255, 0, 0.2)',
    data: [14, 45, 63, 89, 46, 98],
  },
],
};
let rightSideChart = new Chart(radarChart, {
  type: 'radar',
  data: radarData,
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
  },
});
