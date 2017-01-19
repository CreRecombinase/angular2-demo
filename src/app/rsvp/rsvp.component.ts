import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RsvpModel } from './RsvpModel';

@Component({
    selector: 'rsvp-form',
    templateUrl: './rsvp.component.html',
    styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent {

    model: RsvpModel = new RsvpModel();
    submitted: boolean = false;
    onSubmit() {
        this.submitted = true;
        alert('Thanks for letting us know!');
        console.log('Form Model:', this.model);
    }
    ngOnInit() {
    }

}
