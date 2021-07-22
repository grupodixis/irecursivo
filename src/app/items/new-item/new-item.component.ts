import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss'],
})
export class NewItemComponent implements OnInit {
 newItem:any = {}
 @Input() padre:any
 @Input() tipoItems:any
 @Output() nuevoItem = new EventEmitter()
  constructor() { }

  ngOnInit() {
    console.log(this.tipoItems);
    
  }

  registerItem(){
    this.newItem.padre = this.padre
    this.nuevoItem.emit(this.newItem)
    
    
  }

}
