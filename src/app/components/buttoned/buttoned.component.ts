import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttoned',
  templateUrl: './buttoned.component.html',
  styleUrls: ['./buttoned.component.css']
})
export class ButtonedComponent {
  @Input() text: string = '';
  @Output() btnClick = new EventEmitter();

  onClick(){
    this.btnClick.emit();
  }

}
