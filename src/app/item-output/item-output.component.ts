import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-output',
  templateUrl: './item-output.component.html',
  styleUrls: ['./item-output.component.scss']
})
export class ItemOutputComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  addItem(value: string){
    this.newItemEvent.emit(value);
  }
}
