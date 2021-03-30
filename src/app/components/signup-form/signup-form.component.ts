import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  /*
  myValidationPassword=(control: AbstractControl): {[key: string]: boolean} | null=>{
    if(!control.value.match(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,})){
      return {invalidPassword : true}
    }
    return null
  }
*/
  form:FormGroup;
  constructor(builder:FormBuilder) { 
    this.form= builder.group({
      username:["", Validators.required],
      email:["", Validators.required],
      password:["", Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])],
    })
  }


  ngOnInit(): void {
  }

  onSubmit(form:any){
    console.log("form", form);
    console.log({form})
  }

}
