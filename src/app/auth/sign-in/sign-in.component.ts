import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
    signInForm: FormGroup;

    constructor(private fb: FormBuilder, private router: Router) {
        this.createForm();
    }

    createForm(): void {
        this.signInForm = this.fb.group({
            'userName': ['', Validators.required],
            'password': ['', Validators.required]
        });
    }

    signIn() {
        if (this.signInForm.valid) {
            this.router.navigate(['dashboard']);
        } else {

        }
    }

    ngOnInit() {
        
    }
}
