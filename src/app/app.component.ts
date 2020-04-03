import { Component } from '@angular/core';

@Component({
    // must be called the same as index.html
    selector: 'app-root',
    template: `<h2>Hello World!</h2>`,
    styles: [
        `
        h2 {
            font-family: sans-serif;
            font-size: 1.2em;
        }
        `
    ]
    
})
export class AppComponent {

}