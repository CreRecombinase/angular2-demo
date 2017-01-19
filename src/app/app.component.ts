import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    links: string[] = [
        'We\'re Getting Married!',
        'When & Where',
        'Travel & Accommodations',
        'Registry',
        'RSVP'
    ];

    names: string = 'Nick and Sofia';
}
