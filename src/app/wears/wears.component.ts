import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WearService } from '../wear.service';
import { Wear } from '../wear';

@Component({
  selector: 'app-wears',
  templateUrl: './wears.component.html',
  styleUrls: ['./wears.component.css']
})
export class WearsComponent implements OnInit {

  category: string;
  wears: Promise<Wear[]>;

  constructor(private router: Router, private wearService: WearService) { }

  ngOnInit() {
    this.category = this.router.url.split('/')[1];
    this.wears = this.wearService.getCategoryWears(this.category);
  }

}
