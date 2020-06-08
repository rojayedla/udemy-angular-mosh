import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
 

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
// child components
export class FavoriteComponent implements OnInit {
  @Input() isFavorite: boolean;
  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log('onclick');
    this.isFavorite = !this.isFavorite;
    this.change.emit(this.isFavorite);
  }



}
