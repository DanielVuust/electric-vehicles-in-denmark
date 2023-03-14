import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ECarsData } from 'src/app/interfaces/e-cars-data';
import { ECarsService } from 'src/app/services/e-cars.service';

@Component({
  selector: 'app-e-cars-table',
  templateUrl: './e-cars-table.component.html',
  styleUrls: ['./e-cars-table.component.css']
})
export class ECarsTableComponent {
  obs : Observable<ECarsData[]> | undefined; 
  service: ECarsService = new ECarsService();

  constructor() {
    this.obs = this.service.getOb();
  }
}
