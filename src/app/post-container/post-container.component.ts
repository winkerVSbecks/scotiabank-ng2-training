import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';
import { UsersService } from '../users.service';
import 'rxjs/add/operator/mergemap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.css']
})
export class PostContainerComponent implements OnInit {

  post: any = {};

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.route.params
      .map(params => Number(params['id']))
      .mergeMap(id => this.postsService.getPost(id))
      .subscribe((post) => {
        this.post = post;
      });
  }

}
