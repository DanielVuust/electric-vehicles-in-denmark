import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ECarsTableComponent } from './components/e-cars/e-cars-table/e-cars-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ECarsCreationFormComponent } from './components/e-cars/e-cars-creation-form/e-cars-creation-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ECarsTableComponent,
    ECarsCreationFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
