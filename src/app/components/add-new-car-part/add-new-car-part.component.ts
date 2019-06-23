import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { CarPartModel } from 'src/app/models/CarPartModel';
import { PartsDbService } from 'src/app/service/parts-db.service';

@Component({
  selector: 'app-add-new-car-part',
  templateUrl: './add-new-car-part.component.html',
  styleUrls: ['./add-new-car-part.component.css']
})
export class AddNewCarPartComponent implements OnInit {

  addNewForm: FormGroup;
  shopsList = ["vwheritage", "justkampers", "eBay"];

  carPart: CarPartModel = {
    id: '',
    instock: false,
    partName: '',
    partNumber: '',
    price: 0,
    purchaseDate: new Date,
    webshop: ''
  }

  constructor(private router: Router, private formBuilder: FormBuilder, private service: PartsDbService) {
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

  addItem() {
    this.service.addItem(this.carPart);
  }

  saveNew(part: HTMLObjectElement){
    console.log(part);
  }

}
