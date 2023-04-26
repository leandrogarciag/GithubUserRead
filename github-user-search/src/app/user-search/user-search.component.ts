import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent {
  username: any;
  user: any;
  searchAttempted: boolean = false;

  constructor(private http: HttpClient) {}

  searchUser(): void {
    this.searchAttempted = true;
    this.http.get(`https://api.github.com/users/${this.username}`).subscribe(
      (response: any) => {
        this.user = response;
      },
      (error) => {
        this.user = null;
      }
    );
  }
}
