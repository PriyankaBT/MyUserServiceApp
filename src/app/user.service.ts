import { Injectable } from '@angular/core';
import { User } from './user-list/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList1: Array<User>;
  constructor() {
    this.userList1 = [
      {id: 1, firstName :'Priyanka', lastName :'Murkute',email :'abc@yahoo.com', profession:'Trainer',dob: new Date(1986, 11, 25), imageUrl:'assets/IMG1.jpeg'},
      {id: 2, firstName :'Jayesh', lastName :'Murkute',email :'aa@gmail.com', profession:'Chartered Accountant',dob: new Date(1987, 3, 1), imageUrl:'assets/IMG2.jpeg'},
      {id: 3, firstName :'Bhupendra', lastName :'Murkute',email :'xyz@gmail.com', profession:'SOFTWARE eNGINEER',dob:new Date(1988, 3, 15), imageUrl:'assets/IMG1.jpeg'}    
    ]
   }

  

  getUsers():User[] {return this.userList1}
 
  getUserById(id:number) {}
  addUser(user:User){}
  deleteUser(id:number){}
updateUser(user:User) {} 

}
