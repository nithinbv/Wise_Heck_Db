import { Component, OnInit } from "@angular/core";
import { Chart } from 'angular-highcharts';


@Component({
  selector: "dashbaord-component",
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent {
  
  chart = new Chart({
    title: {
      text: 'Solar Employment Growth by Sector, 2010-2016'
  },

  subtitle: {
      text: 'Source: thesolarfoundation.com'
  },

  yAxis: {
      title: {
          text: 'Number of Employees'
      }
  },
  legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
  },

  plotOptions: {
      series: {
          label: {
              connectorAllowed: false
          },
          pointStart: 2010
      }
  },

  series: [{
      name: 'Installation',
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
      type: undefined
  }, {
      name: 'Manufacturing',
      data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
      type: undefined
  }, {
      name: 'Sales & Distribution',
      data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
      type: undefined
  }, {
      name: 'Project Development',
      data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
      type: undefined
  }, {
      name: 'Other',
      data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
      type: undefined
  }],

  responsive: {
      rules: [{
          condition: {
              maxWidth: 500
          },
          chartOptions: {
              legend: {
                  layout: 'horizontal',
                  align: 'center',
                  verticalAlign: 'bottom'
              }
          }
      }]
  }
  });

  barChart = new Chart({
    chart: {
      type: 'column'
   },
   title: {
      text: 'Monthly Average Rainfall'
   },
   subtitle:{
      text: 'Source: WorldClimate.com' 
   },
   xAxis:{
      categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul',
      'Aug','Sep','Oct','Nov','Dec'],
      crosshair: true        
   },     
   yAxis : {
      min: 0,
      title: {
         text: 'Rainfall (mm)'         
      }      
   },
   tooltip : {
      headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
         '<td style = "padding:0"><b>{point.y:.1f} mm</b></td></tr>', footerFormat: '</table>', shared: true, useHTML: true
   },
   plotOptions : {
      column: {
         pointPadding: 0.2,
         borderWidth: 0
      }
   },
   series: [{
      name: 'Tokyo',
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6,
         148.5, 216.4, 194.1, 95.6, 54.4],
         type:undefined
   }, 
   {
      name: 'New York',
      data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3,
         91.2, 83.5, 106.6, 92.3],
         type:undefined
   }, 
   {
      name: 'London',
      data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6,
         52.4, 65.2, 59.3, 51.2],
         type:undefined
   }, 
   {
      name: 'Berlin',
      data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4,
         47.6, 39.1, 46.8, 51.1],
         type:undefined
   }]
  });

  pieChart = new Chart({
    chart: {
      plotBorderWidth: null,
      plotShadow: false
    },
    title: {
      text: "Browser market shares at a specific website, 2014"
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}%</b>: {point.percentage:.1f} %",
          style: {
            color: "black"
          }
        }
      }
    },
    series: [
      {
        type: "pie",
        name: "Browser share",
        data: [
          ["Firefox", 45.0],
          ["IE", 26.8],
          {
            name: "Chrome",
            y: 12.8,
            sliced: true,
            selected: true
          },
          ["Safari", 8.5],
          ["Opera", 6.2],
          ["Others", 0.7]
        ]
      }
    ]
  });
}
