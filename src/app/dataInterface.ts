import { Data } from "@angular/router/src/config";

export interface chartDataInterface {
Created_Date:Date
Modified_Date:Date
charts_order:string
id:string
is_active:boolean
user_id:string
user_name:string
}
export interface userDataInterface{
    Created_By:string
    Modified_By:Date
    Is_Tenant:boolean
    User_ID:string
    Hierarchy_ID:string
    Hierarchy_Name:string
    Is_Hierarchy:boolean
    Password:string
    Email_Password:string
    Email:string
    Mail_To_Tenant:boolean
    Mail_To_User:boolean
    Tenant_ID:string
    Role_ID:string[]
    //User_Key:string
    User_Name:string
    id:string
}