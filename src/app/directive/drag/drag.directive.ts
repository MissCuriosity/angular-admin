import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appDrag]'
})

export class DragDirective {
    constructor(el: ElementRef) {
    }
}
