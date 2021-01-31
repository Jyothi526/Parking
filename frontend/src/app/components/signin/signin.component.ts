import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../issue.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private issueService : IssueService) { }

  ngOnInit(): void {
    this.issueService.getUsers().subscribe((issues) => {
      console.log(issues);
    });
  }

}
