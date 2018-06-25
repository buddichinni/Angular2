import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  show:boolean=false;
  
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let userId = params['parameterValue'];
      console.log(userId);
      alert("parameter value==>"+userId);
      if(userId=="toys")
      this.show=true;
      else if(userId=="chocoalates")
      this.show=false;
    });
  }

}
