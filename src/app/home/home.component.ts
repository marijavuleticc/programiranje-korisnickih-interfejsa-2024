import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Movies } from './movies';
import { RouterLink } from '@angular/router';
import {MatListModule} from '@angular/material/list';


@Component({
  selector: 'app-home',
  imports: [
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    NgFor, 
    RouterLink, 
    MatListModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public recommended: any[] = [] //| undefined=undefined
  public movies = Movies.getAllMovies()


  public generateImageUrl(name: string){
    return name
  }

}
