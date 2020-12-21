import { UserServiceService } from './user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public totalUsers: number;
  public users: any[];
  public limit: number;
  public offset: number;
  constructor(private userService: UserServiceService) {

  }

  ngOnInit() {
    this.getTotalCount();
    this.limit = 10;
    this.offset = 0;
    this.users = [];
  }

  getTotalCount() {
    this.userService.getTotalUserCount()
      .subscribe(data => {
        if (data.success) {
          this.totalUsers = data.data[0].count;
          this.getAllUsers();
        } else {
          this.totalUsers = 0;
        }
      })
  }

  getAllUsers() {
    this.userService.getUsers(this.limit, this.offset)
      .subscribe(data => {
        if (data.success) {
          this.users = data.data;
        }
      })
  }
}
