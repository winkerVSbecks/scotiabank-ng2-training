import { Injectable } from '@angular/core';
import { ServerService } from './server.service';

@Injectable()
export class UsersService {

  users = {};

  constructor(private serverService: ServerService) {}

  getUser(id) {
    this.serverService
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .subscribe(user => {
        this.users[user.id] = user;
      });
  }

  getAuthorName(id) {
    return this.users[id] ?
      this.users[id].name :
      'N/A';
  }

}
