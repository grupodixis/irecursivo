import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
@Input() elementos :any
@Input() staticText:any
@Output() nuevoItem = new EventEmitter()
itemswitch:any[] = []

  constructor() { }

  ngOnInit() {

  }

  switchItem(id){
    if (this.itemswitch['cap'+ id]){
      this.itemswitch['cap'+ id] = false
    }else{
      this.itemswitch['cap'+ id] = true
    }

  }
  newItem(padre){
    this.nuevoItem.emit(padre)
    
  }

}
