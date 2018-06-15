import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-productdesc',
  templateUrl: './productdesc.component.html',
  styleUrls: ['./productdesc.component.css']
})
export class ProductdescComponent implements OnInit {
  private  sellerId: number;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.sellerId = this.routeInfo.snapshot.params['id'];
  }

}
