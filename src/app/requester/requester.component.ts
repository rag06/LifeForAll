import { Component, OnInit } from "@angular/core";
import * as app from "tns-core-modules/application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { ItemEventData } from "tns-core-modules/ui/list-view/list-view";
import { UserCard } from "~/app/shared/user-card/user-card.model";

@Component({
    selector: "Requester",
    templateUrl: "./requester.component.html",
    styleUrls: ["./requester.component.css"]
})
export class RequesterComponent implements OnInit {

    requesterList:UserCard [] = [
        {fullName: "Anurag Singh", gender: "Male", date: "12th March, 2020", image: null, userId: "ss-ss-ss", bloodGroup:"AB+"},
        {fullName: "Anurag Singh", gender: "Male", date: "12th March, 2020", image: null, userId: "ss-ss-ss", bloodGroup:"AB+"},
        {fullName: "Anurag Singh", gender: "Male", date: "12th March, 2020", image: null, userId: "ss-ss-ss", bloodGroup:"AB+"},
        {fullName: "Anurag Singh", gender: "Male", date: "12th March, 2020", image: null, userId: "ss-ss-ss", bloodGroup:"AB+"},
        {fullName: "Anurag Singh", gender: "Male", date: "12th March, 2020", image: null, userId: "ss-ss-ss", bloodGroup:"AB+"},
        {fullName: "Anurag Singh", gender: "Male", date: "12th March, 2020", image: null, userId: "ss-ss-ss", bloodGroup:"AB+"},
        {fullName: "Anurag Singh", gender: "Male", date: "12th March, 2020", image: null, userId: "ss-ss-ss", bloodGroup:"AB+"},
        {fullName: "Anurag Singh", gender: "Male", date: "12th March, 2020", image: null, userId: "ss-ss-ss", bloodGroup:"AB+"},
        {fullName: "Anurag Singh", gender: "Male", date: "12th March, 2020", image: null, userId: "ss-ss-ss", bloodGroup:"AB+"},
        {fullName: "Anurag Singh", gender: "Male", date: "12th March, 2020", image: null, userId: "ss-ss-ss", bloodGroup:"AB+"},
        {fullName: "Anurag Singh", gender: "Male", date: "12th March, 2020", image: null, userId: "ss-ss-ss", bloodGroup:"AB+"},
        {fullName: "Anurag Singh", gender: "Male", date: "12th March, 2020", image: null, userId: "ss-ss-ss", bloodGroup:"AB+"},
        {fullName: "Anurag Singh", gender: "Male", date: "12th March, 2020", image: null, userId: "ss-ss-ss", bloodGroup:"AB+"},
        {fullName: "Anurag Singh", gender: "Male", date: "12th March, 2020", image: null, userId: "ss-ss-ss", bloodGroup:"AB+"},
        {fullName: "Anurag Singh", gender: "Male", date: "12th March, 2020", image: null, userId: "ss-ss-ss", bloodGroup:"AB+"},
        {fullName: "Anurag Singh", gender: "Male", date: "12th March, 2020", image: null, userId: "ss-ss-ss", bloodGroup:"AB+"}
    ];

    onItemTap(args: ItemEventData): void {
        console.log('Item with index: ' + args.index + ' tapped');
    }
    
    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
