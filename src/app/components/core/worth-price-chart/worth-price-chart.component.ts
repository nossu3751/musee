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
        // console.log(data)
      },
      "error": (error: any) => {
        console.log(error)
      }
    })
  }




  createChart(data: any): void {
    const xmax = Math.max.apply(Math,data)
    // console.log(xmax, typeof(xmax))
    const bin_counts = 15
    const xlabels: number[] = []
    const count_data: number[] = []
    let counter: number = 0;
    const bin_size = Math.ceil(xmax / bin_counts)
    for (let i = 0; i < bin_counts; i++){
      // xlabels.push(`${i * bin_size}`)
      xlabels.push(i*bin_size)
    }

    // console.log(bin_size)
    let last_bin_num = 0
    for (let i = 1; i < xlabels.length; i++){
      // let tmp_data = filter(data, (d:number) => {
      //   return last_bin_num <= d &&  d < xlabels[i]
      // })

      for (let j = 0; j < data.length; j++){
        if (last_bin_num <= data[j] && data[j] < xlabels[i]) {
          counter++;
        }

      }
      count_data.push(counter)
      counter = 0
      last_bin_num = xlabels[i]
    }

    console.log(count_data)


    const ctx = this.histogramCanvas.nativeElement.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels:xlabels,
        datasets: [{
          label: 'prices',
          data: count_data,
          backgroundColor: 'green',
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            border: {
              display: false
            },
            grid: {
              display: false,
            }
          },
          y: {
            ticks: {
              stepSize:1
            },
            border: {
              display: false
            },
            grid: {
              display: false,
            }
          }

        }
      }
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
