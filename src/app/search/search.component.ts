import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{

  public filmovi: string | null=null
  public bioskopi: string | null=null
  public dates: string | null=null

  constructor ( private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.filmovi=params['filmovi']
      this.bioskopi=params['bioskopi']
      this.dates=params['dates']
    })
  }

}
