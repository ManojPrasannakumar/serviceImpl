import { Component } from '@angular/core';
import { UserServService } from '../../services/user-serv.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

  userdata:any=[];

  constructor(private userServ:UserServService){
    console.log('user data from service',userServ.userdata);
    this.userdata = userServ.userdata;
  }

  addData(data:any){
    this.userServ.addData(data);
  }
}
