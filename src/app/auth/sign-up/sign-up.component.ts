import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Router} from "@angular/router";
import { patternValidator } from 'app/shared/validators/pattern-validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  
  constructor(private fb: FormBuilder, private router: Router) {
      this.createForm();
  }

  createForm(): void {
    this.signUpForm = this.fb.group({
        'userName': ['', Validators.required],
        'email': ['', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
        'password': ['', Validators.required]
    });
  }

  signUp() {
      if (this.signUpForm.valid) {
          this.router.navigate(['dashboard']);
      } else {

      }
  }

  ngOnInit() {
  }

}

