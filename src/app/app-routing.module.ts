import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './guard/auth.guard';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';

const routes: Routes = [
  {'path':'', component:HomeComponent, canActivate:[authGuard]},
  {'path':'home', redirectTo:'', pathMatch:'full'},
  {'path':'login', component:LoginComponent},
  {'path':'register', component:RegisterComponent},
  {'path':'add-task', component:AddTaskComponent, canActivate:[authGuard]},
  {'path':'edit-task/:id', component:EditTaskComponent, canActivate:[authGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
