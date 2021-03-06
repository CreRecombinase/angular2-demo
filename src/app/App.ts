import { Component } from 'angular2/core';
import { ParallaxComponent } from '../common/parallax/ParallaxComponent';
import { HeaderComponent } from './header/HeaderComponent';
import { RsvpComponent } from './rsvp/RsvpComponent';

@Component({
    selector: 'app',
    directives: [HeaderComponent, ParallaxComponent, RsvpComponent],
    templateUrl: 'src/app/app.html'
})
export class App {

    links: string[] = [
        'We\'re Getting Married!',
        'When & Where',
        'Travel & Accommodations',
        'Registry',
        'RSVP'
    ];

    names: string = 'Nick and Sofia';

}
