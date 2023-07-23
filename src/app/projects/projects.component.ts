import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects=[
    {
      "id":1,
      "title": "TaxSeekho",
      "details":"klncklwdncjnlcjn",
      "link" : "http://www.taxseekho.in/"
    },
    {
      "id":2,
      "title": "Metro Slot Booking System",
      "details":"hwkxjkwnckw",
      "link":""
    },
    {
      "id":3,
      "title":"Enactus DSC",
      "details":"",
      "link":""
    },
    {
      "id":4,
      "title":"Cab booking System",
      "details":"xsklixsj",
      "link":""
    }
  ]
}
