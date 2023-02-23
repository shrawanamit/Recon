import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './service/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Recon Dashboard';

  constructor(private httpClient: HttpClient, private globalService: GlobalService) { }

  ngOnInit() {

  }
}
