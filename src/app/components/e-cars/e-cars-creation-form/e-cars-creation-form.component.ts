import { Component } from '@angular/core';
import { ECarsService } from 'src/app/services/e-cars.service';

@Component({
  selector: 'app-e-cars-creation-form',
  templateUrl: './e-cars-creation-form.component.html',
  styleUrls: ['./e-cars-creation-form.component.css']
})
export class ECarsCreationFormComponent {
  constructor(private service: ECarsService) {
    
  }
  createRandomCar(){
    let r = (Math.random() + 1).toString(36).substring(7);
    this.service.addECar({
      id: this.service.eCarsTop25_2022.length,
      rank: null,
      model: r,
      quantity: Math.floor(Math.random() * 1000),
      changeQuantityPercent: 0
    })
  }
}
