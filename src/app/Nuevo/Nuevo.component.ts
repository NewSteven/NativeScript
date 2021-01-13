import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ExampleService } from "../CompTwo/example.service";

@Component({
    selector: "Nuevo",
    templateUrl: "./Nuevo.component.html"
    providers: [ExampleService]
})
export class NuevoComponent implements OnInit {

    constructor(private nombres: ExampleService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.nombres.agregar("nombre: juan");
        this.nombres.agregar("nombre: juan 2");
        this.nombres.agregar("nombre: juan 3");
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
