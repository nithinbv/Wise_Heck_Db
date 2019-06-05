import { Component, OnInit } from "@angular/core";
import { Chart } from "angular-highcharts";

@Component({
  selector: "dashbaord-component",
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent {
  chartlineChart = new Chart({
    chart: {
      type: "line"
    },
    title: {
      text: "Linechart - rename"
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: "Line 1",
        data: [1, 2, 3]
      }
    ]
  });

  barChart = new Chart({
    chart: {
      type: "bar"
    },
    title: {
      text: "Barchart - rename"
    },
    legend: {
      layout: "vertical",
      align: "left",
      verticalAlign: "top",
      x: 250,
      y: 100,
      floating: true,
      borderWidth: 1,

      backgroundColor:
        (Chart.theme && Chart.theme.legendBackgroundColor) || "#FFFFFF",
      shadow: true
    },
    xAxis: {
      categories: ["Africa", "America", "Asia", "Europe", "Oceania"],
      title: {
        text: null
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: "Population (millions)",
        align: "high"
      },
      labels: {
        overflow: "justify"
      }
    },
    tooltip: {
      valueSuffix: " millions"
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: "Year 1800",
        data: [107, 31, 635, 203, 2]
      },
      {
        name: "Year 1900",
        data: [133, 156, 947, 408, 6]
      },
      {
        name: "Year 2008",
        data: [973, 914, 4054, 732, 34]
      }
    ]
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
            color: (Chart.theme && Chart.theme.contrastTextColor) || "black"
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
