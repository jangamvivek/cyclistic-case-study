import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexDataLabels, ApexPlotOptions, ApexFill, ApexLegend, ApexStroke, ApexTitleSubtitle, ApexGrid, ApexTooltip, ApexYAxis } from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  legend: ApexLegend;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  colors: string[];
  grid?: ApexGrid;
  tooltip?: ApexTooltip;
  yaxis?: ApexYAxis; 
};


export type DonutChartOptions = {
  series: ApexNonAxisChartSeries;   // number[]
  chart: ApexChart;
  labels: string[];
  title: ApexTitleSubtitle;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
  fill?: ApexFill;
  plotOptions: ApexPlotOptions;
  colors: string[];
};

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  public chartOptions: ChartOptions;
  public areaChartOptions: ChartOptions;
  public tripTypeChartOptions!: DonutChartOptions;
  public avgRevenueChart!: DonutChartOptions;
  // public topStationsChart: ChartOptions;
  public casualStationsChart: ChartOptions;
  public memberStationsChart: ChartOptions;

  goToHome() {
      this.router.navigate(['/home']);
  }

  goToGithub() {
      this.router.navigate(['/home']);
  }

  constructor(private router: Router) {
    this.chartOptions = {
      series: [{ name: "Member", data: [195058, 271510, 305529, 280161, 307469, 267217, 232350]}, { name: "Casual", data: [161717, 122116, 126735, 115478, 139750, 165155, 211257]} ],
      chart: { type: "bar", height: 350, toolbar: { show: false}},
      colors: ['#0d6efd', '#ffc107'], 
      plotOptions: {bar: {horizontal: false, columnWidth: '50%'}},
      dataLabels: { enabled: false },
      stroke: { show: true,width: 2,colors: ['transparent']},
      xaxis: { categories: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]},
      legend: { position: 'top'},
      fill: { opacity: 1 },
      title: { text: 'Members vs Casuals Daily ride count', align: 'center'},
      grid: { show: false}
    };

    this.areaChartOptions = {
      series: [{ name: "Casual", data: [37, 24075, 27707, 85652, 108962, 182254, 291104, 322417] }, { name: "Member", data: [16, 114506, 124121, 212218, 262091, 319736, 386691, 439915] }],
      chart: { type: "area",  height: 350, toolbar: { show: false }},
      stroke: { curve: "smooth" },
      colors: ["#0d6efd", "#ffc107",],
      fill: {type: "gradient", gradient: {shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.4, stops: [0, 90, 100]}},
      dataLabels: { enabled: false },
      xaxis: { categories: ["December", "January", "February", "March", "April", "May", "June", "July"], title: { text: "Months" }},
      yaxis: { title: { text: "Ride Count" } },
      legend: { position: "top", horizontalAlign: "right" },
      title: { text: "Monthly Ride Counts: Members vs Casuals", align: "center" },
      grid: { show: false},
      plotOptions: { bar: { horizontal: false } }, 
    };

    this.tripTypeChartOptions = {
      series: [52.98, 47.02], 
      chart: { type: "donut", height: 350 },
      labels: ["Round Trip", "One Way"],
      colors: ["#0d6efd", "#ffc107"],
      dataLabels: { formatter: (val: number) => val.toFixed(2) + "%"},
      legend: { position: "bottom" },
      title: { text: "Trip Type Distribution", align: "center" },
      plotOptions: {
        pie: {
        donut: { size: "65%", labels: { show: true, total: { show: true, label: "Total", formatter: () => "100%" } }} }
      }
    };

    this.avgRevenueChart = {
      series: [0.13, 1.45], 
      chart: { type: "donut",height: 350 },
      labels: ["Member", "Casual"],
      colors: ["#0d6efd", "#ffc107"],
      dataLabels: { formatter: (val: number, opts: any) => { return "$" + opts.w.config.series[opts.seriesIndex].toFixed(2); }},
      legend: { position: "bottom" },
      title: { text: "Avg Revenue Generated Per Ride ($)", align: "center" },
      plotOptions: {
        pie: { donut: { size: "65%", labels: { show: true, total: { show: true, label: "Total", formatter: (w: any) => { const total = w.config.series.reduce((a: number, b: number) => a + b, 0); return "$" + total.toFixed(2); } } } } }
      }
    };

    // this.topStationsChart = {
    //   series: [
    //    { name: "Member", data: [1200, 950, 870, 760, 540, 480, 450, 420, 390, 360] },
    //     { name: "Casual", data: [800, 700, 600, 500, 450, 430, 400, 370, 350, 300] }
    //   ],
    //   chart: { type: "bar", height: 450, toolbar: {show: false} },
    //   plotOptions: { bar: { horizontal: true, columnWidth: "50%" } },
    //   xaxis: {
    //   categories: [
    //     "Unknown", "Kingsbury St & Kinzie St", "Clinton St & Washington Blvd	", "DuSable Lake Shore Dr & North Blvd", "Clark St & Elm St", "Clinton St & Madison St", "Canal St & Madison St", "State St & Chicago Ave", "Wells St & Elm St", "Wells St & Concord Ln",
    //     "Streeter Dr & Grand Ave", "DuSable Lake Shore Dr & Monroe St"
    //   ]
    //   },
    //   title: { text: "Top 10 Stations - Ride Counts by User Type", align: "center" },
    //   colors: ["#0d6efd", "#ffc107"],
    //   dataLabels: { enabled: false },
    //   legend: { position: "top" },
    //   fill: { opacity: 1 },
    //   grid: { show: false },
    //   stroke: { show: true, width: 1, colors: ["#fff"] }
    // };

    // Top 10 Casual Stations
  this.casualStationsChart = {
    series: [{ name: "Casual Rides", data: [7105, 4855, 4397, 4046, 3349, 3113, 2765, 2559, 2205] }],
    chart: { type: "bar", height: 450, toolbar: { show: false } },
    plotOptions: { bar: { horizontal: true, barHeight: "70%" } },
    xaxis: {
      categories: [
        // "Unknown",
        "Streeter Dr & Grand Ave",
        "DuSable Lake Shore Dr & Monroe St",
        "Michigan Ave & Oak St",
        "DuSable Lake Shore Dr & North Blvd",
        "Millennium Park",
        "Theater on the Lake",
        "Shedd Aquarium",
        "Dusable Harbor",
        "Montrose Harbor"
      ]
    },
    title: { text: "Top Stations - Casual Ride Count", align: "center" },
    colors: ["#ffc107"],
    dataLabels: { enabled: true },
    legend: { show: false },
    fill: { opacity: 1 },
    stroke: { show: true, width: 1, colors: ["#fff"] },
    grid: {show: false}
  };

  // Top 10 Member Stations
  this.memberStationsChart = {
    series: [{ name: "Member Rides", data: [3602, 2949, 2582, 2551, 2456, 2367, 2346, 2219, 2164] }],
    chart: { type: "bar", height: 450, toolbar: { show: false } },
    plotOptions: { bar: { horizontal: true, barHeight: "70%" } },
    xaxis: {
      categories: [
        // "Unknown",
        "Kingsbury St & Kinzie St",
        "Clinton St & Washington Blvd",
        "DuSable Lake Shore Dr & North Blvd",
        "Clark St & Elm St",
        "Clinton St & Madison St",
        "Canal St & Madison St",
        "State St & Chicago Ave",
        "Wells St & Elm St",
        "Wells St & Concord Ln"
      ]
    },
    title: { text: "Top Stations - Member Ride Count", align: "center" },
    colors: ["#0d6efd"],
    dataLabels: { enabled: true },
    legend: { show: false },
    fill: { opacity: 1 },
    stroke: { show: true, width: 1, colors: ["#fff"] },
    grid: {show: false}
    };



  }
}
