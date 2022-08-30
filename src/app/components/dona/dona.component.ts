import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input('title') title: string = 'Sin titulo';
  @Input('data') data: any = [350, 455, 100];
  @Input('labels') public doughnutChartLabels: string[] = ['Label1', 'Label2', 'Label3'];


  /*public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{ data: this.data }],
  };*/

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: this.data,
        backgroundColor: ['#00DDF0', '#0BD9B1', '#0CF888']
      }
    ]
  };


  ngOnChanges() {
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [{ data: this.data }],
    };
  }

  public doughnutChartType: ChartType = 'doughnut';

}
