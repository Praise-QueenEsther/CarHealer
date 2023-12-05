
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  submitted = false;
  emailRegex: any = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
  passRegex:any ='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$'; 
  constructor(){}

  ngOnInit(){
   
  }

  myForm=new FormGroup({
    emailForm:new FormControl("", [Validators.required,Validators.email,Validators.pattern(this.emailRegex)]),
    passwordForm: new FormControl("",[ Validators.required,Validators.pattern(this.passRegex)]),
  
  })

  formSubmit(){
    this.submitted = true;
    if(this.myForm.valid){
      const email=this.myForm.get("emailForm")!.value;
      const password=this.myForm.get("passwordForm")!.value
      console.log(email)
      console.log(password);
     
      this.myForm.reset();
      this.submitted = false; 
    }
    

  }
}
