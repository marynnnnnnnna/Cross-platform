import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  constructor() {}

  write (LogMessage:string){
    console.log(LogMessage);
  }
}
