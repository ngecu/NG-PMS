import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AddProjectsComponent } from './pages/add-projects/add-projects.component';
import { AllProjectsComponent } from './pages/all-projects/all-projects.component';
import { AllUsersComponent } from './pages/all-users/all-users.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [
  // {path: '', pathMatch: 'full', redirectTo: ''},
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin', component: AdminDashboardComponent},
  {path: 'user', component: UserDashboardComponent},
  {path: 'all_projects', component: AllProjectsComponent},
  {path: 'add_project', component: AddProjectsComponent},
  {path: 'all_users', component: AllUsersComponent},
  {path: 'add_user', component: AddUserComponent},
  {path: 'profile', component: ProfileComponent},

  {path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
