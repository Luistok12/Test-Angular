import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo3',
  templateUrl: './ejemplo3.component.html',
  styleUrls: ['./ejemplo3.component.less']
})
export class Ejemplo3Component {
  contador = 0;

  decrementar(){
    this.contador--;
  }

  incrementar(){
    this.contador++;
  }

}
