import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomFoodService {

  constructor(private http: HttpClient) { }
  listRandomFood(take: number) { const apiUrl = `https://api.spoonacular.com/recipes/random?apiKey=c3c8439759474d59a8ebbd6bbd7e5745&number=${take}`; 
  
  return this.http.get(apiUrl); }
}
