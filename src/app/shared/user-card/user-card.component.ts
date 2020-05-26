import { Component, OnInit, Input } from "@angular/core";
import { UserCard } from "~/app/shared/user-card/user-card.model";

@Component({
    selector: "user-card",
    templateUrl: "./user-card.component.html",
    styleUrls: ["./user-card.component.css"]
})
export class UserCardComponent implements OnInit {

    @Input() 
    user:UserCard;

    constructor() {
        // Use the component constructor to inject providers.
        this.user = new UserCard();
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
