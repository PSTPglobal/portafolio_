import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import * as waypoints from 'angular-waypoints';
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
    // tslint:disable-next-line: deprecation
    $(document).ready(() => {
      $('.cv').hide();
      // tslint:disable-next-line: only-arrow-functions
      $('#btnCV').on( 'click', function() {
        $('.cv').show();
       });
    });


    // tslint:disable-next-line: only-arrow-functions
    $('#btnCV').on('click', function(){
      const posicion = $('.js--section-features').offset().top;
      $('html, body').animate({
          scrollTop: posicion
      }, 1500);
  });
  }

}
