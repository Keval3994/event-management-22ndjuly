import {Component,OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {UserModel} from '../models/user.model';
@Component({

    selector : 'user-list',
    templateUrl : 'app/users/views/user-list.component.html'
})

export class UserListComponent{

  userList []: UserModel;
  selectedUser : UserModel;
  constructor(private userService : UserService){
  console.log(userService)
  }
  ngOnInit(){
 this.userService.getAllUser().subscribe(
  data => this.userList=data,
            err => alert(err),
            () => console.log("Completed"+this.userList[0].address.street)
  )


  }

  getUserDetails(userModel : UserModel): void{
      console.log(userModel)
      this.selectedUser=this.userModel;
  }
}
