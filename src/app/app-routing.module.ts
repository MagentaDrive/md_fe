import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers/auth.guard';


const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
  { path: 'account', loadChildren: accountModule,   },
  { path: 'documents', loadChildren: () => import('./documents/documents.module').then(m => m.DocumentsModule) },


  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

