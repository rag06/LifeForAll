import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MyDonationsComponent } from "./my-donations.component";
import { MyDonationsRoutingModule } from "./my-donations-routing.module";
import { SharedModule } from "~/app/shared/shared.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SharedModule,
        MyDonationsRoutingModule
    ],
    declarations: [
        MyDonationsComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MyDonationsModule { }
