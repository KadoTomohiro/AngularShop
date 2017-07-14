import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { Wear } from '../wear';
import { WearService } from '../wear.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  wear: Wear;

  constructor(private route: ActivatedRoute, private wearService: WearService) { }

  ngOnInit() {
    this.route.paramMap
        .switchMap((params: ParamMap) => this.wearService.getWear(params.get('wearName')))
        .subscribe((wear: Wear) => this.wear = wear);
  }

}
