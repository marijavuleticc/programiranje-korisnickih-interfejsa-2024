import { Injectable } from '@angular/core';
import { Movies } from '../home/movies';


@Injectable({
  providedIn: 'root'
})
export class WebService {

  private movies: any[]; 

  constructor() {
    this.movies = Movies.getAllMovies(); 
  }

  public getAllMovies() {
    return this.movies; 
  }

  public async getRecommendedMovies(){
    
  }
}
