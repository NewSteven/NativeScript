import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ExampleService } from "../CompTwo/example.service";

@Component({
    selector: "Browse",
    templateUrl: "./browse.component.html",
    providers: [ExampleService]
})
export class BrowseComponent implements OnInit {

    constructor( private nombres: ExampleService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.nombres.agregar("nombre: juan");
        this.nombres.agregar("nombre: alejo");
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
