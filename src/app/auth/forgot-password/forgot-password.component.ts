import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { patternValidator } from 'app/shared/validators/pattern-validator';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm : FormGroup

  constructor(private fb: FormBuilder) {
    this.createForm();
   }

  createForm():void{
    this.forgotPasswordForm = this.fb.group({
      'email': ['', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    });
  }

  sendPassword(){
    if (this.forgotPasswordForm.valid) {
    } else {

    }
  }

  ngOnInit() {
  }

}
