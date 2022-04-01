import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name1 = '';
  name2 = '';
  constructor(private http: HttpClient) {

  }

  calculate() {
    this.http.get('');
    console.log(1);
  }

}
