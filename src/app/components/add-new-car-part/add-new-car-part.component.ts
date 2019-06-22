import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-add-new-car-part',
  templateUrl: './add-new-car-part.component.html',
  styleUrls: ['./add-new-car-part.component.css']
})
export class AddNewCarPartComponent implements OnInit {

  addNewForm: FormGroup;
  shopsList = ["vwheritage", "justkampers", "eBay"];
  constructor(private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.addNewForm = this.formBuilder.group({
      partName: ['', Validators.required],
      partNumber: ['', Validators.required],
      webshop: ['', Validators.required],
      partUrl: [''],
      pictureUrl: [''],
      inStock: [false],
      price: ['', Validators.required]
    })
  }

  cancel() {
    this.router.navigate(['/']);
  }

  saveNew(part: HTMLObjectElement){
    console.log(part);
  }

}
