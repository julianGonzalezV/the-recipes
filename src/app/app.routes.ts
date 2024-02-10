import { Routes } from '@angular/router';
import { RecipesListComponent } from './component/recipes-list/recipes-list.component';
import { InfoRecipeComponent } from './component/info-recipe/info-recipe.component';
import { EditRecipeComponent } from './component/edit-recipe/edit-recipe.component';
import { NewRecipeComponent } from './component/new-recipe/new-recipe.component';
import { MyRecipesComponent } from './component/my-recipes/my-recipes.component';

export const routes: Routes = [
    {'path': '', redirectTo: '/recipes', pathMatch:'full'},
    {'path': 'recipes', component: RecipesListComponent, pathMatch:'full'},
    {'path': 'my-recipes', component: MyRecipesComponent},
    {'path': 'recipes/:id', component: InfoRecipeComponent},
    {'path': 'edit-recipe/:id', component: EditRecipeComponent},
    {'path': 'new-recipe', component: NewRecipeComponent},
];
