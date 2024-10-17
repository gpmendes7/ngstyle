import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fontSize: number = 15;
  textColor: 'red' | 'blue' = 'red';
  buttonText: 'Vermelho' | 'Azul' = 'Azul';
  stylesString: string = 'font-size: 15px; color: red';
  stylesObj = {
    'font-size': this.fontSize + 'px',
    'color': this.textColor
  };

  increaseFontSize() { 
    this.fontSize +=5;

    this.stylesString = `font-size: ${this.fontSize}px; color: ${this.textColor};`;

    this.stylesObj = {
      'font-size': this.fontSize + 'px',
      'color': this.textColor
    };
  }

  toggleFontColor() {
    if(this.textColor === 'red') {
      this.textColor = 'blue';
      this.buttonText = 'Vermelho';
    } else {
      this.textColor = 'red';
      this.buttonText = 'Azul';
    }

    this.stylesString = `font-size: ${this.fontSize}px; color: ${this.textColor};`;

    this.stylesObj = {
      'font-size': this.fontSize + 'px',
      'color': this.textColor
    };
  }
  
}
