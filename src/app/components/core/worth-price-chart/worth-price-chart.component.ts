import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { VerifVoteService } from 'src/app/services/data/verif-vote.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-worth-price-chart',
  templateUrl: './worth-price-chart.component.html',
  styleUrls: ['./worth-price-chart.component.scss']
})
export class WorthPriceChartComponent implements OnInit{
  @ViewChild('histogramCanvas') histogramCanvas!: ElementRef;
  
  
  
  awid: number = 1
  prices: number[] = [];

  constructor(
    private verifVoteService:VerifVoteService
  ){}
  
  
  ngOnInit(): void {
    this.verifVoteService.getVerifWorthPrices(this.awid).subscribe({
      "next": (data: any) => {
        this.createChart(data)
      },
      "error": (error: any) => {
        console.log(error)
      }
    })
  }




  createChart(data: any): void {
    const ctx = this.histogramCanvas.nativeElement.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [0, 100,200,300,400,500,600,700,800,900],
        datasets: [{
          label: 'Number of Arrivals',
          data: data,
          backgroundColor: 'green',
        }]
      },
      // options: {
      //   scales: {
      //     xAxes: [{
      //       display: false,
      //       barPercentage: 1.3,
      //       ticks: {
      //         max: 3,
      //       }
      //     }, {
      //       display: true,
      //       ticks: {
      //         autoSkip: false,
      //         max: 4,
      //       }
      //     }],
      //     yAxes: [{
      //       ticks: {
      //         beginAtZero: true
      //       }
      //     }]
      //   }
      // }
    });
  }

}
