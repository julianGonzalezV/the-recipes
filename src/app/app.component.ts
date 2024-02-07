import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipesListComponent } from './recipes-list/recipes-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RecipesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'the-recipes';
}