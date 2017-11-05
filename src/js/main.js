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
    
    // responsive: true,
    // maintainAspectRatio: false,
  },
});

// Pie Charts
let pie1 = document.querySelector('#pie1').getContext('2d');
let pie2 = document.querySelector('#pie2').getContext('2d');
let pie3 = document.querySelector('#pie3').getContext('2d');
let pie4 = document.querySelector('#pie4').getContext('2d');
let pie5 = document.querySelector('#pie5').getContext('2d');
let pie6 = document.querySelector('#pie6').getContext('2d');

let pieData1 = {
  datasets: [{
    backgroundColor: ['rgba(32, 143, 170, 1)', 'rgba(255, 255, 255, 1)'],
    data: [31, 51],
  },
],
};

let pieData2 = {
  datasets: [{
    backgroundColor: ['rgba(32, 143, 170, 1)', 'rgba(255, 255, 255, 1)'],
    data: [45, 44],
  },
],
};

let pieData3 = {
  datasets: [{
    backgroundColor: ['rgba(32, 143, 170, 1)', 'rgba(255, 255, 255, 1)'],
    data: [80, 5],
  },
],
};

let pieData4 = {
  datasets: [{
    backgroundColor: ['rgba(32, 143, 170, 1)', 'rgba(255, 255, 255, 1)'],
    data: [56, 31],
  },
],
};

let pieData5 = {
  datasets: [{
    backgroundColor: ['rgba(32, 143, 170, 1)', 'rgba(255, 255, 255, 1)'],
    data: [22, 48],
  },
],
};

let pieData6 = {
  datasets: [{
    backgroundColor: ['rgba(32, 143, 170, 1)', 'rgba(255, 255, 255, 1)'],
    data: [72, 25],
  },
],
};

let pieChart1 = new Chart(pie1, {
  type: 'pie',
  data: pieData1,
  options: {
    responsive: true,
    maintainAspectRatio: true,
  },
});

let pieChart2 = new Chart(pie2, {
  type: 'pie',
  data: pieData2,
  options: {
    responsive: true,
    maintainAspectRatio: true,
  },
});

let pieChart3 = new Chart(pie3, {
  type: 'pie',
  data: pieData3,
  options: {
    responsive: true,
    maintainAspectRatio: true,
  },
});

let pieChart4 = new Chart(pie4, {
  type: 'pie',
  data: pieData4,
  options: {
    responsive: true,
    maintainAspectRatio: true,
  },
});

let pieChart5 = new Chart(pie5, {
  type: 'pie',
  data: pieData5,
  options: {
    responsive: true,
    maintainAspectRatio: true,
  },
});

let pieChart6 = new Chart(pie6, {
  type: 'pie',
  data: pieData6,
  options: {
    responsive: true,
    maintainAspectRatio: true,
  },
});
