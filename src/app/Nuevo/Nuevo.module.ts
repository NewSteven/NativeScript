import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { NuevoRoutingModule } from "./Nuevo-routing.module";
import { NuevoComponent } from "./Nuevo.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NuevoRoutingModule
    ],
    declarations: [
        NuevoComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class NuevoModule { }
