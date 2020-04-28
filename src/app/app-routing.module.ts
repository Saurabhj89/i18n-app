import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LearningModule } from './learning/learning.module';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/en/home' },
  {path: 'en', component: DashboardComponent,
  children: [
    {path: '', pathMatch: 'full', redirectTo: '/en/home' },
    {path: 'home', component: HomeComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'learning', loadChildren : () => import('./learning/learning.module').then(m => m.LearningModule)}
  ]},
  {path: 'de', component: DashboardComponent,
  children: [
    {path: '', pathMatch: 'full', redirectTo: '/de/home' },
    {path: 'home', component: HomeComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'learning', loadChildren : () => import('./learning/learning.module').then(m => m.LearningModule)}
  ]},
  {path: '**', redirectTo: '/en/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
