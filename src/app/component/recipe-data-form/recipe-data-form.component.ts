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

  @Input() buttonText!:string;

  @Input() currentName:string= '';
  @Input() currentDescription:string= '';
  @Input() currentIngredients:string[]= [];

  @Output() onSubmitEvent = new EventEmitter<Recipe>();

  name:string = '';
  description:string = '';
  ingredients:string = '';
  image:string = '';

  
  constructor(private router: Router){

  }

  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
  }

  onSavedClicked(): void{
    this.onSubmitEvent.emit({
      code: "",
      name: this.name,
      description:this.description,
      ingredients: this.ingredients.split(','),
      imageUrl:this.image,
    });
    this.router.navigateByUrl('my-recipes');
  }
}
