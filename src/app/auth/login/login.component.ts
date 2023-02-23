import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GlobalService } from 'src/app/service/global.service';
import { DataService } from 'src/app/service/data.service';
declare var $: any;


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    isFormValid = false;
    loginInProgress = false;
    loginForm: any;
    userPassword: any;
    userEmail: any;
    email: any;
    toggleViewPassword = false;
    userInfo = [];
    isLogin = false;
    isSignup = true;
    userDetails: any = [];
    dashBoardDetails: any = [];

    constructor(private globalService: GlobalService, private modalService: NgbModal, private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        if (localStorage.getItem('userInfo') != null) {
            this.router.navigate(['dashboard']);
        } else {
            this.isLogin = true;
        }
    }

    showPassToggle() {
        if (!this.toggleViewPassword) {
            this.toggleViewPassword = true;
        } else {
            this.toggleViewPassword = false;
        }
    }
    processLogin(Rform) {
        this.loginInProgress = true;
        this.loginForm = Rform.form;
        if (this.loginForm.invalid) {
            this.isFormValid = true;
            return;
        }


        const userDeatils = this.loginForm.value;
        this.email = userDeatils.userEmail;
        const userPassword = userDeatils.userPassword;
        const userLowerCase = this.email.toLowerCase();

        this.dataService.doLogin(userLowerCase, userPassword).subscribe((res: Response) => {
            const resSTR = JSON.stringify(res);
            const resJSON = JSON.parse(resSTR);

            if (resJSON.messageCode == '1' && resJSON.data != null) {
                this.userInfo.push(resJSON.data);
                this.loginInProgress = true;
                console.log('login info', resJSON.data);
                localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
                //  this.router.navigate(['/signup']);
                var details: any = JSON.parse(localStorage.getItem('userInfo'));
                this.userDetails = details[0];


                if (this.userDetails.dashboardModules.find(x => x.d_ModuleID == 3)) {
                    // window.location.href = '/settlement';

                    if (this.userDetails.dashboardModules.find(((el) => el.child.find((item) => item.d_ModuleID === 5)))) {
                        window.location.href = '/settlement';
                    }
                    if (this.userDetails.dashboardModules.find(((el) => el.child.find((item) => item.d_ModuleID === 6)))) {
                        window.location.href = '/recon_status';
                    }
                    if (this.userDetails.dashboardModules.find(((el) => el.child.find((item) => item.d_ModuleID === 6)))) {
                        window.location.href = '/dr_summary';
                    }
                    if (this.userDetails.dashboardModules.find(((el) => el.child.find((item) => item.d_ModuleID === 5)))) {
                        window.location.href = '/reconSummary';
                    }
                }
                if (this.userDetails.dashboardModules.find(x => x.d_ModuleID == 4)) {
                    window.location.href = '/digital';
                }
                if (this.userDetails.dashboardModules.find(x => x.d_ModuleID == 2)) {
                    window.location.href = '/configuration';
                }
               
                if (this.userDetails.dashboardModules.find(x => x.d_ModuleID == 4)) {
                    window.location.href = '/validate';
                }
                if (this.userDetails.dashboardModules.find(x => x.d_ModuleID == 1)) {
                    window.location.href = '/dashboard';
                }

            } else {
                this.loginInProgress = false;
                alert('Invalid user credential.');
            }

        });
    }

}
