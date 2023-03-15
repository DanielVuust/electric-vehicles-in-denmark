import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ECarForm } from 'src/app/interfaces/e-car-form';
import { ECarData } from 'src/app/interfaces/e-cars-data';
import { ECarsService } from 'src/app/services/e-cars.service';

@Component({
  selector: 'app-e-cars-table',
  templateUrl: './e-cars-table.component.html',
  styleUrls: ['./e-cars-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ECarsTableComponent {
  input: string = "";
  eCars$ : Observable<ECarData[]>; 
  displayedColumns: string[] = ['rank', 'model', 'quantity', 'changeQuantityPercent', 'delete'];

  expandedElement: ECarData | null | undefined;
  constructor(private service: ECarsService) {
    this.eCars$ = this.service.getECars$();
  }
  
  eCarForms: ECarForm[] = [];
  getECarForm(element: ECarData): FormGroup{

    if(!this.eCarForms.some((x:ECarForm) => x.car.id == element.id)){
      this.eCarForms.push({
          form: new FormGroup({
            carModel: new FormControl(element.model),
            carSoldCount: new FormControl(element.quantity),
            carSoldChangePercentage: new FormControl(element.changeQuantityPercent)
          }), 
          car: element
        }
      );
    }
    return this.eCarForms.find((x:ECarForm) => x.car.id == element.id)?.form!;
    
  }
  removeECar(id: number){
    this.service.removeECar(id);
  }
  onSubmit(id: number){
    this.service.removeECar(id);
    let car = this.eCarForms.find((x:ECarForm) => x.car.id == id)!.form.value;
    this.service.addECar({
      id: this.service.eCarsTop25_2022.length,
      rank: null,
      model: car.carModel,
      quantity: car.carSoldCount,
      changeQuantityPercent: car.carSoldChangePercentage
    });

  }
}
