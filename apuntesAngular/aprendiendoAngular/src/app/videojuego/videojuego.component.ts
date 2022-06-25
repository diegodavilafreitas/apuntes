import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'

})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{

    public titulo: String;
    public listado: String;
    constructor(){

        this.titulo = 'Componente de videojuegos';
        this.listado = 'listado de los juegos mas populares: ';

       //console.log(' se ha cargado el componente videojuego ')
    }
    ngOnInit(){
        //console.log('OnInit ejecutado');
    }
    ngDoCheck(): void {
        //console.log('Do check ejecutado.');
    }

    ngOnDestroy(): void {
        //console.log('OnDestroy ejecutado');
    }

    cambiarTitulo(){
        this.titulo = 'Nuevo Titulo del componente Videojuego';
    }


}


