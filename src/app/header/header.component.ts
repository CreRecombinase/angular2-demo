import { Component, Input, ElementRef, OnInit } from '@angular/core';
import { scrollTo, debounce } from '../../common/utils/utils'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


    @Input() names;
    @Input() links;

    private headerClass: string = '';
    private sections: any;
    private rect: any;
    private active: string;
    private element: HTMLElement;

    constructor(element: ElementRef) {
        this.element = element.nativeElement;
    }

    ngOnInit() {
        this.rect = this.element.getBoundingClientRect();

        let sections = document.getElementsByClassName('content-section');
        this.sections = Array.from(sections).map((s) => ({
            id: s.id,
            rect: s.getBoundingClientRect()
        }));

        window.addEventListener('scroll', this.scroll.bind(this));
    }

    @debounce(5)
    scroll(ev) {
        const yOffset = window.window.pageYOffset;
        this.headerClass = yOffset > this.rect.height ? 'scrolled' : '';

        if (yOffset === 0) {
            this.active = '';
            return;
        }

        for (let section of this.sections) {
            if (yOffset >= section.rect.top &&
                yOffset <= (section.rect.top + section.rect.height)) {
                this.active = section.id;
            }
        }
    }

    isActive(i) {
        if (this.active === ('section-' + i)) return 'active';
        return '';
    }

    scrollTo(ev, i) {
        ev.preventDefault();
        let dest = document.getElementById(`section-${i}`);
        scrollTo(dest.offsetTop, 500);
    }

}
