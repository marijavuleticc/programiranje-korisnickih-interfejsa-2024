import { NgFor, NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Movies } from './movies';
import { RouterLink } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { MovieModel } from '../../models/movie.model';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader'


@Component({
  selector: 'app-home',
  imports: [
    MatCardModule,
    CommonModule,
    MatButtonModule,
    HttpClientModule,
    NgFor, 
    RouterLink, 
    MatListModule,
    MatInputModule,
    MatSelectModule,
    NgxSkeletonLoaderModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public recommended: MovieModel[] = [] //| undefined=undefined
  public movies = Movies.getAllMovies()
  public filmovi: string[]=[
    'The Town','Interstellar','Get Out','The Purge','Fast Five','Anna','In Time','Big Mommas House','The Accountant','Miss Congeniality'
  ]
  public bioskopi: string[]=[
    'Svi bioskopi','Beograd','Novi Sad','Kragujevac'

  ]

  public dates: string[]=[
    'Today','21. mart, Sutra','22. mart, Subota','23. mart, Nedelja','24. mart, Ponedeljak'

  ]


  public generateImageUrl(name: string){
    return name
  }
}
