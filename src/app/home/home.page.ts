import { StaticTextService } from './../static-text.service';
import { ItemsService } from '../items/items.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  staticText_home: any;
  staticText_items: any;
  items: any;
  newItem: any = {};
  formItem: boolean = false;
  tipoItems:any 
  constructor(
    private _items: ItemsService,
    private _staticText: StaticTextService
  ) {
    this.getItems();
    this.staticText_home = this._staticText.getTextComponent('home');
    this.getTipoItems()
  }

  getItems() {
    this._items.getItems().subscribe((res) => {
      this.items = res;
     
    });

    this.staticText_items = this._staticText.getTextComponent('items');
  }


  nuevoItem(item) {
    this.formItem = true;
    this.newItem = item;
    //this._items.newItem(newItem)
  }

  registrarNuevoItem(nuevoItem) {
    this.formItem = false;
    
    nuevoItem.inicio = nuevoItem.inicio.split('T')[0]
    nuevoItem.final = nuevoItem.final.split('T')[0]
    console.log(nuevoItem);
    this._items.newItem(nuevoItem).subscribe(res =>{
      console.log(res);
      this.getTipoItems()
    }) 
    
  }

  getTipoItems(){
    this._items.getTipoItems().subscribe(tipoItems =>{
      this.tipoItems = tipoItems
      console.log(tipoItems);
      
    })
  }


}
