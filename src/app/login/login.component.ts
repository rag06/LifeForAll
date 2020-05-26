import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

    constructor(private _page: Page,
        private _routerExtensions: RouterExtensions) {
        this._page.actionBarHidden = true;
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
    submitLogin () {
        this._routerExtensions.navigate(["/home"], { clearHistory: true });
    }
    submitRegister () {
        this._routerExtensions.navigate(["/home"], { clearHistory: true });
    }
}
