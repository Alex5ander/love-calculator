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
  url = 'http://www.lucasreno.kinghost.net/love-calculator/';
  percente = 0;

  buttonClass = 'animated-button';
  constructor(private http: HttpClient) {}

  calculate() {
    this.buttonClass='animated-button jump';
    // this.http.get(this.url+this.name1+'/'+this.name2).subscribe((response: string) => {
    //   this.percente = parseInt(response, 10);
    // });

    setTimeout(() => {
      this.buttonClass='animated-button expand';
      setTimeout(() => {
       this.buttonClass='animated-button';
      }, 1500);
    }, 1800);
    this.percente = Math.floor(Math.random() * 101);
  }

}
