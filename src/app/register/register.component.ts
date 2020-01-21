import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validator } from '@angular/forms';
@Component({
  selector: 'app-register',
  template:`
  <form [formGroup]="fg" (ngSubmit)="Register(fg.value)">
    <div>  
      <label>username</label>
      <input type="text" [formControl]="fg.controls['username']">
    </div>
    <div>  
      <label>password</label>
      <input type="password" [formControl]="fg.controls['password']">
    </div>
    <div>  
      <label>Age</label>
      <input type="text" [formControl]="fg.controls['age']">
    </div>
    <div>  
      <input type="submit" value="Register">
    </div>
    
  </form>
  
  ` 
})
export class RegisterComponent  {
  fg:FormGroup;

  constructor(private Fb:FormBuilder){
    this.fg = this.Fb.group({
      'username':'',
      'password':'',
      'age':0
    })
  }
  Register(temp:any){
    console.log(temp);
  }
}
