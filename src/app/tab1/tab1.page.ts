import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../Interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculasNuevas : Pelicula[] = [];

   slideOpts ={
     slidesPerView: 1.3,
     freeMode: true
   };

  constructor( private movieServices : MoviesService) {}

  ngOnInit(){
    this.movieServices.getFeature()
    .subscribe( resp =>{
      this.peliculasNuevas = resp.results;
    });
   }

}
