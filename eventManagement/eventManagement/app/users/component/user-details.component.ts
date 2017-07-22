import {Component,Input,OnChanges} from '@angular/core';
import {UserModel} from '../models/user.model';

@Component({
    selector : 'user-details',
    templateUrl : 'app/users/views/user-details.component.html'
    })

export  class UserDetailsComponent implements OnChanges{

@Input() selectedUserDetails : UserModel;
selected : UserModel= this.selectedUserDetails;
constructor(){
  this.selected = this.selectedUserDetails[0];
  console.log(this.selected)
}

}
