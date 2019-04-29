import { Component } from '@angular/core';
import { HttpService } from "./service/http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private httpService: HttpService) {
    this.getApiValues();
  }

  title = 'ClientApp';

  apiResponse: string[];

  getApiValues(): void {
    this.httpService
    .Get("values", undefined, undefined)
    .subscribe(response => this.getResponse(response));
  }

  getResponse(response): void {
    this.apiResponse = response;
  }
}
