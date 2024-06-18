import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from 'backend/services/signup/signup.service';
declare const confPwd:any
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm!: FormGroup
  constructor(private fb: FormBuilder, private signupService: SignupService) { }

  ngOnInit(): void {
    confPwd()
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(9), Validators.minLength(6)]],
      confPwd:['', [Validators.required]],
      tel: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(8)]],
    })
  }



  signup(x:any){
this.signupService.signup(this.signupForm.value).subscribe(
  (data)=>{
    console.log('success', data.message);
    
  }
)
  }
}
