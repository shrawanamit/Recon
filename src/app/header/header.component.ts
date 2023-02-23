import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../service/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentVersion = 'v-0.0.15';
  mainMenu = [];
  isLogin = false;
  userDetails: any = [];
  dashBoardDetails: any = [];
  isAllProgram = false;
  programData = [];
  tanentCodeArr = [];
  isSelect = false;
  reconObject = {};

  constructor(private globalService: GlobalService, private router: Router) { }

  ngOnInit() {

    if (localStorage.getItem('currentVersion') != this.currentVersion) {
      localStorage.clear();
      localStorage.setItem('currentVersion', this.currentVersion);
    }
    if (localStorage.getItem('userInfo') == null) {
      this.mainMenu = [];
      this.router.navigate(['login']);
    } else {
      var details: any = JSON.parse(localStorage.getItem('userInfo'));
      this.userDetails = details[0];
      this.reconObject = this.userDetails.dashboardModules;
      this.isLogin = true;
      // this.programData = [
      //   {
      //     name: 'Dashboard',
      //     slug: '/dashboard'
      //   },
      //   {
      //     name: 'Configuration',
      //     slug: '/configuration'

      //   },
      //   {
      //     name: 'DQR',
      //     slug: '/settlement'

      //   },

      // ];
      // this.mainMenu = [



      //   {
      //     name: 'Dashboard',
      //     slug: '/dashboard'
      //   },
      //   {
      //     name: 'Configuration',
      //     slug: '/configuration'

      //   },
      //   {
      //     name: 'DQR',
      //     slug: '/settlement'

      //   },

      //   {
      //     name: 'Digital_Receipt',
      //     slug: '/digital'
      //   }

      // ];
      if (this.userDetails.dashboardModules.find(x => x.d_ModuleID == 1)) {
        
        this.mainMenu.push(
          {
            name: 'Dashboard',
            slug: '/dashboard'
           
          }
        )
      }
      if (this.userDetails.dashboardModules.find(x => x.d_ModuleID == 2)) {
       
        this.mainMenu.push(
          {
            name: 'Configuration',
            slug: '/configuration'
           
          }
        )
      }
      
      if (this.userDetails.dashboardModules.find(x => x.d_ModuleID == 4)) {
       
        this.mainMenu.push(
          {
            name: 'DR-Dashboard',
            slug: '/digital'
          }
        )
      }
      if (this.userDetails.dashboardModules.find(x => x.d_ModuleID == 4)) {
       
        this.mainMenu.push(
          {
            name: 'ValidateFile',
            slug: '/validate'
          }
        )
      }

      if (this.userDetails.dashboardModules.find(x => x.d_ModuleID == 3)) {

        this.mainMenu.push(
          {
            name: 'Reports',
            // slug: '/settlement'
          }
        )
        if (this.userDetails.dashboardModules.find(((el) => el.child.find((item) => item.d_ModuleID === 5)))) {
          this.programData.push(
            {
              name: 'DQR',
              slug: '/settlement',
             
            }
          )
        }
        if (this.userDetails.dashboardModules.find(((el) => el.child.find((item) => item.d_ModuleID === 6)))) {
          this.programData.push(
            {
              name: 'Recon Status',
              slug: '/recon_status'
            }
          )
        }
        if (this.userDetails.dashboardModules.find(((el) => el.child.find((item) => item.d_ModuleID === 7)))) {
          this.programData.push(
            {
              name: 'DR_Reports',
              slug: '/dr_reports',
             
            }
          )
        }
        if (this.userDetails.dashboardModules.find(((el) => el.child.find((item) => item.d_ModuleID === 7)))) {
          this.programData.push(
            {
              name: 'Recon Summary',
              slug: '/reconSummary',
             
            }
          )
        }
      }





    }
  }
  logout() {
    localStorage.removeItem('userInfo');
    this.router.navigate(['login']);
    this.mainMenu = [];
    this.isLogin = false;
  }
  signUp() {
    this.router.navigate(['signup']);
  }
  seeAllPrograms() {
    if (this.isAllProgram == false) {
      this.isAllProgram = true;
    }
    else {
      this.isAllProgram = false;
    }
  }
  getselectedProgram(tanentCOde, index) {
    this.isAllProgram = false;
  }
  hidePopup(){
    this.isAllProgram = false;
  }
}
