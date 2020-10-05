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

  constructor(private userService: SearchService) { }

  ngOnInit(): void {
    this.userService.getInfo().subscribe((response: any) => {
      this.repos = response;
      console.log(response);

    });
    this.userService.getUsers().subscribe((response: any) => {
      this.users = response;
      console.log(response);
    });
  }
}
