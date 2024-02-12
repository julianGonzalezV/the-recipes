import { Injectable } from '@angular/core';
import { Recipe } from '../types';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeUrl = '/api/recipe';

  constructor(private http: HttpClient) { }

  getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipeUrl);
  }

  getAllByName(name: string): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.recipeUrl}?name=${name}`);
  }

  getByRefCode(code: string): Observable<Recipe>{
    return this.http.get<Recipe>(`${this.recipeUrl}/${code}`);
  }
  
  createNew(recipe: Recipe): Observable<Recipe>{
    return this.http.post<Recipe>(this.recipeUrl, recipe, httpOptions);
  }

  getAllByUser(name: string): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.recipeUrl}/user/${name}`);
  }

  detele(code: string): Observable<any> {
    return this.http.delete<Recipe>(`${this.recipeUrl}/${code}`);
  }

}
