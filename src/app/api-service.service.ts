import { Injectable } from '@angular/core';
import { Http, Response,Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { chartDataInterface,userDataInterface } from './DataInterface';
import { retry } from 'rxjs/operator/retry';
import { error } from 'util';
import { Console } from '@angular/core/src/console';
import { from } from 'rxjs/observable/from';

@Injectable()
export class apiService {    
    getCharturl = "http://localhost:34351/api/Dashboard/GetChartOrder/USR0000003";
    getUserurl="http://localhost:34351/api/account/GetUsersByTenant/TNT0000002/USR0000003";
    postUserURL="http://localhost:34351/api/account/UpdateUser/";   
    constructor(private http:Http) { }
  getChartDataWithObservable(): Observable<chartDataInterface[]> {
      return this.http.get(this.getCharturl)
        .map(this.extractData)
        .catch(this.handleErrorObservable);
  }  
  getuserDataWithObservable(): Observable<userDataInterface[]> {
    return this.http.get(this.getUserurl)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }  
  postuserDataWithObservable(userDataInterface1):Observable<userDataInterface>{
    var body = {'id':userDataInterface1.id,'User_Name':userDataInterface1.User_Name,
    'User_Key':userDataInterface1.User_Key,'Territory_ID':userDataInterface1.Territory_ID,
    'Tenant_ID':userDataInterface1.id,'Reports_To':userDataInterface1.User_Name,
    'Is_Tenant':userDataInterface1.id,'Email':userDataInterface1.User_Name,
    'Created_Date':userDataInterface1.id,'Created_By':userDataInterface1.User_Name,};
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');    
      return this.http.post(this.postUserURL,body,{headers:headers})
      .map(this.extractData)
      .catch(this.handleErrorObservable);
   }
    private extractData(res: Response) {
      	let body = res.json();
        return body;
    }
    private handleErrorObservable (error: Response | any) {
      	console.error(error.message || error);
	      return Observable.throw(error.message || error);
    }
} 