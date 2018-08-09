import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from '../models/user.interface';
import {Observable} from '../../node_modules/rxjs/Observable'

@Injectable()

export class UserProvider {

  constructor(public http: HttpClient) {

  }

  getUser(username): Observable<User> {

    var url = 'https://api.github.com/users/'+username;

    return this.http.get<User>(url);

  }

}