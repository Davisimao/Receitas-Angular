import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingleRecipeService {

  constructor(private http: HttpClient) { }

  takeRecipe(id: number) {
    const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=c3c8439759474d59a8ebbd6bbd7e5745`;

    return this.http.get(apiUrl);
  }
}
