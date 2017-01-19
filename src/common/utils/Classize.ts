import { Pipe } from '@angular/core';

/**
 * Turns a name into a css class
 * @param  {'classize'}} {name [description]
 * @return {[type]}            [description]
 */
@Pipe({
    name: 'classize'
})
export class Classize {
    transform(name: string): string {
        return name.split(' ').join('');
    }
}
