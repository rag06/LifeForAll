import { Component, ViewChild } from "@angular/core";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent { 
    @ViewChild(RadSideDrawerComponent, { static: false })
     public drawerComponent: RadSideDrawerComponent;
    mainContentText: string = "SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component"
    + " has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
    onOpenDrawerTap() {
        this.drawerComponent.sideDrawer.showDrawer();
    }
    onCloseDrawerTap() {
        this.drawerComponent.sideDrawer.closeDrawer();
    }

    message = "You have successfully authenticated. This is where you build your core application functionality.";

    constructor(
        private _routerExtensions: RouterExtensions) {

    }
    onNavigationItemTap(ref) {
        console.log(ref);
        switch (ref) {
            case "home":
                this._routerExtensions.navigate(["/home"]);
                break;
            case "myDonations":
                this._routerExtensions.navigate(["/myDonations"]);
                break;
            case "requester":
                this._routerExtensions.navigate(["/requester"]);
                break;
        
            default:
                break;
        }
        this.drawerComponent.sideDrawer.closeDrawer();
    }

}
