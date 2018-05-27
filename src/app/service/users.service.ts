import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { UsersInterface } from './../interface/users.interface';

@Injectable()
export class UsersService {
  private _usersURL = "http://jsonplaceholder.typicode.com/users";

  constructor(private http:Http) { }

  getUsers(): Observable<UsersInterface[]> {
    return this.http.get(this._usersURL)
                    .map((response: Response) => {
                      return <UsersInterface[]>response.json();
                    })
                    .catch(this.handleError);
  }

  private handleError(error: Response){
    return Observable.throw(error.statusText);
  }
}
