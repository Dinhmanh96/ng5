import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemTotal: number;
  email = 'My email';
  list = [];
  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.lis.subscribe(res => this.list = res);
    this.itemTotal = this.list.length;
    this._data.changeList(this.list);
  }
  addEmail() {
    this.list.push(this.email);
    this.email = '';
    this.itemTotal = this.list.length;
    this._data.changeList(this.list);
  }
}
