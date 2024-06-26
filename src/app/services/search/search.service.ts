import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  search(query: string) {
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=c3c8439759474d59a8ebbd6bbd7e5745&query=${query}&number=10`;

    return this.http.get(apiUrl);
  }
}
