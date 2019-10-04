import { Routes, RouterModule } from "@angular/router";
import { ArrdemoComponent } from "./arrdemo/arrdemo.component";
import { CalcComponent } from "./calc/calc.component";
import { PathnotfoundComponent } from "./pathnotfound/pathnotfound.component";



const arr: Routes =[
  {path:"arrdemo",component:ArrdemoComponent },
  {path:"calc",component:CalcComponent },
  {path:'pathnotfound',component:PathnotfoundComponent},
  {path:'**',redirectTo:'/pathnotfound'}
];
export const routing=RouterModule.forRoot(arr);
