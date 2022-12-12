import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {

  lineThrough = '';

  @Input() item: string = "";

  @Output() deleteItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  delete(){
    this.deleteItemEvent.emit(this.item);
    this.lineThrough = this.lineThrough ? '' : 'line-through';
  }

}
