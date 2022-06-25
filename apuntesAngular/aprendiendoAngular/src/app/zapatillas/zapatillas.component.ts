import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../Models/Zapatilla";

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent implements OnInit{

    public titulo: String ='Componente zapatillas';
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public color: String;

    constructor(){
        this.color = 'orange'
        this.marcas = new Array;
        this.zapatillas = [
            new Zapatilla('Reebok classic', 100, 'rojo', 'reebok', true),
            new Zapatilla('Reebok new', 110, 'azul', 'reebok', true),
            new Zapatilla('nike air', 150, 'blanco', 'nike', false),
            new Zapatilla('adidas cortez', 90, 'rojo, azul y blanco', 'adidas', true),
            new Zapatilla('adidas loko', 50, 'blanco', 'adidas', false),
        ];
    }

    ngOnInit(): void {
        console.log(this.zapatillas)
        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach(element => {
            if(!this.marcas.includes(element.marca)){
                this.marcas.push(element.marca);
            }
            
        });
        console.log(this.marcas)

    }


}