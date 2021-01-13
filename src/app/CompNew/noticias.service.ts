import { Injectable } from "@angular/core";

@Injectable()// dice que la clase sera inyectada a diferentes componentes
export class NoticiasService { //clase con variable privada
    private noticias: Array<string> = [];

    //metodo agregar que recive string
    agregar(s: string){
        this.noticias.push(s);
    }

    //metodo buscar que retorna la info
    buscar() {
        return this.noticias;
    }
}
