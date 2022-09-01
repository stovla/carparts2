import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartsDbService } from '../../service/parts-db.service';
import { CarPartModel } from 'src/app/models/CarPartModel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-parts-list',
  templateUrl: './parts-list.component.html',
  styleUrls: ['./parts-list.component.css']
})
export class PartsListComponent implements OnInit {

  partsObj: {};

  list$: Observable<CarPartModel[]>;
  constructor(private router: Router, private service: PartsDbService) { }

  ngOnInit() {
    this.list$ = this.service.items$
  }

  addNew() {
    this.router.navigate(['/add-new']);
  }

  trackList(index, carPart) {
    return carPart ? carPart.id : undefined;
  }

  detailsSelected(carPartId: string) {
    console.log(carPartId);
    this.router.navigate([`/add-new/${carPartId}`]);
  }

  deleteSelected(id: string) {
    this.service.deleteCarpart(id).then(res => {
      window.alert('Deleted Car Part'.toUpperCase());
    });
  }

}
