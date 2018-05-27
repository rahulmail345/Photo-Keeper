import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../service/users.service';
import { UsersInterface } from './../../interface/users.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {

  _usersArray: UsersInterface[];
  constructor(private userService: UsersService) {}

  getUsers():void {
    this.userService.getUsers()
                    .subscribe(
                      resultArray => this._usersArray = resultArray,
                      error => console.log("Error :: ", error)
                    )
  }
  ngOnInit():void {
    this.getUsers();
  }

}
