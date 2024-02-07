import { Routes } from '@angular/router';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { InfoRecipeComponent } from './info-recipe/info-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';

export const routes: Routes = [
    {'path': '', redirectTo: '/recipes', pathMatch:'full'},
    {'path': 'recipes', component: RecipesListComponent, pathMatch:'full'},
    {'path': 'recipes/:id', component: InfoRecipeComponent},
    {'path': 'edit-recipe/:id', component: EditRecipeComponent},
    {'path': 'new-recipe', component: NewRecipeComponent}
];