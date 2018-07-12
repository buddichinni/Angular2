import { Component, OnInit,AfterViewChecked  } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Observable } from 'rxjs';
import { Http, Response,Headers,RequestOptions } from '@angular/http';
import { apiService } from 'app/api-service.service';
import { chartDataInterface,userDataInterface } from 'app/DataInterface';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

declare var $: any;
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  observablechartData: Observable<chartDataInterface[]>
  observableuserData: Observable<userDataInterface[]>
  outputuserData:userDataInterface[];
  outputchartData: chartDataInterface[];
  errorMessage: String;
  obj:Observable<any>;  
  constructor(private activatedRoute: ActivatedRoute,private apiService: apiService,private http:Http) { }
  public getJSON(): Observable<any> {
    return this.http.get("D:\Purnima\My projects\Angular2\src\assets\data\books.json")
                    .map(<obj>(res:any) => res.json())
                    .catch((error:any) => error);

}
  show:boolean=false;
  userDetails=[];
  ngOnInit() { 

  this.obj=this.getJSON();

  //To get the parameter of URL START
    this.activatedRoute.params.subscribe((params: Params) => {
      let parameter = params['parameterValue'];      
      if(parameter=="toys")
      this.show=true;
      else if(parameter=="chocoalates")
      this.show=false;
      var text="text"
    });
    ////To get the parameter of URL END

    ///Return data from URL START
    this.observablechartData = this.apiService.getChartDataWithObservable();
    var data= this.observablechartData.subscribe(
      data => this.outputchartData = data,
      error =>  this.errorMessage = <any>error);
    this.observableuserData = this.apiService.getuserDataWithObservable();
    var data= this.observableuserData.subscribe(
      data => this.outputuserData = data,
      error =>  this.errorMessage = <any>error);
     }
    ///Return data from URL End   

    ///Post data to URL START
     updateUserDetails(userDetails){
      userDetails.id="USR0000009";
      userDetails.Created_By="afe";
      userDetails.Modified_By="jhg";
      userDetails.Is_Tenant=false;
      //userDetails.Reports_To="fff";
      userDetails.Tenant_ID="fff";
      //userDetails.Territory_ID="fff";
      //userDetails.User_Key="fff";
      userDetails.User_ID="fff";
      userDetails.Hierarchy_ID="fff";
      userDetails.Hierarchy_Name="dsdf";
      userDetails.Is_Hierarchy=false;
      userDetails.Password="test";
      userDetails.Email_Password="test";
      userDetails.Mail_To_Tenant=false;
      userDetails.Mail_To_User=false;
      userDetails.Role_ID=[];
      this.apiService.postuserDataWithObservable(userDetails).subscribe(data=>{});       
     }
    ///Post data to URL END

     ngAfterViewChecked() {
      $("#optionsInput").off().on('click', function() {
        $("#optionsInput").html()
       });
       var m=0;
        $("#optionsInput").click(function(){  
          m++;
          $('#input_fields_wrap').append('<div class="ansDiv"><input type="text" name="mytext[]"/><a href="#" class="remove_field">x</a></div>');
        }); 
        $(".remove_field").click(function(e){
          $(this).closest(".ansDiv").remove();
          e.preventDefault();          
        });             
      }       
}
