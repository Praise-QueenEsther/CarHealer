import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,AbstractControl } from '@angular/forms';




@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  // myForm!: FormGroup; 
  submitted = false;
  emailRegex: any = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
  passRegex:any ='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$'; 
  constructor(){}

  ngOnInit(){
   
  }

   confirmPasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('passwordForm')?.value;
    const confirmPassword = control.value;
  
    if (password !== confirmPassword) {
      return { 'passwordMismatch': true };
    }
  
    return null;
  }            
  

  myForm=new FormGroup({
    emailForm:new FormControl("", [Validators.required,Validators.email,Validators.pattern(this.emailRegex)]),
    passwordForm: new FormControl("",[ Validators.required,Validators.pattern(this.passRegex)]),
    confirmPasswordForm: new FormControl("",[ Validators.required, this.confirmPasswordValidator]),
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
