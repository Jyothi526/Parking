import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../issue.service';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Issue} from '../../issue.model';
import {FormGroup,FormBuilder,Validators,FormControl} from "@angular/forms";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  image;
  createForm:FormGroup;
  constructor(private http:HttpClient, private issueService : IssueService,private router:Router,private fb:FormBuilder,private snackbar:MatSnackBar) { 
    this.createForm=this.fb.group({
      
    name:["",Validators.required],
    mail:["",Validators.required],
    password:["",Validators.required],
    gender:"",
    aadhar : ["",Validators.required],
    license : ["",Validators.required],
    phoneno:["",Validators.required],
    securityqun:["",Validators.required],
    securityans:["",Validators.required],
     check:["",Validators.required]


    });
  }
  addUser(name,mail,password,gender,aadhar,license,phoneno,securityqun,securityans ){
    const formdata=new FormData();
    formdata.append('name',name);
    formdata.append('mail',mail);
    formdata.append('password',password);
    formdata.append('gender',gender);
    formdata.append('aadhar',aadhar);
    formdata.append('license',license);
    formdata.append('phoneno',phoneno);
    formdata.append('securityqun',securityqun);
    formdata.append('securityans',securityans);
    this.http.post<any>('http://localhost:3500/user/registration',formdata).subscribe(
      (res)=>{ this.snackbar.open("registration success",'ok',{duration:5000})},
      (err)=>{ this.snackbar.open("registration failure try again",'ok',{duration:5000})}
    )
  }
  // selectimage(event){
  //   if(event.target.files.length>0){
  //     const file=event.target.files[0];
  //     this.image=file;
  //   }
  // }
  

  ngOnInit(): void {
  }

}
