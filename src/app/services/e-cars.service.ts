import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { ECarData } from '../interfaces/e-cars-data';

@Injectable({
  providedIn: 'root'
})
export class ECarsService {
  eCarsTop25_2022: Array<ECarData> = [
    {id: 1,  rank: 1, model: 'Skoda Enyaq', quantity: 1044, changeQuantityPercent: 284},
    {id: 2,  rank: 2, model: 'Tesla Model Y', quantity: 989, changeQuantityPercent: 100},
    {id: 3,  rank: 3, model: 'Polestar 2', quantity: 836, changeQuantityPercent: 1990},
    {id: 4,  rank: 4, model: 'Audi Q4', quantity: 816, changeQuantityPercent: 586},
    {id: 5,  rank: 5, model: 'Ford Mustang Mach-E', quantity: 659, changeQuantityPercent: 1333},
    {id: 6,  rank: 6, model: 'Kia EV6', quantity: 520, changeQuantityPercent: 100},
    {id: 7,  rank: 7, model: 'VW ID.4', quantity: 458, changeQuantityPercent: -61},
    {id: 8,  rank: 8, model: 'Volvo XC40', quantity: 416, changeQuantityPercent: 100},
    {id: 9,  rank: 9, model: 'Hyundai Ioniq 5', quantity: 365, changeQuantityPercent: 100},
    {id: 10, rank: 10, model: 'Hyundai Kona', quantity: 359, changeQuantityPercent: -24},
    {id: 11, rank: 11, model: 'Tesla Model 3', quantity: 350, changeQuantityPercent: -68},
    {id: 12, rank: 12, model: 'Kia Niro', quantity: 346, changeQuantityPercent: -16},
    {id: 13, rank: 13, model: 'Peugeot 208', quantity: 330, changeQuantityPercent: 131},
    {id: 14, rank: 14, model: 'VW ID.3', quantity: 329, changeQuantityPercent: -54},
    {id: 15, rank: 15, model: '	Cupra Born', quantity: 298, changeQuantityPercent: 100},
    {id: 16, rank: 16, model: 'Mercedes-Benz EQA', quantity: 289, changeQuantityPercent: 51},
    {id: 17, rank: 17, model: 'VW Up', quantity: 229, changeQuantityPercent: 332},
    {id: 18, rank: 18, model: 'VW ID.5', quantity: 226, changeQuantityPercent: 100},
    {id: 19, rank: 19, model: 'Mercedes-Benz EQB', quantity: 224, changeQuantityPercent: 100},
    {id: 20, rank: 20, model: 'Fiat 500', quantity: 202, changeQuantityPercent: -40},
    {id: 21, rank: 21, model: 'Renault Zoe', quantity: 185, changeQuantityPercent: -18},
    {id: 22, rank: 22, model: 'Peugeot 2008', quantity: 169, changeQuantityPercent: 42},
    {id: 23, rank: 23, model: 'Audi E-tron', quantity: 168, changeQuantityPercent: 25},
    {id: 24, rank: 24, model: 'Dacia Spring', quantity: 160, changeQuantityPercent: 5233},
    {id: 25, rank: 25, model: 'BMW i4', quantity: 142, changeQuantityPercent: 100},
    
  ];
/**
 *
 */
constructor() {
  this.simulateLiveUpdates();
}
  private eCars$ : Subject<ECarData[]> = new BehaviorSubject<ECarData[]>(this.eCarsTop25_2022);
  private notifySubscribers(): void{
    this.eCars$.next(this.eCarsTop25_2022);
  }
  getECars$() : Observable<ECarData[]>{
    return this.eCars$.asObservable();
  }

  addECar(t: ECarData){
    this.eCarsTop25_2022.push(t);
    this.reorderCars();
    this.notifySubscribers();
  }
  removeECar(id: number){
    this.eCarsTop25_2022 = this.eCarsTop25_2022.filter(x => x.id != id);
    this.reorderCars();

    this.notifySubscribers();
  }
  updateECar(newECar: ECarData){
    this.removeECar(newECar.id);
    this.eCarsTop25_2022.push(newECar);
    this.reorderCars();
    this.notifySubscribers();
  }
  //Note: This is just for fun :)
  simulateLiveUpdates(){
    setInterval(() =>
    this.incrementRandomCarSoldCount(), 100
    )
  }
  private incrementRandomCarSoldCount(){
    this.eCarsTop25_2022[Math.floor(Math.random() * this.eCarsTop25_2022.length)].quantity++; 
    
    this.notifySubscribers();
  }
  private reorderCars(){
    this.eCarsTop25_2022 = this.eCarsTop25_2022.sort((n1,n2) => {
      if (n1.quantity > n2.quantity) {
          return -1;
      }
      if (n1.quantity < n2.quantity) {
          return 1;
      }
      return 0;
  });
  this.reRankCars();
  }
  private reRankCars(){
    this.eCarsTop25_2022.forEach((value, index) => {
      value.rank = index+1;
    })
  }

}
