import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  uri = 'http://localhost:3500';

  constructor(private http: HttpClient) { }
  private xyz={}
  public isloggedin=false;
  getUsers() {
    return this.http.get(`${this.uri}/user/getusers`);
  }

  getUserById(id) {
    return this.http.get(`${this.uri}/user/${id}`);
  }

  addUser(name, mail, password,gender,aadhar,license, phoneno,securityqun, securityans) {
    const user = {
              name:name,
              mail:mail,
              password:password,
              gender:gender,
              aadhar: aadhar,
              license : license,
              phoneno:phoneno,
              securityqun:securityqun,
              securityans:securityans
            
    };
    console.log(user);
    return this.http.post(`${this.uri}/user/registration`,user);
  }

  // updateUser(id, title, responsible, description, status) {
  //   const issue = {
  //     title: title,
  //     responsible : responsible,
  //     description : description,
  //     status : status
  //   };
  //   return this.http.post(`${this.uri}/issues/update/${id}`,issue);
  // }

  // deleteIssue(id) {
  //   return this.http.get(`${this.uri}/issues/delete/${id}`);
  // }


  login(mail,password){
    const user={
      mail:mail,
      password:password
    };
  
    return this.http.post(`${this.uri}/user/login`,user);}
   islogin(){
     this.isloggedin=true;
     if(this.isloggedin){
          return true;}
   } 
   islogout(){
     this.isloggedin=false
     
     return true;
     
   }
  forget(mail,securityqun,securityans,password){
  const user={
    mail:mail,
    securityqun:securityqun,
    securityans:securityans,
    password:password
  };
  return this.http.post(`${this.uri}/user/forget`,user);}
  
  saveuser(data){
     this.xyz={
      name:data[0].name,
        mail:data[0].mail,
        gender:data[0].gender,
        phoneno:data[0].phoneno,
        alternateph:data[0].alternateph,
        dob:data[0].dob,
        profilephoto:data[0].profilephoto,
        password:data[0].password,
  
        securityqun:data[0].securityqun,
        securityans:data[0].securityans
        
    }
    console.log(this.xyz);
     
  }
  getuser(){
    return this.xyz;
  }



}
