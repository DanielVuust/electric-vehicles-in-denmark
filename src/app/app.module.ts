import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ECarsTableComponent } from './components/e-cars/e-cars-table/e-cars-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ECarsCreationFormComponent } from './components/e-cars/e-cars-creation-form/e-cars-creation-form.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MorseMd5Pipe } from './pipes/morse-md5.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ECarsTableComponent,
    ECarsCreationFormComponent,
    MorseMd5Pipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NoopAnimationsModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
