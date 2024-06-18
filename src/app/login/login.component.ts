import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from 'backend/services/signup/signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:any={}
users:any={};
msgError:any
  constructor(private signupService: SignupService, private router: Router) { }

  ngOnInit(): void {
  }


  login(){
    this.signupService.login(this.user).subscribe(
      (data)=> {
        this.users = this.user
        console.log('Data after login',data);
        if (data.message == '0') {
          this.msgError = 'Please Check your email';
        } else  if (data.message == '1')  {
          this.msgError = 'Please Check your PWD';
        } else if (this.user.email == "oussamamessaoudi94@gmail.com") {
          console.log();
          localStorage.setItem("connectedUser",JSON.stringify(data.user));
          this.router.navigate(['indexAdmin'])
          
        }
        else
        
        this.router.navigate(['index-user'])
        localStorage.setItem("connectedUser",JSON.stringify(data.user));
      }
    ); 
  }
}
