import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { concatWith, of, Observable } from 'rxjs';
import { Md5 } from 'ts-md5';

@Pipe({
  name: 'morseMd5'
})
export class MorseMd5Pipe implements PipeTransform {

constructor(private http: HttpClient) {
}
    transform(value: string, arg: string): Observable<any> | null {
     if(arg == "morse"){
      //NOTE: not the best way to do this but ey its an pipe. 
      const headers = { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}  
      return this.http.get("https://api.funtranslations.com/translate/morse.json?text=" + value, { 'headers': headers });
       
    }
    else if(arg == "md5"){
      const md5 = new Md5();
      return of(md5.appendStr(value).end());
    }
    return null;
  }

}
