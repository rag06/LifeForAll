import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { RequesterComponent } from "~/app/requester/requester.component";
import { RequesterRoutingModule } from "~/app/requester/requester-routing.module";
import { SharedModule } from "~/app/shared/shared.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SharedModule,
        RequesterRoutingModule
    ],
    declarations: [
        RequesterComponent
        
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RequesterModule { }
