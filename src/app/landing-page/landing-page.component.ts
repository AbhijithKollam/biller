import { Component, OnInit } from '@angular/core';
import { GlobalStateService } from '../services/global-state.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  userName: any;
  Highcharts: typeof Highcharts = Highcharts;
  // Corrected chart options
  chartOptions: Highcharts.Options = {
    tooltip: {
      shared: true,
      useHTML: true,
      // Customize tooltip if needed
    },
    plotOptions: {
      series: {
        states: {
          hover: {
            enabled: true, // Ensure hover state is enabled
            lineWidthPlus: 1 // Adjust line width on hover
          }
        }
      }
    },
    chart: {
      type: 'line' // Set the chart type to line
    },
    title: {
      text: 'Customers'
    },
    xAxis: {
      categories: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May',
        'Jun', 'Jul', 'Aug', 'Sep', 'Oct',
        'Nov', 'Dec'
      ]
    },
    yAxis: {
      title: {
        text: 'Count'
      }
    },
    series: [{
      name: 'Month',
      type: 'column',
      data: [10, 15, 20, 25, 30, 40, 35, 50, 45, 60, 70, 80] // Sample data
    }]
  };
  chartOptions2: Highcharts.Options = {
    chart: {
      type: 'line' // Set the chart type to line
    },
    title: {
      text: 'Revenue'
    },
    xAxis: {
      categories: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May',
        'Jun', 'Jul', 'Aug', 'Sep', 'Oct',
        'Nov', 'Dec'
      ]
    },
    yAxis: {
      title: {
        text: 'Amount'
      }
    },
    series: [{
      name: 'Month',
      type: 'area',
      data: [10, 15, 20, 25, 30, 40, 35, 50, 45, 60, 70, 80] // Sample data
    }]
  };

  constructor(private globalState: GlobalStateService) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');
  }
}
