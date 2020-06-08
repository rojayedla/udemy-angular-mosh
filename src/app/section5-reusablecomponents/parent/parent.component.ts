import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  post = {
    title: 'Title',
    isFavorite: true
  };
  constructor() { }

  ngOnInit() {
  }

  onFavoriteChanged(isFavorite) {
    console.log('output'+ isFavorite);
  }

}
