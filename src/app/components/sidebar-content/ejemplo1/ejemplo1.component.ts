import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.less']
})
export class Ejemplo1Component {
  numero1 = 6; 
  numero2 = 6;
  resultado = this.numero1 + this.numero2;

}
