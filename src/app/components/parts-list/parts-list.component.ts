import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PartsDbService } from '../../service/parts-db.service';
import { CarPartModel } from 'src/app/models/CarPartModel';

@Component({
  selector: 'app-parts-list',
  templateUrl: './parts-list.component.html',
  styleUrls: ['./parts-list.component.css']
})
export class PartsListComponent implements OnInit {

  partsObj: {};
  carPartsList: CarPartModel[];
  constructor(private router: Router, private service: PartsDbService) { }

  ngOnInit() {
    this.service.getPartsFromServer().subscribe(items => {
      this.carPartsList = items;
    });
  }

  addNew() {
    this.router.navigate(['/add-new']);
  }
  
  trackList(index, carPart) {
    return carPart ? carPart.id : undefined;
  }

  detailsSelected() {
    window.alert('Details screen is not yet implemented.'.toUpperCase());
  }

  deleteSelected() {
    window.alert('Delete option is not yet implemented.'.toUpperCase());
  }

}
