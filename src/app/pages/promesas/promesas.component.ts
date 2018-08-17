import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';


@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
      this.contarTres().then(
      ok => console.log('Termino', ok)
    )
    .catch( error => console.error('Error en la promesa', error));
  }

  ngOnInit() {
  }

  contarTres(): Promise <boolean> {
    return new Promise(( resolve, reject ) => {
      let contador = 0;
        let intervalo = setInterval( () => {
          contador += 1;
          // console.log('contador', contador);
          if (contador === 3 ) {
            resolve(true);
            // reject('Simplemente un error');
            clearInterval(intervalo);
          }
        }, 1000);
    });
  }

}
