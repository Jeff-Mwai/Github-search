import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {
  users: any[] = [];
  repos: any[] = [];
  userName: string;
  search: string;

  constructor(private userService: SearchService) {
    this.userName = 'Jeff-Mwai'
  }

  ngOnInit(): void {
    this.userService.getInfo(this.userName).subscribe((response: any) => {
      this.repos = response;

    });
    this.userService.getUsers(this.userName).subscribe((response: any) => {
      this.users = response;
      console.log(response);

    });

  }
  onSearch() {
    this.userName = this.search
    this.ngOnInit()
  }
}
