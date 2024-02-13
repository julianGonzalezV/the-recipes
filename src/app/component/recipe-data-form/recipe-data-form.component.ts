import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Recipe } from '../../types';


@Component({
  selector: 'app-recipe-data-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './recipe-data-form.component.html',
  styleUrl: './recipe-data-form.component.css'
})
export class RecipeDataFormComponent implements OnInit{

  @Input() buttonText:string='';
  @Input() action:string='';
  @Input() currentRecipe!:Recipe;

  @Output() onSubmitEvent = new EventEmitter<Recipe>();

  name:string = '';
  description:string = '';
  ingredients:string = '';
  image:string = '';

  
  constructor(private router: Router){

  }

  ngOnInit(): void {
    if(this.action === 'EDIT'){
      this.setFormValues();
    }
  }

  private setFormValues(){
    this.name = this.currentRecipe.name;
    this.description = this.currentRecipe.description;
    this.ingredients = this.currentRecipe.ingredients.reduce((item1,item2) => item1.concat(" ").concat(item2));
    this.image = this.currentRecipe.imageUrl;
  
  }

  onSavedClicked(): void{
    this.onSubmitEvent.emit({
      code: this.action === 'NEW'? '' : this.currentRecipe.code,
      name: this.name,
      description:this.description,
      ingredients: this.ingredients.split(','),
      imageUrl:this.image,
    });
    this.router.navigateByUrl('my-recipes');
  }
}
