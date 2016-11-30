import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  constructor(
    private postsService: PostsService,
    private usersService: UsersService
  ) {}

  query: string = '';

  ngOnInit() {
  }

}
