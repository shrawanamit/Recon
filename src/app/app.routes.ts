import { Routes } from '@angular/router';

export const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full',
  },
  {
    path: 'signup',
    redirectTo: 'signup',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  

  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
  },
  // {
  //   path: '',
  //   loadChildren: () => import('./ragistration/signup.module').then(mod => mod.signupModule)
  // },
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule)
  },
  {
    path: '',
    loadChildren: () => import('./config/config.module').then(mod => mod.ConfigModule)
  },
  {
    path: '',
    loadChildren: () => import('./dqr/dqr.module').then(mod => mod.DqrModule)
  },
  // recon_status
  {
    path: '',
    loadChildren: () => import('./recon_status/status.module').then(mod => mod.statusModule)
  },
  {
    path: '',
    loadChildren: () => import('./DR_Summary/summary.module').then(mod => mod.summaryModule)
  },
  {
    path: '',
    loadChildren: () => import('./digitalRiceipt/digitalRiceipt.module').then(mod => mod.DigitalRiceiptModule)
  },
  {
    path: '',
    loadChildren: () => import('./ReconSummary/recon-summary.module').then(mod => mod.ReconSummaryModule)
  },
  {
    path: '',
    loadChildren: () => import('./fileValidate/fileValidate.module').then(mod => mod.FileValidateModule)
  },
  {
    path: '',
    loadChildren: () => import('./alert/redAlert.module').then(mod => mod.RedAlertModule)
  }
];
