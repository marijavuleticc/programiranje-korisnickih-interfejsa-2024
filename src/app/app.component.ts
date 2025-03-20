import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { UserService } from './services/user.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    MatToolbarModule,
    MatButtonModule,
    RouterLink,
    NgIf
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'programiranje-korisnickih-interfejsa';

  public userService: UserService = UserService.getInstance()
}
