import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class GlobalService {
  keyword: any = [];
  programData = [];

  constructor(private http: HttpClient) {

  }
  public setUploadData(info) {
    this.programData = info;
  }
  public getUploadData() {
    return this.programData;
  }
}
