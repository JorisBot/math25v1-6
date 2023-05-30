import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-msgecrits',
  templateUrl: './msgecrits.page.html',
  styleUrls: ['./msgecrits.page.scss'],
})
export class MsgecritsPage implements OnInit {

  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }
  constructor() { }

  ngOnInit() {
  }

}
