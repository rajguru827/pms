import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { patternValidator } from 'app/shared/validators/pattern-validator';

@Component({
  selector: 'app-book-apartment',
  templateUrl: './book-apartment.component.html',
  styleUrls: ['./book-apartment.component.css']
})
export class BookApartmentComponent implements OnInit {

  apartmentBookForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  createForm(): void {
    this.apartmentBookForm = this.fb.group({
        'firstName': ['', Validators.required],
        'lastName': ['', Validators.required],
        'email': ['', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
        'phoneNumber': ['', Validators.required],
        'addressLine1': ['', Validators.required],
        'addressLine2': [''],
        'city': ['', Validators.required],
        'state': ['', Validators.required],
        'zip': ['', Validators.required],
        'country': ['', Validators.required]
    });
  }

  bookApartment(){
    if (this.apartmentBookForm.valid) {
      console.log(this.apartmentBookForm.value)
    } else {

    }
  }

  ngOnInit() {
  }

}
