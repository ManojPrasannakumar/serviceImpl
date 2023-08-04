import { Component } from '@angular/core';
import { UserServService } from '../../services/user-serv.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {
  userdata:any=[];

constructor (private userServ:UserServService){
  console.log('user table from service',userServ.userdata);
  this.userdata = userServ.userdata;
}
}
