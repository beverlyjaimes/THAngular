import { Component } from '@angular/core';

@Component({
    // must be called the same as index.html
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
  
})
export class AppComponent {
    // property needs to be first defined in the class
    emoji: string[] = ['👽', ' 💀', ' 🧠'];
    
}