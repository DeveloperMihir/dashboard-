var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
  if(!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if(sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}



var areaChartOptions = {
    series: [{
      name: 'Product sold',
      data: [31, 40, 28, 51, 42, 109]
    }, {
      name: 'Total views',
      data: [11, 32, 45, 32, 34, 52]
    }],
    chart: {
      height: 250,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    colors: ["#B5B3FB", "#80E2FF"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth'
    },
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    markers: {
      size: 2
      
    },
    yaxis: [
      {
        title: {
          text: '',
        },
      },
     
    ],
    tooltip: {
      shared: true,
      intersect: false,
    }
  };
  var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
areaChart.render();

var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
    width: 330,
    type: 'donut',
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270
    }
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    type: 'gradient',
  },
  legend: {
    formatter: function(val, opts) {
      return val + " - " + opts.w.globals.series[opts.seriesIndex]
    }
  },
  title: {
    text: ''
  },
  responsive: [{
    breakpoint: 580,
    options: {
      chart: {
        width: 700
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#bar-chart"), options);
  chart.render();