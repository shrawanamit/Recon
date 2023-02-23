import { Injectable } from '@angular/core';
import * as global from 'src/app/globals';
import { environment } from 'src/environments/environment';
declare var require: any

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  allProgram = [];

  constructor(
    private utilityService: UtilityService) { }

  downloadFtpFile() {
    // var ftpClient = require('ftp-client'),
    //   config = {
    //     host: 'localhost',
    //     port: 21,
    //     user: 'anonymous',
    //     password: 'anonymous@'
    //   },
    //   options = {
    //     logging: 'basic'
    //   },
    //   client = new ftpClient(config, options);
    // client.connect();
  }
  getMessageFromResponce(result) {
    if (result.messageCode == '1' && result.data.length) {
      var msg = ""
      return msg;
    } else if (result.messageCode == '1' && !result.data.length) {
      var msg = "Data Not Found !"
      return msg;
    } else {
      var msg = "Something Went Wrong !"
      return msg;
    }
  }
  getLetterByFilter(programData) {
    const data = programData.reduce((r, e) => {
      const group = e.brandName[0].toUpperCase();
      if (!r[group]) { r[group] = { group, children: [e] }; } else { r[group].children.push(e); }
      return r;
    }, {});
    this.allProgram = Object.values(data);
    return this.allProgram;
  }
  programSort(programData) {
    programData.sort(function (a, b) {
      var brandNameA = a.brandName.toLowerCase();
      var brandNameB = b.brandName.toLowerCase();
      if (brandNameA < brandNameB) { return -1; }
      if (brandNameA < brandNameB) { return 1; }
      return 0;
    })
  }
  convertDate(str) {
    const date = new Date(str),
      mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2);
      // console.log("date",date,mnth,day);
    return [date.getFullYear(), mnth, day].join('-');
    
  }
  convertMonth(str) {
    const date = new Date(str),
      mnth = ('0' + (date.getMonth() + 1)).slice(-2);
    return [date.getFullYear(), mnth].join('-');
  }
}
