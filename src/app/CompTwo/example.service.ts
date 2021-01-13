import { Injectable } from "@angular/core";

@Injectable()// dice que la clase sera inyectada a diferentes componentes
export class ExampleService { //clase con variable privada
    private nombres: Array<string> = [];

    //metodo agregar que recive string
    agregar(nombre: string){
        this.nombres.push(nombre);
    }

    //metodo buscar que retorna la info
    buscar() {
        return this.nombres;
    }
}
