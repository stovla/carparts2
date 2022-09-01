import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UntypedFormBuilder, Validators, UntypedFormGroup } from '@angular/forms';
import { PartsDbService } from 'src/app/service/parts-db.service';
import { CarPartModel } from 'src/app/models/CarPartModel';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-add-new-car-part',
  templateUrl: './add-new-car-part.component.html',
  styleUrls: ['./add-new-car-part.component.css'],
})
export class AddNewCarPartComponent implements OnInit {
  addNewForm: UntypedFormGroup;
  shopsList = ['vwheritage', 'justkampers', 'eBay'];
  carItem: CarPartModel;
  carItemID: string;
  article$: Observable<CarPartModel>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: UntypedFormBuilder,
    private service: PartsDbService
  ) {}

  ngOnInit() {
    this.addNewForm = this.formBuilder.group({
      partName: ['', Validators.required],
      partNumber: ['', Validators.required],
      webshop: ['', Validators.required],
      inStock: [false],
      purchaseDate: [''],
      price: [0, Validators.required],
    });
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.getItem(id);
      }
    });
  }

  cancel() {
    this.router.navigate(['/']);
  }

  addItem() {
    this.addNewForm.patchValue({
      purchaseDate: new Date().getTime(),
    });
    this.service.addItem(this.addNewForm.value).then((res) => {
      console.log(res);
      this.router.navigate(['/']);
    });
  }

  getItem(id: string) {
    const item = this.service.getItem(id);
    console.log(item);
    // ((res) => {
    //   console.log(res);
    //   // this.addNewForm.patchValue({

    //   // });
    // });
  }
}
