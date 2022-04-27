import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bem-item',
  templateUrl: './bem-item.component.html',
  styleUrls: ['./bem-item.component.scss']
})
export class BemItemComponent implements OnInit {

  public myBemItemList = [
    {
      name: 'Item 1',
      description: 'my first item',
      imageLink: 'assets/img/20211011_215001.jpg',
      selected: false
    },
    {
      name: 'Item 2',
      description: 'my second item',
      imageLink: 'assets/img/20211011_215001.jpg',
      selected: false
    },
    {
      name: 'Item 3',
      description: 'my third item',
      imageLink: 'assets/img/20211011_215001.jpg',
      selected: false
    },
    {
      name: 'Item 4',
      description: 'my fourth item',
      imageLink: 'assets/img/20211011_215001.jpg',
      selected: false
    },
    {
      name: 'Item 5',
      description: 'my fifth item',
      imageLink: 'assets/img/20211011_215001.jpg',
      selected: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public selectItem(item): void {
    item.selected = !item.selected;
  }

}
