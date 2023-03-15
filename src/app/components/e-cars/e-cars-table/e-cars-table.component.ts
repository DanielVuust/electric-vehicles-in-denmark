import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ECarData } from 'src/app/interfaces/e-cars-data';
import { ECarsService } from 'src/app/services/e-cars.service';

@Component({
  selector: 'app-e-cars-table',
  templateUrl: './e-cars-table.component.html',
  styleUrls: ['./e-cars-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ECarsTableComponent {
  eCars$ : Observable<ECarData[]>; 
  displayedColumns: string[] = ['rank', 'model', 'quantity', 'changeQuantityPercent', 'delete'];
  displayedColumnsForEdit: string[] = ['rank', 'editModel', 'editQuantity', 'editChangeQuantityPercent', 'save'];

  expandedElement: ECarData | null | undefined;
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
  loginData!: FormGroup;
  constructor(private service: ECarsService) {
    this.eCars$ = this.service.getECars$();
  }
  ngOnInit() {
    this.loginData = new FormGroup({
      username: new FormControl('camr@zbc.dk'),
      password: new FormControl('abchemmeligt')
   });
  }
  removeECar(id: number){
    this.service.removeECar(id);
  }
  onLoginSubmit(){

  }
}
