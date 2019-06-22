import { Injectable } from '@angular/core';
import { CarPartModel } from '../models/CarPartModel';

@Injectable({
  providedIn: 'root'
})
export class PartsDbService {

  constructor() { }

  get():CarPartModel[] {
    return [
      { 
        id: "1",
        partName: "Porche alloy wheel",
        partNumber: "123-234-456-A",
        webshop: "vwhentage",
        instock: false,
        purchaseDate: new Date(),
        price: 36058
      },
      { 
        id: "2",
        partName: "Front Suspension",
        partNumber: "567-987-567",
        webshop: "Justcampers",
        instock: false,
        purchaseDate: new Date(),
        price: 36058
      },
      { 
        id: "3",
        partName: "First Part",
        partNumber: "123-234-456-A",
        webshop: "eBay",
        instock: false,
        purchaseDate: new Date(),
        price: 36058
      },
      { 
        id: "4",
        partName: "Second Part",
        partNumber: "123-234-456-A",
        webshop: "eBay",
        instock: false,
        purchaseDate: new Date(),
        price: 36058
      },
      { 
        id: "5",
        partName: "Third Part",
        partNumber: "123-234-456-A",
        webshop: "eBay",
        instock: false,
        purchaseDate: new Date(),
        price: 36058
      }
  
    ];
  }
}