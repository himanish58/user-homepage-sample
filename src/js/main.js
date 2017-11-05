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

// Card Charts

// First Card
// let card1 = document.querySelector('#card1').getContext('2d');
// let cardData1 = {
//   datasets: [{
//     backgroundColor: 'rgba(0, 0, 0, 0.3)',
//     data: [72, 25, 15, 89, 25, 48, 75],
//   },
// ],
// };
// let cardChart1 = new Chart(card1, {
//   type: 'bar',
//   data: cardData1,
//   options: {
//     responsive: true,
//     maintainAspectRatio: false,
//   },
// });
// Tried to pul the chart at the bottom of the card but couldn't

// Onclick Event for the left-sidebar

let menu = document.querySelector('#menu');
let middleTable = document.querySelector('#middle-table');
let leftSideBar = document.querySelector('#left-sidebar');
let leftNavToggle = (e) => {
  e.preventDefault();
  if (leftSideBar.style.display === 'none') {
    middleTable.classList.remove('l10');
    middleTable.classList.add('l8');
    leftSideBar.style.display = 'block';
    return true;
  }

  leftSideBar.style.transition = '2s';
  leftSideBar.style.display = 'none';
  middleTable.classList.remove('l8');
  middleTable.classList.add('l10');
};

menu.addEventListener('click', leftNavToggle);
