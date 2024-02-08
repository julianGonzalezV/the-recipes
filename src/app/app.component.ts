import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RecipesListComponent, RouterOutlet, CommonModule, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'the-recipes';
}
