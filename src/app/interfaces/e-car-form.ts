import { FormGroup } from '@angular/forms';
import { ECarData } from './e-cars-data';
export interface ECarForm {
    form: FormGroup;
    car: ECarData;
}
