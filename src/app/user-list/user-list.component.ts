import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: Array<User>;

  constructor() { }

  ngOnInit(): void {
    this.userList = [
      {id: 1, firstName :'Priyanka', lastName :'Murkute',email :'AA', profession:'SS',dob: new Date(1986, 11, 25), imageUrl:'assets/IMG1.jpeg'},
      {id: 2, firstName :'Jayesh2', lastName :'Murkute',email :'AA', profession:'SS',dob: new Date(1987, 3, 1), imageUrl:'assets/IMG2.jpeg'},
      {id: 3, firstName :'Jayesh3', lastName :'Murkute',email :'AA', profession:'SS',dob:new Date(1988, 3, 15), imageUrl:'assets/IMG1.jpeg'}    
    ]
  }

  getDetails = (user) => {
    alert(JSON.stringify(user));
  }
}