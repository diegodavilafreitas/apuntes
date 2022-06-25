import { Component } from '@angular/core';
import { Configuración } from './Models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: String ='';
  public description: String='';
  public colorTitulos: String='';
  name = 'Diego';
  scndName = 'Davila Freitas';
  mostrarVideojuego: boolean = true;
  public config;

  constructor(){
    this.config = Configuración;
    this.title = Configuración.titulo;
    this.description = Configuración.descripcion;
  }

  ocultarVideojuego(estado: boolean){
    this.mostrarVideojuego = estado;
  }

  

}
