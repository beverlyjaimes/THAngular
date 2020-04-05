import { Component } from '@angular/core';

@Component({
    // must be called the same as index.html
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
  
})
 // property needs to be first defined in the class
export class AppComponent {
    emoji = ['👽', '💀', '🧠'];
    activeEmoji: string; 
    changeEmoji() {
         this.activeEmoji = this.emoji[Math.floor(Math.random() * this.emoji.length)];
         console.log('change');
    }
    
}