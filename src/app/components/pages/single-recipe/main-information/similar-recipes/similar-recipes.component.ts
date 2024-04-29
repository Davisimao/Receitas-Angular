import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-similar-recipes',
  templateUrl: './similar-recipes.component.html',
  styleUrls: ['./similar-recipes.component.css']
})
export class SimilarRecipesComponent implements OnInit {

  constructor() { }

  public loading: boolean = true

  @Input() recipeIdSimilar!: number;

  ngOnInit(): void {
  }

}
