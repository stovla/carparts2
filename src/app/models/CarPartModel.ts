export interface CarPartModel {
    id?: string;
    inStock: boolean;
    partName: string;
    partNumber: string;
    price: number;
    purchaseDate: Date;
    webshop: string;
}