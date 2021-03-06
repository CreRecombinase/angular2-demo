import { Component } from 'angular2/core';
import { NgForm } from 'angular2/common';
import { RsvpModel } from './RsvpModel';

@Component({
    selector: 'rsvp-form',
    directives: [NgForm],
    template: `
    <div class="inner">
      <h3>
        <img src="assets/date.png"/>
        RSVP
      </h3>
      
      <form 
        [hidden]="submitted" 
        id="rsvp" 
        (ngSubmit)="onSubmit()"
        #rsvp="ngForm"
        name="rsvp">
        
        <input 
          type="text" 
          [(ngModel)]="model.name"
          ngControl="name"  
          #name="ngForm"
          required 
          placeholder="Your name" 
        />

        <input 
          type="text" 
          [hidden]="!model.guest"
          placeholder="Name of guest"
          [(ngModel)]="model.guestnames"
          ngControl="guestnames"  
          #seats="ngForm"
        />

        <input 
          type="checkbox" 
          id="attending"
          [(ngModel)]="model.attending"
          ngControl="attending"  
          #attending="ngForm"
        />
        <label for="attending">Attending</label>
<br [hidden]="!model.attending">

<input
          type="checkbox"
          [hidden]="!model.attending"
          [(ngModel)]="model.guest"
          ngControl="guest"
          #guest="ngForm"
        />
        <label [hidden] ="!model.attending" for ="guest">Bringing a Guest?</label>
<br [hidden]="!model.attending">


        

<input
   type = "checkbox"
   [hidden]="!model.attending"
   [(ngModel)]="model.songrequest"
   ngControl="songrequest"
   #guest="ngForm"
/>
<label [hidden] ="!model.attending" for ="songrequest">Have a song request?</label>
<br [hidden]="!model.attending">
        <label [hidden] ="!model.songrequest" for ="artist" font-size=20px>I will dance to the beat of </label>
        <input 
          type="text" 
          [hidden]="!model.songrequest"
          placeholder="Artist"
          [(ngModel)]="model.artist"
          ngControl="artist"  
          #seats="ngForm"
        />

        <label [hidden] ="!model.songrequest" for ="songrequestsong">by </label>
        <input 
          type="text" 
          [hidden]="!model.songrequest"
          placeholder="Song"
          [(ngModel)]="model.song"
          ngControl="song"  
          #seats="ngForm"
        />

        <button 
          type="submit" 
          [disabled]="!rsvp.form.valid">
            Submit
        </button>
      </form>
      
    </div>
  `
})
export class RsvpComponent {

    model: RsvpModel = new RsvpModel();
    submitted: boolean = false;

    onSubmit() {
        this.submitted = true;
        alert('Thanks for letting us know!');
        console.log('Form Model:', this.model);
    }

}
