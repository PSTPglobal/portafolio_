import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(window).on('scroll', () => {
      if ($(window).scrollTop()) {
        $('nav').addClass('change');
      } else {
        $('nav').removeClass('change');
      }
    });
   // tslint:disable-next-line: deprecation
    $(document).ready(() => {
    $('#elementId').hide();
  });

  // tslint:disable-next-line: deprecation
    $(document).ready(() => {

    let contactNV = false;
    let demas = false;
    // tslint:disable-next-line: deprecation
    $('.contactNV').click(() => {
      contactNV = true;
    });
    // tslint:disable-next-line: deprecation
    $('.aboutNV').click(() => {
       demas = true;
    });
    // tslint:disable-next-line: deprecation
    $('.sevicesNV').click(() => {
       demas = true;
       console.log('demas true');
    });
    // tslint:disable-next-line: deprecation
    $('.portafolioNV').click(() => {
       demas = true;
    });
    // tslint:disable-next-line: deprecation
    $('.pagesNV').click(() => {
       demas = true;
    });
    // tslint:disable-next-line: deprecation
    $('.homeNV').click(() => {
       demas = true;
    });

     // tslint:disable-next-line: deprecation
    $('.contactNV').click(() => {
     if (contactNV) {
      $('.homeNV').addClass('contactNV2');
      $('.aboutNV').addClass('contactNV2');
      $('.sevicesNV').addClass('contactNV2');
      $('.portafolioNV').addClass('contactNV2');
      $('.pagesNV').addClass('contactNV2');
      $('.contactNV').addClass('contactNV2');
      console.log('poner blanco');
     }
    });
    // tslint:disable-next-line: deprecation
    $('.homeNV').click(() => {
      if (demas) {
       $('.homeNV').addClass('contactNV2');
       $('.aboutNV').addClass('contactNV2');
       $('.sevicesNV').addClass('contactNV2');
       $('.portafolioNV').addClass('contactNV2');
       $('.pagesNV').addClass('contactNV2');
       $('.contactNV').addClass('contactNV2');
       console.log('poner blanco');
      }
     });
    // tslint:disable-next-line: deprecation
    $('.sevicesNV').click(() => {
      if (demas) {
        $('.homeNV').removeClass('contactNV2');
        $('.aboutNV').removeClass('contactNV2');
        $('.sevicesNV').removeClass('contactNV2');
        $('.portafolioNV').removeClass('contactNV2');
        $('.pagesNV').removeClass('contactNV2');
        $('.contactNV').removeClass('contactNV2');
        console.log('quitar blanco');
      }
    });
    // tslint:disable-next-line: deprecation
    $('.aboutNV').click(() => {
      if (demas) {
        $('.homeNV').removeClass('contactNV2');
        $('.aboutNV').removeClass('contactNV2');
        $('.sevicesNV').removeClass('contactNV2');
        $('.portafolioNV').removeClass('contactNV2');
        $('.pagesNV').removeClass('contactNV2');
        $('.contactNV').removeClass('contactNV2');
        console.log('quitar blanco');
      }
    });
    // tslint:disable-next-line: deprecation
    $('.portafolioNV').click(() => {
      if (demas) {
        $('.homeNV').removeClass('contactNV2');
        $('.aboutNV').removeClass('contactNV2');
        $('.sevicesNV').removeClass('contactNV2');
        $('.portafolioNV').removeClass('contactNV2');
        $('.pagesNV').removeClass('contactNV2');
        $('.contactNV').removeClass('contactNV2');
        console.log('quitar blanco');
      }
    });
    // tslint:disable-next-line: deprecation
    $('.pagesNV').click(() => {
      if (demas) {
        $('.homeNV').removeClass('contactNV2');
        $('.aboutNV').removeClass('contactNV2');
        $('.sevicesNV').removeClass('contactNV2');
        $('.portafolioNV').removeClass('contactNV2');
        $('.pagesNV').removeClass('contactNV2');
        $('.contactNV').removeClass('contactNV2');
        console.log('quitar blanco');
      }
    });

    $(window).on('scroll', () => {
        if ($(window).scrollTop()) {
        $('.sub-header').addClass('active');
        } else{
        $('.sub-header').removeClass('active');
        }
      });
    });

   const hamburger = document.querySelector('.hamburger');
   const navLinks = document.querySelector('.nav-links');
   const navLinksNegro = document.querySelector('.nav-links li a');
   const linksActive = document.querySelector('.homeNV');
   const linksActive2 = document.querySelector('.aboutNV');
   const linksActive3 = document.querySelector('.sevicesNV');
   const linksActive4 = document.querySelector('.portafolioNV');
   const linksActive5 = document.querySelector('.pagesNV');
   const linksActive6 = document.querySelector('.contactNV');
   const linksActive7 = document.querySelector('.contactNV2');
   hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
   linksActive.addEventListener('click', () => {
    navLinks.classList.remove('open');
    console.log('cerrar navbar');
    });
   linksActive2.addEventListener('click', () => {
     navLinks.classList.remove('open');
     console.log('cerrar navbar');
    });
   linksActive3.addEventListener('click', () => {
    navLinks.classList.remove('open');
    console.log('cerrar navbar');
    });
   linksActive4.addEventListener('click', () => {
    navLinks.classList.remove('open');
    console.log('cerrar navbar');
    });
   linksActive5.addEventListener('click', () => {
    navLinks.classList.remove('open');
    console.log('cerrar navbar');
    });
   linksActive6.addEventListener('click', () => {
    navLinks.classList.remove('open');
    console.log('cerrar navbar');
    });
  }

}
