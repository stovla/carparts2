import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { PartsDbService } from 'src/app/service/parts-db.service';

@Component({
  selector: 'app-add-new-car-part',
  templateUrl: './add-new-car-part.component.html',
  styleUrls: ['./add-new-car-part.component.css']
})
export class AddNewCarPartComponent implements OnInit {

  addNewForm: FormGroup;
  shopsList = ["vwheritage", "justkampers", "eBay"];

  constructor(private router: Router, private formBuilder: FormBuilder, private service: PartsDbService) {
  }

  ngOnInit() {
    this.addNewForm = this.formBuilder.group({
      partName: ['', Validators.required],
      partNumber: ['', Validators.required],
      webshop: ['', Validators.required],
      inStock: [false],
      purchaseDate: new Date,
      price: [0, Validators.required]
    })
  }

  cancel() {
    this.router.navigate(['/']);
  }

  addItem() {
    this.service.addItem(this.addNewForm.value).then( res => {
      this.router.navigate(['/']);
    });
  }
}
