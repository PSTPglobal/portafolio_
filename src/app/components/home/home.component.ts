import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private router: ActivatedRoute ) {
    this.router.params.subscribe( parametros => {
      console.log('PADRE');
      console.log(parametros);
    });
   }

  ngOnInit() {
  }

}
