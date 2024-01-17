import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PippoComponent } from './pippo/pippo.component';
import { EvidenziaDirective } from './directives/evidenzia.directive';
import { SortingLoopDirective } from './directives/sorting-loop.directive';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    PippoComponent,
    EvidenziaDirective,
    SortingLoopDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
