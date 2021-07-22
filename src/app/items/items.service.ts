import { ApirestService } from '../apirest.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor(private _apirest: ApirestService) {
    let jwt =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI2MjQ0ODQ2LCJleHAiOjE2Mjg4MzY4NDZ9.Hfxy5m-I50taQRUz6mo6YriPJvu1Ns0jBpI91NEaKSk';
    localStorage.setItem('token', jwt);
  }

  getItems() {
    return this._apirest.get('items/order');
  }
  newItem(newItem:any){
    return this._apirest.post('items', newItem)
  }
  getTipoItems(){
    return this._apirest.get('tipo-items/')
  }
}
