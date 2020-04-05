import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'
import {EntryListComponent} from './entries/entry-list/entry-list.component';

// tells angular to start app component at launch
    //  registers all of the apps components

@NgModule({
     imports: [BrowserModule],
     declarations: [
         AppComponent, 
         EntryListComponent
    ],
     bootstrap: [AppComponent]
})
export class AppModule {
    
}