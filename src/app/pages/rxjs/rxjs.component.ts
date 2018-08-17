import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, Subscriber, Subscription } from 'rxjs';
import { map, retry, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

subcription: Subscription;

  constructor() {
    // this.returnObserver().pipe(
    //   retry(3)
    //  )
    this.subcription =  this.returnObserver().subscribe(
      numero => numero, // console.log('Subs', numero ),
      error => console.error( 'Error en el obs', error ),
      () => console.log( 'El observador terminó!' )
    );
  }
  ngOnInit() {
  }

ngOnDestroy() {
  console.log('La pagina se va a cerrar.!');
  this.subcription.unsubscribe();
}

  returnObserver(): Observable<any> {
    return new Observable( (obsever: Subscriber<any>) => {
      let contador = 0;
      let intervalo = setInterval( () => {
        contador += 1;

        const salida = {
          valor: contador
        };

        obsever.next( salida );

        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   obsever.complete();
        // }
        // if ( contador === 2 ) {
        //   // clearInterval(intervalo);
        //   obsever.error('Aiuda.!!');
        // }
      }, 1000);
    }).pipe (
      map( repuesta => repuesta.valor),
      filter( (valor, index ) => {
        // console.log('Filter: ', valor, 'index: ', index );
        if ((valor % 2 === 1 )) {
          return true;
        } else {
          return false;
        }
      })
    );
  }

}
