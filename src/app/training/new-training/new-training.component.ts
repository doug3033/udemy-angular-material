import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  constructor() { }
  @Output() trainingStarted = new EventEmitter()

  onStartTraining() {
    this.trainingStarted.emit();
  }

  ngOnInit() {
    
  }

}
