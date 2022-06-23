import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Diego';
  scndName = 'Davila Freitas';
  mostrarVideojuego: boolean = true;

  ocultarVideojuego(){
    this.mostrarVideojuego = false;
  }

}
