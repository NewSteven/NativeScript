import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NoticiasService } from "../CompNew/noticias.service";

@Component({
    selector: "Search",
    templateUrl: "./search.component.html",
    providers: [NoticiasService]
})
export class SearchComponent implements OnInit {

    constructor( private noticias: NoticiasService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.noticias.agregar("hola 1");
        this.noticias.agregar("2");
        this.noticias.agregar("3");
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
