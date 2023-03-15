import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Pipe({
  name: 'morseMd5'
})
export class MorseMd5Pipe implements PipeTransform {

constructor(private http: HttpClient) {
  
}
  transform(value: string, arg: string): any {
    if(arg == "morse"){
      const headers = { 'content-type': 'application/json',"Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"}  
      console.log("gere");
      var i =  this.http.get("https://api.funtranslations.com/translate/morse.json?text=test",{'headers':headers});
      
      console.log("gere2");
      
      console.log(i);
      return i; 
    }
  }

}
