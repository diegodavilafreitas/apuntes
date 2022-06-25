import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../Models/Zapatilla";

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent implements OnInit{

    public titulo: String ='Componente zapatillas';
    public zapatillas: Array<Zapatilla>;

    constructor(){
        this.zapatillas = [
            new Zapatilla('Reebok classic', 100, 'rojo', 'reebok', true),
            new Zapatilla('Reebok new', 110, 'azul', 'reebok', true),
            new Zapatilla('nike air', 150, 'blanco', 'nike', false),
            new Zapatilla('adidas cortez', 90, 'rojo, azul y blanco', 'adidas', true)
        ];
    }

    ngOnInit(): void {
        console.log(this.zapatillas)
    }


}