import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ECarData } from 'src/app/interfaces/e-cars-data';
import { ECarsService } from 'src/app/services/e-cars.service';

@Component({
  selector: 'app-e-cars-table',
  templateUrl: './e-cars-table.component.html',
  styleUrls: ['./e-cars-table.component.css']
})
export class ECarsTableComponent {
  eCars$ : Observable<ECarData[]> | undefined; 

  constructor(private service: ECarsService) {
    this.eCars$ = this.service.getECars$();
  }
  removeECar(id: number){
    this.service.removeECar(id);
  }
}
