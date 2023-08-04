import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServService {
  userdata = ['me'];
  constructor() { }

  addData= (data: any) => {
    this.userdata.push(`${data}-${Math.random()}`);
  }
}
