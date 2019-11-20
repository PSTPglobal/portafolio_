import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  LineChart: any = [];

  constructor( private router: ActivatedRoute ) {
    this.router.parent.params.subscribe( parametros => {
      console.log('Ruta hija usuario nuevo');
      console.log(parametros);
    });
   }
  ngOnInit() {
    this.LineChart = new Chart ('lineChart', {
        type: 'doughnut',
        data: {
          labels: ['fghj'],
          datasets: [{
            data: [20, 80],
            backgroundColor: [null, '#3393FE'],
            borderWidth: null
        }]
      },
      options: {
        // rotation: Math.PI,
        cutoutPercentage: 70
        // circumference: (20 * Math.PI) / 100
      }
    });
    /*this.LineChart = new Chart ('lineChart', {
      type: 'radar',
      data: {
          datasets: [{
              label: 'First dataset',
              data: [0, 20, 40, 50]
          }],
          labels: ['January', 'February', 'March', 'April']
      },
      options: {
          scale: {
              ticks: {
                  suggestedMin: 50,
                  suggestedMax: 100
              }
          }
      }
    });*/
  }

}
