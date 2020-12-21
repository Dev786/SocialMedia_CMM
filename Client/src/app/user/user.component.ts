import { UserServiceService } from './../user-service.service';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user;
  public friends: any[];
  private limit: number;
  private offset: number;
  public totalFriends: number;
  public shouldShowFriends: boolean;

  constructor(private userService: UserServiceService) { }
  ngOnInit(): void {
    this.limit = 20;
    this.offset = 0;
    this.shouldShowFriends = false;
    this.getTotalFriends();
  }

  showFriends() {
    this.shouldShowFriends = !this.shouldShowFriends;
  }

  getTotalFriends() {
    this.userService.getTotalFriends(this.user.id)
      .subscribe((data) => {
        this.totalFriends = data.data[0].count;
        this.getFriends();
      })
  }

  getFriends() {
    this.userService.getFriends(this.user.id, this.limit, this.offset)
      .subscribe(data => {
        this.friends = data.data;
      })
  }
}
