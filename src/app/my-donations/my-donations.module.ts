import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MyDonationsComponent } from "./my-donations.component";
import { MyDonationsRoutingModule } from "./my-donations-routing.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MyDonationsRoutingModule
    ],
    declarations: [
        MyDonationsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MyDonationsModule { }
