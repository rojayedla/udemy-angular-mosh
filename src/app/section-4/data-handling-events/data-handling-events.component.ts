import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-handling-events',
  templateUrl: './data-handling-events.component.html',
  styleUrls: ['./data-handling-events.component.scss']
})
export class DataHandlingEventsComponent implements OnInit {
  imageUrl = '';
  colSpan = 2;
  isActive = true;
  email = 'me@example.com';
  text = 'abcdef ghijklmnopqrstuv wxyz dfsadfsadfasfsadfsadfads';
  constructor() {
  }

  ngOnInit() {
  }
  //Template variable
 
onKeyUpSpace(test) {
    console.log(test);
  }

  onKeyUp() {
    console.log(this.email);
  }
}
