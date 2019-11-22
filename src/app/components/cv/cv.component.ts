import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {


  constructor( private router: ActivatedRoute ) {
    this.router.parent.params.subscribe( parametros => {
      console.log('Ruta hija usuario nuevo');
      console.log(parametros);
    });
   }
  ngOnInit() {
  }
}
