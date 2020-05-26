import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { RequesterComponent } from "~/app/requester/requester.component";


const routes: Routes = [
    { path: "", component: RequesterComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class RequesterRoutingModule { }
