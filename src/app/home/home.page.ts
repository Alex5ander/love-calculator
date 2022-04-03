import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  url = 'http://www.lucasreno.kinghost.net/love-calculator/';
  percente = -1;

  phrases = [
    'Que pena, mas isso não vai dar certo',
    'As chances de dar certo são baixas, mas vale a pena tentar',
    'Talvez de certo, talvez não de',
    'As chances são altas, vai que pode dar',
    'Excelente! vocês foram feitos um para o outro',
  ];

  phrase = ' ';

  buttonClass = 'submit-button';
  heartClass = 'heart';

  formGroup: FormGroup;

  constructor(private http: HttpClient, public fb: FormBuilder) {
    this.formGroup = fb.group({
      firstName: ['', Validators.minLength(3)],
      secondName: ['', Validators.minLength(3)],
    });
  }

  calculate() {
    this.percente = -1;
    this.phrase = '';
    this.heartClass = 'heart';
    const { firstName, secondName } = this.formGroup.value;
    this.buttonClass='submit-button jump';
    // this.http.get(this.url+this.name1+'/'+this.name2).subscribe((response: string) => {
    //   this.percente = parseInt(response, 10);
    // });

    setTimeout(() => {
      this.buttonClass='submit-button expand';
      setTimeout(() => {
       this.buttonClass='submit-button';
       this.heartClass='heart pulse';

       this.percente = Math.floor(Math.random() * 101);
       this.phrase = this.phrases[Math.floor(5 / 100 * this.percente)];
      }, 1400);
    }, 2200);
  }

}
