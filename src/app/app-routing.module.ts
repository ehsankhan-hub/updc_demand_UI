import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './component/autocomplete/autocomplete.component';
import { InputComponent } from './input/input.component';
import { HomeComponent } from './component/home/home.component';
import { CardComponent } from './component/card/card.component';
import { SliderComponent } from './component/slider/slider.component';
import { TableComponent } from './component/table/table.component';
import { FormdesignComponent } from './component/formdesign/formdesign.component';
import { CreatedemandComponent } from './component/createdemand/createdemand.component';
import { LoginComponent } from './login/login.component';
import { MenubarComponent } from './component/menubar/menubar.component';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'autocomplete',component:AutocompleteComponent},
  {path:'input',component:InputComponent, canActivate: [AuthGuard]},
  {path:'createdemand',component:CreatedemandComponent, canActivate: [AuthGuard]},
  {path:'card',component:CardComponent, canActivate: [AuthGuard]},
  {path:'slider',component:SliderComponent, canActivate: [AuthGuard]},
  {path:'table',component:TableComponent, canActivate: [AuthGuard]},
  {path:'form',component:FormdesignComponent, canActivate: [AuthGuard]},
 
  {path:'',component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
