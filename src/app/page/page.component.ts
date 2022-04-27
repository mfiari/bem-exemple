import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PageComponent implements OnInit {

  constructor() { }

  public mySimpleItemList = [
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

  ngOnInit(): void {
  }

  public selectItem(item): void {
    item.selected = !item.selected;
  }

}
